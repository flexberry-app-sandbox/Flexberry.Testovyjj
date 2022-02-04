import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номер: DS.attr('number'),
  статус: DS.attr('string'),
  сотрудник: DS.belongsTo('i-i-s-testovyjj-сотрудник', { inverse: null, async: false }),
  наОснове: DS.belongsTo('i-i-s-testovyjj-обращение', { inverse: null, async: false })
});

export let ValidationRules = {
  номер: {
    descriptionKey: 'models.i-i-s-testovyjj-обращение.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  статус: {
    descriptionKey: 'models.i-i-s-testovyjj-обращение.validations.статус.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сотрудник: {
    descriptionKey: 'models.i-i-s-testovyjj-обращение.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  наОснове: {
    descriptionKey: 'models.i-i-s-testovyjj-обращение.validations.наОснове.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОбращениеE', 'i-i-s-testovyjj-обращение', {
    номер: attr('Номер', { index: 0 }),
    статус: attr('Статус', { index: 1 }),
    сотрудник: belongsTo('i-i-s-testovyjj-сотрудник', 'Сотрудник', {
      имя: attr('Имя', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'имя' }),
    наОснове: belongsTo('i-i-s-testovyjj-обращение', 'На основе', {
      статус: attr('Статус', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'статус' })
  });

  modelClass.defineProjection('ОбращениеL', 'i-i-s-testovyjj-обращение', {
    номер: attr('Номер', { index: 0 }),
    статус: attr('Статус', { index: 1 }),
    сотрудник: belongsTo('i-i-s-testovyjj-сотрудник', 'Имя', {
      имя: attr('Имя', { index: 2 })
    }, { index: -1, hidden: true }),
    наОснове: belongsTo('i-i-s-testovyjj-обращение', 'Статус', {
      статус: attr('Статус', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
