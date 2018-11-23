let { reduxPage, initStore } = (process.env['NODE_ENV'] === 'development') ? require('state/store/development') : require('state/store/production')

export {
  reduxPage,
  initStore
}
