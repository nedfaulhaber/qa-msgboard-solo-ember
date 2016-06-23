import Ember from 'ember';

export default Ember.Component.extend({
  editQuestionForm: false,
  actions: {
    editQuestionForm() {
      this.set('editQuestionForm', true);
    },
    edit(question) {
      var params = {
        ask: this.get('ask'),
        author: this.get('author'),
        notes: this.get('notes'),
      };
      this.set('editQuestionForm', false);
      this.sendAction('edit', question, params);
    }
  }
});
