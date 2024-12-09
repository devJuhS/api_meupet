const Joi = require('joi');

// Validador para dados de entrada
const userValidator = Joi.object({
    nome_user: Joi.string().min(3).max(119).required().messages({
      'string.base': 'O nome deve ser uma string',
      'string.min': 'O nome deve ter pelo menos 3 caracteres',
      'string.max': 'O nome pode ter no máximo 119 caracteres',
      'any.required': 'O nome é obrigatório',
    }),
    email_user: Joi.string().email().required().messages({
      'string.base': 'O e-mail deve ser uma string',
      'string.email': 'O e-mail fornecido não é válido',
      'any.required': 'O e-mail é obrigatório',
    }),
    senha_user: Joi.string().min(6).max(12).required().messages({
      'string.base': 'A senha deve ser uma string',
      'string.min': 'A senha deve ter pelo menos 6 caracteres',
      'string.max': 'A senha pode ter no máximo 12 caracteres',
      'any.required': 'A senha é obrigatória',
    }),
  });
  
  module.exports = userValidator;



// Função para validar os dados da requisição
function validarDados(req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({ erro: error.details[0].message });
    }
    next(); // Se a validação passar, continua para a próxima função
  }