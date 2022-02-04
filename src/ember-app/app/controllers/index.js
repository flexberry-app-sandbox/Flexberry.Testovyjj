import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.testovyjj.caption'),
          title: i18n.t('forms.application.sitemap.testovyjj.title'),
          children: [{
            link: 'i-i-s-testovyjj-обращение-l',
            caption: i18n.t('forms.application.sitemap.testovyjj.i-i-s-testovyjj-обращение-l.caption'),
            title: i18n.t('forms.application.sitemap.testovyjj.i-i-s-testovyjj-обращение-l.title'),
            icon: 'book',
            children: null
          }, {
            link: 'i-i-s-testovyjj-сотрудник-l',
            caption: i18n.t('forms.application.sitemap.testovyjj.i-i-s-testovyjj-сотрудник-l.caption'),
            title: i18n.t('forms.application.sitemap.testovyjj.i-i-s-testovyjj-сотрудник-l.title'),
            icon: 'briefcase',
            children: null
          }]
        }
      ]
    };
  }),
})