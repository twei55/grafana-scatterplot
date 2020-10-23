/* tslint:disable */

import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as d3 from 'd3';

import { ScatterplotPanel, getValuesFromDataFrames, domainMin, scale } from './ScatterplotPanel';

configure({ adapter: new Adapter() });

const getProps = () => {
  return {
    options: {
      circleRadius: '1',
      colorRange: 'warm',
      scaleModeX: 'linear',
      scaleModeY: 'linear',
    },
    data: {
      series: [
        {
          fields: [
            {
              type: 'number',
              values: {
                toArray: () => [0, 1, 2],
              },
            },
            {
              type: 'time',
              values: {
                toArray: () => [1, 2, 3],
              },
            },
          ],
        },
        {
          fields: [
            {
              type: 'number',
              values: {
                toArray: () => [3, 4, 5],
              },
            },
            {
              type: 'time',
              values: {
                toArray: () => [4, 5, 6],
              },
            },
          ],
        },
      ],
    },
    width: 100,
    height: 100,
  };
};

const getPropsWithoutData = () => {
  return {
    options: {
      circleRadius: '1',
      colorRange: 'warm',
      scaleMode: 'linear',
    },
    data: {
      series: [],
    },
    width: 100,
    height: 100,
  };
};

describe('<ScatterplotPanel />', () => {
  describe('when two data series are present', () => {
    it('renders graph successfully', () => {
      const wrapper = shallow(<ScatterplotPanel {...getProps()} />);
      const graph = wrapper.find('svg g g');

      expect(graph).toHaveLength(3);
    });

    it('renders graph with 3 circles', () => {
      const wrapper = shallow(<ScatterplotPanel {...getProps()} />);
      const circles = wrapper.find('svg g g circle');

      expect(circles).toHaveLength(3);
    });
  });

  describe('when no data series is present', () => {
    it('renders a text node', () => {
      const wrapper = shallow(<ScatterplotPanel {...getPropsWithoutData()} />);
      const text = wrapper.find('svg g g text');

      expect(text).toHaveLength(1);
    });
  });
});

describe('getValuesFromDataFrames', () => {
  it('returns values and times from data series', () => {
    expect(getValuesFromDataFrames(getProps().data.series)).toEqual([
      [
        [0, 1, 2],
        [3, 4, 5],
      ],
      [
        [1, 2, 3],
        [4, 5, 6],
      ],
    ]);
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

describe('scale', () => {
  it('returns d3.scaleLinear as scale function when scale mode is linear', () => {
    expect(scale('linear')).toEqual(d3.scaleLinear);
  });

  it('returns d3.scaleLog as scale function  when scale mode is not linear', () => {
    expect(scale('logarithmic')).toEqual(d3.scaleLog);
  });
});
