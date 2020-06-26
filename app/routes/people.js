import Route from '@ember/routing/route';

export default class PeopleRoute extends Route {

  model() {
    return [
      {
        name: "Sheriff",
        age: 38,
      },
      {
        name: "Ivy",
        age: 44,
      },
      {
        name: "Valentine",
        age: 13,
      }
    ];
  }
  
}
