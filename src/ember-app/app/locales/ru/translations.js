import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Testovyjj',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Testovyjj',
          title: 'Testovyjj'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-testovyjj-обращение-l': IISTestovyjjОбращениеLForm,
    'i-i-s-testovyjj-сотрудник-l': IISTestovyjjСотрудникLForm,
    'i-i-s-testovyjj-обращение-e': IISTestovyjjОбращениеEForm,
    'i-i-s-testovyjj-сотрудник-e': IISTestovyjjСотрудникEForm
  },

});

export default translations;
