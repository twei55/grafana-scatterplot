# Grafana Scatterplot Plugin

A Scatter plot is a type of plot to visualize the dependency between two variables over time. The data are displayed as a collection of points, 
each having the value of one variable determining the position on the horizontal axis and the value of the other variable determining the position on the vertical axis.

Additionally data points are color coded over time.

## Getting started

Install dependencies

```BASH
yarn install
```

Build plugin in development mode or run in watch mode

```BASH
yarn dev
```
or

```BASH
yarn watch
```

Build plugin in production mode

```BASH
yarn build
```

## Test plugin with a local Grafana instance

Create a folder named `grafana-scatterplot` in your local Grafana copy below `data/plugins`.

Copy content of `dist` folder to `data/plugins/grafana-scatterplot` after running `yarn build`.

Start Grafana backend

```BASH
make run
```

Increase number of open files if necessary

```BASH
ulimit -S -n 2048
```

Start Grafana frontend

```BASH
yarn start
```
