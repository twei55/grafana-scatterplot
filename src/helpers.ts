import { FieldType } from '@grafana/data';
import { stylesFactory } from '@grafana/ui';
import { css } from 'emotion';
import * as d3 from 'd3';

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

export const selectedColorRange = (selectedOption: string) => {
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

export const renderPlot = (values: any[], times: any[]) => {
  return values.length > 1 && times.length > 1;
};

export const displayNegativeValueMessage = (scaleMode: string, timeseriesValues: any[]) => {
  return scaleMode === 'logarithmic' && d3.min(timeseriesValues) < 0;
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
    btnModalClose: css`
      margin-top: 20px;
    `,
    bottomXaxisLabel: css`
      bottom: 8px;
      width: 100%;
    `,
  };
});
