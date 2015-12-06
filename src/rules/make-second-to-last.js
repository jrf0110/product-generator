module.exports.name = 'makeSecondToLast';

module.exports.fn = function( list, item ){
  var i = list.indexOf( item );
  if ( i === -1 ) return list;

  var secondToLast = list[ list.length - 2 ];
  list[i] = secondToLast;
  list[ list.length - 2 ] = item;

  return list;
};