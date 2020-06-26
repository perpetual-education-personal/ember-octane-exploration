import Route from '@ember/routing/route';

export default class PeopleDetailRoute extends Route {

  model(parameters) {
    let people = this.modelFor('people');
    return people.find( function(person) {
      return person.name == parameters.slug;
    });
  }
}
