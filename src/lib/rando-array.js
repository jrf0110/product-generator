module.exports = function( list ){
  if ( !Array.isArray( list ) ){
    throw new Error('Invalid first argument: `' + typeof list + '`. Must be Array.');
  }

  return Object.create({
    list: list
  , get: function(){
      return this.list[ ~~( Math.random() * this.list.length ) ];
    }
  });
};