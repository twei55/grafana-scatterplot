import React, { CSSProperties } from 'react';
import { PanelProps, FieldType } from '@grafana/data';
import { SimpleOptions } from 'types';
import { css, cx } from 'emotion';
import { stylesFactory } from '@grafana/ui';
import * as d3 from 'd3';

interface Props extends PanelProps<SimpleOptions> {}

export const ScatterplotPanel: React.FC<Props> = ({ options, data, width, height }) => {
  const styles = getStyles();
  const circleRadius = options.circleRadius;

  let allDataValues: any[][] = [];
  let allDataTimes: any[][] = [];
  [allDataValues, allDataTimes] = getValuesFromDataFrames(data.series);

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

  const timeMin = allDataTimes.length > 1 ? d3.min(allDataTimes[0]) : 0;
  const timeMax = allDataTimes.length > 1 ? d3.max(allDataTimes[0]) : 100;
  const colorScale = d3
    .scaleQuantize<string>()
    .range(selectedColorRange(options.colorRange))
    .domain([timeMin, timeMax]);

  const legendBackgroundGradient: CSSProperties = {
    background: 'linear-gradient(to top,' + selectedColorRange(options.colorRange).join(',') + ')',
  };

  const renderPlot = allDataValues.length > 1 && allDataTimes.length > 1;

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
            {renderPlot ? (
              allDataValues[0].map((value: any, index: number) => (
                <circle
                  key={'circle-' + index}
                  transform={`translate(${xScale(value)}, ${yScale(allDataValues[1][index])})`}
                  style={{ fill: `${colorScale(allDataTimes[0][index])}` }}
                  data-values={`${value}, ${allDataValues[1][index]}`}
                  r={circleRadius}
                >
                  <title>
                    X: {`${value}`}, Y: {`${allDataValues[1][index]}`}
                  </title>
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
          <text className="axisLabel" transform={`translate(${chartWidth / 2}, ${chartHeight + margin.bottom - 10})`}>
            {data.series.length > 1 ? data.series[0].name : ''}
          </text>
          <g
            ref={node => {
              d3.select(node).call(yAxis as any);
            }}
          />
          <text
            className="axisLabel"
            transform={`rotate(-90), translate(${-(chartHeight / 2)}, ${-(margin.left - 10)})`}
          >
            {data.series.length > 1 ? data.series[1].name : ''}
          </text>
        </g>
      </svg>
      {options.showLegend ? (
        <div className={styles.legend} style={legendBackgroundGradient}>
          <div className={styles.legendLabel}>
            <div className={styles.legendLabelFrom}>{data.timeRange.from.format('Y-M-D HH:mm:ss')}</div>
            <div className={styles.legendLabelTo}>{data.timeRange.to.format('Y-M-D HH:mm:ss')}</div>
          </div>
        </div>
      ) : (
        <div />
      )}
    </div>
  );
};

const selectedColorRange = (selectedOption: string) => {
  let colorRange: string[] = [];
  switch (selectedOption) {
    case 'plasma':
      colorRange = ['#0d0887', '#5302a3', '#8b0aa5', '#b83289', '#db5c68', '#f48849', '#febd2a', '#f0f921'];
      break;
    case 'turbo':
      colorRange = ['#23171b', '#4076f5', '#26d0cd', '#5ffc73', '#cbe839', '#ff9b21', '#d6390f', '#900c00'];
      break;
    case 'warm':
      colorRange = ['#6e40aa', '#a83cb3', '#df40a1', '#ff507a', '#ff704e', '#f89b31', '#d2c934', '#aff05b'];
      break;
    case 'spectral':
      colorRange = ['#d53e4f', '#f46d43', '#fdae61', '#fee08b', '#e6f598', '#abdda4', '#66c2a5', '#3288bd'];
      break;
  }
  return colorRange;
};

// A log scale domain must not include or cross zero.
// https://stackoverflow.com/questions/40438911/logarithmic-scale-returns-nan
export const domainMin = (domainMin: number, scaleMode: string) => {
  return domainMin === 0 && scaleMode === 'logarithmic' ? 1e-6 : domainMin;
};

export const scale = (scaleMode: string) => {
  return scaleMode === 'linear' ? d3.scaleLinear : d3.scaleLog;
};

export const getAxis = (orientation: string, scale: any, scaleMode: string) => {
  let axis;
  if (orientation === 'bottom') {
    axis = d3.axisBottom(scale);
  } else {
    axis = d3.axisLeft(scale);
  }
  if (scaleMode === 'logarithmic') {
    axis = axis.ticks(10, '~s');
  }

  return axis;
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

export const getStyles = stylesFactory(() => {
  return {
    wrapper: css`
      position: relative;
    `,
    svg: css`
      position: absolute;
      top: 0;
      left: 0;
    `,
    legend: css`
      height: 80%;
      position: absolute;
      right: 20px;
      width: 12px;
    `,
    legendLabel: css`
      writing-mode: tb-rl;
      transform: rotate(-180deg);
      position: absolute;
      left: 12px;
      font-size: 0.8em;
      height: 100%;
    `,
    legendLabelFrom: css`
      position: absolute;
      text-align: start;
      height: 100%;
    `,
    legendLabelTo: css`
      position: absolute;
      text-align: end;
      height: 100%;
    `,
  };
});
