import DS from 'ember-data';

export default DS.Model.extend({
  names: DS.attr(),
  station: DS.attr(),
  time: DS.attr(),
  issue: DS.attr()
});
