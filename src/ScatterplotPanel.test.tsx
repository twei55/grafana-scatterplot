/* tslint:disable */

import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ScatterplotPanel, getValuesFromDataFrames } from './ScatterplotPanel';

configure({ adapter: new Adapter() });

const getProps = () => {
  return {
    options: {
      circleRadius: '1',
      colorRange: 'warm',
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

describe('<ScatterplotPanel />', () => {
  it('renders successfully', () => {
    const wrapper = shallow(<ScatterplotPanel {...getProps()} />);
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
