import Ember from 'ember';

export default Ember.Route.extend({
  prefetch() {
  	return {
    	parentValue: 1,
    }
  },
  actions: {
  	updateParentValue() {
      Ember.set(this.modelFor('parent'), 'parentValue', 111111);
      return false;
    }
  }
});
