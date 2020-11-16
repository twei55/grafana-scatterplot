import React, { CSSProperties, useState } from 'react';
import { PanelProps, FieldType, dateTime } from '@grafana/data';
import { SimpleOptions } from 'types';
import { css, cx } from 'emotion';
import { Modal, Button } from '@grafana/ui';
import * as d3 from 'd3';
import {
  displayNegativeValueMessage,
  domainMin,
  getAxis,
  getStyles,
  renderPlot,
  scale,
  selectedColorRange,
} from 'helpers';

interface Props extends PanelProps<SimpleOptions> {}

export const ScatterplotPanel: React.FC<Props> = ({ options, data, width, height }) => {
  const styles = getStyles();
  const circleRadius = options.circleRadius;

  let allDataValues: any[][] = [];
  let allDataTimes: any[][] = [];
  [allDataValues, allDataTimes] = getValuesFromDataFrames(data.series);

  const dateTimeFormat = 'Y-M-D HH:mm:ss';

  // Define chart margins
  const margin = { left: 50, top: 30, right: 30, bottom: 50 };

  // Calculate dimensions for the inner chart by subtracting the margins.
  const chartWidth = width - (margin.left + margin.right);
  const chartHeight = height - (margin.top + margin.bottom);

  // Horizontal axis
  const xDomainMin = allDataValues.length > 1 ? d3.min(allDataValues[0]) : 0;
  const xDomainMax = allDataValues.length > 1 ? d3.max(allDataValues[0]) : 100;
  const xScale = scale(options.scaleModeX)()
    .domain([domainMin(xDomainMin, options.scaleModeX), xDomainMax])
    .range([0, chartWidth])
    .clamp(true)
    .nice();
  const xAxis = getAxis('bottom', xScale, options.scaleModeX);

  // Vertical axis
  const yDomainMin = allDataValues.length > 1 ? d3.min(allDataValues[1]) : 0;
  const yDomainMax = allDataValues.length > 1 ? d3.max(allDataValues[1]) : 100;
  const yScale = scale(options.scaleModeY)()
    .domain([domainMin(yDomainMin, options.scaleModeY), yDomainMax])
    .range([chartHeight, 0])
    .clamp(true);
  const yAxis = getAxis('left', yScale, options.scaleModeY);

  // Color Gradient based on time range
  const timeMin = allDataTimes.length > 1 ? d3.min(allDataTimes[0]) : 0;
  const timeMax = allDataTimes.length > 1 ? d3.max(allDataTimes[0]) : 100;
  const colorScale = d3
    .scaleQuantize<string>()
    .range(selectedColorRange(options.colorRange))
    .domain([timeMin, timeMax]);

  // Legend
  const legendBackgroundGradient: CSSProperties = {
    background: 'linear-gradient(to top,' + selectedColorRange(options.colorRange).join(',') + ')',
  };

  // Modal
  const displayModal =
    displayNegativeValueMessage(options.scaleModeX, allDataValues[0]) ||
    displayNegativeValueMessage(options.scaleModeY, allDataValues[1]);

  const modalBody =
    "One of your time series contains negative values and can't be displayed on a logarithmic scale. Please select a linear scale.";
  const [modalIsOpen, setModalIsOpen] = useState(displayModal);
  const onModalClose = () => {
    setModalIsOpen(false);
  };

  const [tooltipProps, setToolTipProps] = useState({ x: 0, y: 0, posLeft: 0, posTop: 0, dateTime: ''});
  const [tooltipIsHidden, setTooltipIsHidden] = useState(true);

  const showTooltip = (x: number, y: number, left: number, top: number, timestamp: number) => {
    setToolTipProps({
      x: x,
      y: y,
      posLeft: left + 70,
      posTop: top + 20,
      dateTime: dateTime(timestamp).format(dateTimeFormat)
    });
    setTooltipIsHidden(false)
  };

  const hideTooltip = () => {
    setTimeout(() => setTooltipIsHidden(true), 500)
  }

  return (
    <div
      className={cx(
        styles.wrapper,
        css`
          width: ${width}px;
          height: ${height}px;
        `
      )}
    >
      <Modal className="modal" title="Warning" isOpen={modalIsOpen} onDismiss={onModalClose}>
        {modalBody}
        <div>
          <Button className={styles.btnModalClose} variant="primary" onClick={onModalClose}>
            Close
          </Button>
        </div>
      </Modal>

      <div className="graph-tooltip grafana-tooltip" hidden={tooltipIsHidden} style={{left: `${tooltipProps.posLeft}px`, top: `${tooltipProps.posTop}px`}}>
        <div className="graph-tooltip-time">{tooltipProps.dateTime}</div>
        {[tooltipProps.x, tooltipProps.y].map((name, index) => (
          <div className="graph-tooltip-list-item ">
            <div className="graph-tooltip-series-name">
              {data.series[index].name}
            </div>
            <div className="graph-tooltip-value">{name}</div>
          </div>
        ))}
      </div>

      <svg
        className={styles.svg}
        width={width}
        height={height}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox={`0 0 ${width} ${height}`}
      >
        <g transform={`translate(${margin.left}, ${margin.top})`}>
          <g>
            {renderPlot(allDataValues, allDataTimes) ? (
              allDataValues[0].map((value: any, index: number) => (
                <circle
                  key={'circle-' + index}
                  transform={`translate(${xScale(value)}, ${yScale(allDataValues[1][index])})`}
                  style={{ fill: `${colorScale(allDataTimes[0][index])}` }}
                  data-values={`${value}, ${allDataValues[1][index]}`}
                  r={circleRadius}
                  stroke="white"
                  strokeOpacity="0"
                  strokeWidth="5"
                  onMouseMove={() => showTooltip(value, allDataValues[1][index], xScale(value), yScale(allDataValues[1][index]), allDataTimes[0][index])}
                  onMouseOut={hideTooltip}
                >
                </circle>
              ))
            ) : (
              <text transform={`translate(${chartWidth / 2 - 20}, ${chartHeight / 2 - 20})`}>No data</text>
            )}
          </g>
          <g
            transform={`translate(0, ${chartHeight})`}
            ref={node => {
              d3.select(node).call(xAxis as any);
            }}
          />
          <g
            ref={node => {
              d3.select(node).call(yAxis as any);
            }}
          />
        </g>
      </svg>
      <div className="axisLabel left-yaxis-label">{data.series.length > 1 ? data.series[0].name : ''}</div>
      <div className={`axisLabel ${styles.bottomXaxisLabel}`}>{data.series.length > 1 ? data.series[1].name : ''}</div>
      {options.showLegend ? (
        <div className={styles.legend} style={legendBackgroundGradient}>
          <div className={styles.legendLabel}>
            <div className={styles.legendLabelFrom}>{data.timeRange.from.format(dateTimeFormat)}</div>
            <div className={styles.legendLabelTo}>{data.timeRange.to.format(dateTimeFormat)}</div>
          </div>
        </div>
      ) : (
        <div />
      )}
    </div>
  );
};

export const getValuesFromDataFrames = (dataSeries: any[]) => {
  let allDataValues: any[][] = [];
  let allDataTimes: any[][] = [];

  dataSeries.forEach(series => {
    const dataValues = series.fields.find((field: any) => field.type === FieldType.number);
    const dataTimes = series.fields.find((field: any) => field.type === FieldType.time);

    if (dataValues && dataTimes) {
      allDataValues.push(dataValues.values.toArray());
      allDataTimes.push(dataTimes.values.toArray());
    }
  });

  return [allDataValues, allDataTimes];
};
