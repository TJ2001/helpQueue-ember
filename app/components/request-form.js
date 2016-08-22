import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  addHelpRequest: false,
  actions: {
    helpFormShow() {
      this.set('addHelpRequest', true);
    },

    save1() {
      var params = {
        names: this.get('names'),
        issue: this.get('issue'),
        station: this.get('station'),
        time: Date.now(),
      };
      this.set('adHelpRequest', false);
      this.sendAction('save2', params);
    }
  }
});


export default Ember.Component.extend({
});
