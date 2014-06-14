import Ember from 'ember';

export default Ember.Controller.extend({
  name: null,

  message: Ember.computed('name', function() {
    var name = this.get('name');
    return `Hello ${name}, how are you?`
  })
});
