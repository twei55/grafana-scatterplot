import React from 'react';
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
  const xScale = d3
    .scaleLinear()
    .domain([xDomainMin, xDomainMax])
    .range([0, chartWidth]);
  const xAxis = d3.axisBottom(xScale);

  // Vertical axis
  const yDomainMin = allDataValues.length > 1 ? d3.min(allDataValues[1]) : 0;
  const yDomainMax = allDataValues.length > 1 ? d3.max(allDataValues[1]) : 100;
  const yScale = d3
    .scaleLinear()
    .domain([yDomainMin, yDomainMax])
    .range([chartHeight, 0]);
  const yAxis = d3.axisLeft(yScale);

  const timeMin = allDataTimes.length > 1 ? d3.min(allDataTimes[0]) : 0;
  const timeMax = allDataTimes.length > 1 ? d3.max(allDataTimes[0]) : 100;

  const colorScale = d3
    .scaleQuantize<string>()
    .range(selectedColorRange(options.colorRange))
    .domain([timeMin, timeMax]);

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
                  r={circleRadius}
                />
              ))
            ) : (
              <circle r="0" />
            )}
          </g>
          <g
            transform={`translate(0, ${chartHeight})`}
            ref={node => {
              d3.select(node).call(xAxis as any);
            }}
          />
          <text className="axisLabel" transform={`translate(${chartWidth / 2}, ${chartHeight + margin.bottom - 10})`}>
            {data.series.length > 1 ? data.series[0].name : 'X'}
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
            {data.series.length > 1 ? data.series[1].name : 'Y'}
          </text>
        </g>
      </svg>
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
  };
});
