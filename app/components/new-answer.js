import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },
    saveNewAnswer1() {
      var params = {
        user: this.get('user') ? this.get('user') : "",
        content: this.get('content') ? this.get('content') : "",
        question: this.get('question')
      };
      
      this.set('addNewAnswer', false);
      this.sendAction('saveNewAnswer2', params);
    }
  }
});
