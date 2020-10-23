import { PanelPlugin } from '@grafana/data';
import { SimpleOptions } from './types';
import { ScatterplotPanel } from './ScatterplotPanel';

export const plugin = new PanelPlugin<SimpleOptions>(ScatterplotPanel).setPanelOptions(builder => {
  return builder
    .addSelect({
      path: 'colorRange',
      defaultValue: 'warm',
      name: 'Color Range',
      settings: {
        options: [
          {
            value: 'plasma',
            label: 'Plasma',
          },
          {
            value: 'spectral',
            label: 'Spectral',
          },
          {
            value: 'turbo',
            label: 'Turbo',
          },
          {
            value: 'warm',
            label: 'Warm',
          },
        ],
      },
    })
    .addSelect({
      path: 'circleRadius',
      defaultValue: '1',
      name: 'Circle Radius',
      settings: {
        options: [
          { value: '1', label: '1' },
          { value: '2', label: '2' },
          { value: '3', label: '3' },
          { value: '4', label: '4' },
        ],
      },
    })
    .addRadio({
      path: 'scaleModeX',
      defaultValue: 'linear',
      name: 'X-Axis: Scale Mode',
      settings: {
        options: [
          {
            value: 'linear',
            label: 'Linear',
          },
          {
            value: 'logarithmic',
            label: 'Logarithmic',
          },
        ],
      },
    })
    .addRadio({
      path: 'scaleModeY',
      defaultValue: 'linear',
      name: 'Y-Axis: Scale Mode',
      settings: {
        options: [
          {
            value: 'linear',
            label: 'Linear',
          },
          {
            value: 'logarithmic',
            label: 'Logarithmic',
          },
        ],
      },
    });
});
