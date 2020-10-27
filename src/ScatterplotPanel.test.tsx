/* tslint:disable */

import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as d3 from 'd3';

import { ScatterplotPanel, getValuesFromDataFrames } from './ScatterplotPanel';

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
