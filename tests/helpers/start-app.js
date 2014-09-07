import Ember from 'ember';
import Application from 'some-test/app';
import Router from 'some-test/router';
import config from 'some-test/config/environment';

export default function startApp(attrs) {
  var App;

  var attributes = Ember.merge(config, attrs); // use defaults, but you can override;

  Router.reopen({
    location: 'none'
  });

  Ember.run(function() {
    App = Application.create(attributes);
    App.setupForTesting();
    App.injectTestHelpers();
  });

  App.reset(); // this shouldn't be needed, i want to be able to "start an app at a specific URL"

  return App;
}
