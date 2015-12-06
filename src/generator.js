var generator = module.exports = require('./lib/product-generator')({
  actions: require('./data/actions')
, contexts: require('./data/contexts')
, objects: require('./data/objects')
, template: 'A way to :action :object :context'
});