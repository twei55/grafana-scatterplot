import * as d3 from 'd3';
import { displayNegativeValueMessage, domainMin, renderPlot, scale } from './helpers';

describe('displayNegativeValueMessage', () => {
  it('returns true if scale is logarithmic and time series contains negative values', () => {
    expect(displayNegativeValueMessage('logarithmic', [1, -1])).toBeTruthy();
  });

  it('returns false if scale is logarithmic and time series contains only positive values', () => {
    expect(displayNegativeValueMessage('logarithmic', [1, 2])).toBeFalsy();
  });

  it('returns false if scale is linear and time series contains negative values', () => {
    expect(displayNegativeValueMessage('linear', [1, -1])).toBeFalsy();
  });

  it('returns false if scale is linear and time series contains only positive values', () => {
    expect(displayNegativeValueMessage('linear', [1, 2])).toBeFalsy();
  });
});

describe('domainMin', () => {
  it('returns 0 as domain minimum when scale mode is linear', () => {
    expect(domainMin(0, 'linear')).toEqual(0);
  });

  it('returns passed domain minimum when not equal 0 and scale mode is linear', () => {
    expect(domainMin(2, 'linear')).toEqual(2);
  });

  it('returns 1e-6 as domain minimum when scale mode is not linear', () => {
    expect(domainMin(0, 'logarithmic')).toEqual(1e-6);
  });

  it('returns passed domain minimum when not equal 0 and scale mode is logarithmic', () => {
    expect(domainMin(2, 'logarithmic')).toEqual(2);
  });
});

describe('renderPlot', () => {
  it('returns false if no time series data is present', () => {
    expect(renderPlot([], [])).toBeFalsy();
  });

  it('returns false if only one time series is present', () => {
    expect(renderPlot([1], [1])).toBeFalsy();
  });

  it('returns true if two time series are present', () => {
    expect(renderPlot([1, 2], [1, 2])).toBeTruthy();
  });
});

describe('scale', () => {
  it('returns d3.scaleLinear as scale function when scale mode is linear', () => {
    expect(scale('linear')).toEqual(d3.scaleLinear);
  });

  it('returns d3.scaleLog as scale function  when scale mode is not linear', () => {
    expect(scale('logarithmic')).toEqual(d3.scaleLog);
  });
});
