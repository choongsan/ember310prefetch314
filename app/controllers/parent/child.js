import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
	  refreshValue() {
        this.send('updateParentValue');
        this.send('refreshChild');
    },
  }
});
