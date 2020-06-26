import Route from '@ember/routing/route';

export default class BlogDetailRoute extends Route {

  model(parameters) {
    console.log(parameters);
    let posts = this.modelFor('blog');
    let post = posts.find( function(post) {
      return post.id == parameters.id;
    });
    console.log('p', post);
    return post;
  }

}
