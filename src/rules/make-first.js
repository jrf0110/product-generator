module.exports.name = 'makeFirst';

module.exports.fn = function( list, item ){
  var i = list.indexOf( item );
  if ( i === -1 ) return list;

  var first = list[0];
  list[i] = first;
  list[0] = item;

  return list;
};