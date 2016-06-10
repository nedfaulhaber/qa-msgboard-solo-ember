import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },

    saveNewQuestion1() {
      var params = {
        question: this.get('question'),
        author: this.get('author'),
        notes: this.get('notes'),
        answers: this.get('answers'),
      };
      this.set('addNewQuestion', false);
      this.sendAction('saveNewQuestion2', params);
    }
  }
});
