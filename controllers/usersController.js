const { Users } = require('../models');
require('dotenv').config();

module.exports = class UsersController {
    static async showAll(req, res) {
        try {
            const users = await Users.findAll();
            res.send(users);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao buscar usuários', error });
        }
    }

    static async showOne(req, res) {
        try {
            const user = await Users.findByPk(req.params.id);
            if (user) {
                res.send(user);
            } else {
                res.status(404).json({ message: 'Usuário não encontrado' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Erro ao buscar o usuário', error });
        }
    }

    static async create(req, res) {
        try {
            const user = await Users.create({
                nome_user: req.body.nome_user,
                cpf_user: req.body.cpf_user,
                cel_user: req.body.cel_user,
                tel_user: req.body.tel_user,
                email_user: req.body.email_user,
                genero_user: req.body.genero_user,
                dt_nasc_user: req.body.dt_nasc_user,
            });
            res.status(201).send(user);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao criar o usuário', error });
        }
    }

    static async update(req, res) {
        try {
            const result = await Users.update(
                {
                    nome_user: req.body.nome_user,
                    cpf_user: req.body.cpf_user,
                    cel_user: req.body.cel_user,
                    tel_user: req.body.tel_user,
                    email_user: req.body.email_user,
                    genero_user: req.body.genero_user,
                    dt_nasc_user: req.body.dt_nasc_user,
                },
                {
                    where: { id_user: req.params.id },
                }
            );
            if (result[0] === 1) {
                res.send({ message: 'Usuário atualizado com sucesso' });
            } else {
                res.status(404).json({ message: 'Usuário não encontrado' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Erro ao atualizar o usuário', error });
        }
    }

    static async delete(req, res) {
        try {
            const user = await Users.findByPk(req.params.id);
            if (user) {
                await user.destroy();
                res.send({ message: 'Usuário deletado com sucesso' });
            } else {
                res.status(404).json({ message: 'Usuário não encontrado' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Erro ao deletar o usuário', error });
        }
    }
};