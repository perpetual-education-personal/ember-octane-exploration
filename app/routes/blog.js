import Route from '@ember/routing/route';

export default class BlogRoute extends Route {

  model() {
    async function getPosts() {
      let posts = await fetch('https://perpetual.education/wp-json/wp/v2/posts');
      return posts;
    }
    let posts = getPosts().then( function(data) {
      return data.json();
    });
    console.log('p', posts);
    return posts;
  }
  
}
