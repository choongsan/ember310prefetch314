import Ember from 'ember';

export default Ember.Route.extend({
  prefetch() {
    const parent = this.prefetched('parent');
    return parent.then(function (model) {
      return {
    		derivedParentValue: model.parentValue,
      }
    })
  },

  actions: {
  	refreshChild() {
    	this.refresh();	
    }
  }
});
