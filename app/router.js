import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('people', function() {
    this.route('list', { path: '/' });
    this.route('detail', { path: '/:slug' });
  });
  this.route('about');
  this.route('contact');
  this.route('blog', function() {
    this.route('list', { path: '/' });
    this.route('detail', { path: '/:id'});
  });
});
