import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    edit(question, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          question.set(key,params[key]);
        }
      });
      question.save();
    },
    delete(question) {
      if (confirm('Are you sure you want to delete this question?')) {
        this.sendAction('destroyQuestion', question);
      }
    },
    saveNewAnswer3(params) {
      var newAnswer = this.store.createRecord('answer', params);
      newAnswer.save();
    }
  }
});
