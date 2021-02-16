import Joi from 'joi';

export const TimerValidator = Joi.object(
    {
        hour: Joi.number().min(0).max(23).required(),
        min: Joi.number().min(0).max(59).required()
    }
);