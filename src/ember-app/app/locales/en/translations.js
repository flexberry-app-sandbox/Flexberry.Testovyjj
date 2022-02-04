import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISTestovyjjОбращениеLForm from './forms/i-i-s-testovyjj-обращение-l';
import IISTestovyjjСотрудникLForm from './forms/i-i-s-testovyjj-сотрудник-l';
import IISTestovyjjОбращениеEForm from './forms/i-i-s-testovyjj-обращение-e';
import IISTestovyjjСотрудникEForm from './forms/i-i-s-testovyjj-сотрудник-e';
import IISTestovyjjОбращениеModel from './models/i-i-s-testovyjj-обращение';
import IISTestovyjjСотрудникModel from './models/i-i-s-testovyjj-сотрудник';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-testovyjj-обращение': IISTestovyjjОбращениеModel,
    'i-i-s-testovyjj-сотрудник': IISTestovyjjСотрудникModel
  },

  'application-name': 'Testovyjj',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Testovyjj',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Testovyjj',
          title: 'Testovyjj'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        testovyjj: {
          caption: 'Testovyjj',
          title: 'Testovyjj',
          'i-i-s-testovyjj-обращение-l': {
            caption: 'Обращение',
            title: ''
          },
          'i-i-s-testovyjj-сотрудник-l': {
            caption: 'Сотрудник',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-testovyjj-обращение-l': IISTestovyjjОбращениеLForm,
    'i-i-s-testovyjj-сотрудник-l': IISTestovyjjСотрудникLForm,
    'i-i-s-testovyjj-обращение-e': IISTestovyjjОбращениеEForm,
    'i-i-s-testovyjj-сотрудник-e': IISTestovyjjСотрудникEForm
  },

});

export default translations;
