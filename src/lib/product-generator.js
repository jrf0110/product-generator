var RandoArray = require('./rando-array');

var ruleDefinitions = [
  
].reduce( function( obj, rule ){
  obj[ rule.name ] = rule;
  return obj;
}, {});

module.exports = function( options ){
  return Object.create({
    rules: []

  , template: options.template

  , ruleDefinitions: ruleDefinitions

  , actions:    RandoArray( options.actions )
  , contexts:   RandoArray( options.contexts )
  , objects:    RandoArray( options.objects )

  , get: function(){
      var data = {
        action: this.actions.get()
      , context: this.contexts.get()
      , object: this.objects.get()
      };

      data.indefinite_article = 'aeiou'.indexOf( data.object[0] ) > -1 ? 'an' : 'a';

      var result = Object
        .keys( data )
        .reduce( function( str, k ){
          return str.replace( new RegExp( ':' + k, 'g' ), data[ k ] );
        }, this.template );

      this.rules.forEach( function( rule ){
        result = this.ruleDefinitions[ rule.name ].fn( result, rule.data );
      }.bind( this ));

      return result;
    }

  , use: function( rule ){
      if ( typeof rule === 'function' ){
        rule = { name: 'custom', fn: rule };
      }

      if ( !(rule.name in this.ruleDefinitions) ){
        throw new Error('Invalid rule: `'  + rule.name + '`.');
      }

      this.rules.push( rule );

      return this;
    }
  });
};