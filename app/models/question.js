import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import DS from 'ember-data';


export default DS.Model.extend({
  question: DS.attr(),
  author: DS.attr(),
  notes: DS.attr()
});
