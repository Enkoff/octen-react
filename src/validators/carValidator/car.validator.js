import Joi from 'joi';

export const CarValidator = Joi.object({
    model: Joi.string().regex(new RegExp('^[[a-zA-ZА-яіІїЇёЁ]{1,20}$')).required().messages({
        'string.empty': 'Це поле нм може бути порожнім',
        'string.pattern.base': 'Тільки букви min 1 max 20'
    }),
    price: Joi.number().min(1).max(1000000).required().messages({
        'number.base': 'Це поле нм може бути порожнім',
        'number.min': 'Ціна має бути білше 0',
        'number.max': 'Ціна бає бути менше або дорівнювати 1000000'
    }),
    year: Joi.number().min(1990).max(new Date().getFullYear()).required().messages({
        'number.base': 'Це поле нм може бути порожнім',
        'number.min': 'Рік має бути від 1990',
        'number.max': 'Рік має бути не білье теперішнього'
    })
});