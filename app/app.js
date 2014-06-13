import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';

var CustomResolver = Resolver.extend({
  podBasedModuleName: function(parsedName){ 
    var podPrefix = this.namespace.podModulePrefix || this.namespace.modulePrefix;
    var fullNameWithoutType = parsedName.fullNameWithoutType;

    if (parsedName.type === 'template') {
      fullNameWithoutType = fullNameWithoutType.replace(/^components\//, '');
    }

    return podPrefix + '/' + fullNameWithoutType + '/' + parsedName.type;
  }
});

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: 'some-test', // TODO: loaded via config
  Resolver: CustomResolver
});

loadInitializers(App, 'some-test');

export default App;
