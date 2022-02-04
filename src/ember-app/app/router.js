import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-testovyjj-обращение-l');
  this.route('i-i-s-testovyjj-обращение-e',
  { path: 'i-i-s-testovyjj-обращение-e/:id' });
  this.route('i-i-s-testovyjj-обращение-e.new',
  { path: 'i-i-s-testovyjj-обращение-e/new' });
  this.route('i-i-s-testovyjj-сотрудник-l');
  this.route('i-i-s-testovyjj-сотрудник-e',
  { path: 'i-i-s-testovyjj-сотрудник-e/:id' });
  this.route('i-i-s-testovyjj-сотрудник-e.new',
  { path: 'i-i-s-testovyjj-сотрудник-e/new' });
});

export default Router;
