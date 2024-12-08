const { Users } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = class UsersController {
    static async showAll(req, res) {
        const users = await Users.findAll();
        res.send(users);
    }

    static async showOne(req, res) {
        const user = await Users.findByPk(req.params.id_user);
        res.send(user);
    }

    static async create(req, res) {
        try {
            console.log('Senha original (create):', req.body.senha_user);

            const user = await Users.create({
                nome_user: req.body.nome_user,
                cpf_user: req.body.cpf_user,
                cel_user: req.body.cel_user,
                tel_user: req.body.tel_user,
                email_user: req.body.email_user,
                genero_user: req.body.genero_user,
                dt_nasc_user: req.body.dt_nasc_user,
                senha_user: req.body.senha_user
            });
            res.send(user);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async update(req, res) {
        try {
            if (req.body.senha_user) {
                console.log('Senha atualizada (update):', req.body.senha_user);
            }
            const result = await Users.update(
                {
                    nome_user: req.body.nome_user,
                    cpf_user: req.body.cpf_user,
                    cel_user: req.body.cel_user,
                    tel_user: req.body.tel_user,
                    email_user: req.body.email_user,
                    genero_user: req.body.genero_user,
                    dt_nasc_user: req.body.dt_nasc_user,
                    senha_user: req.body.senha_user,
                },
                {
                    where: { id_user: req.params.id_user },
                }
            );
            res.send(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async delete(req, res) {
        try {
            const user = await Users.findByPk(req.params.id_user);
            await user.destroy();
            res.send(true);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async store(req, res) {
        try {
            console.log('Senha original (store):', req.body.senha_user);

            const user = await Users.create({
                nome_user: req.body.nome_user,
                cpf_user: req.body.cpf_user,
                cel_user: req.body.cel_user,
                tel_user: req.body.tel_user,
                email_user: req.body.email_user,
                genero_user: req.body.genero_user,
                dt_nasc_user: req.body.dt_nasc_user,
                senha_user: req.body.senha_user,
            });
            res.send(user);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async login(req, res) {
        try {
            console.log('Senha recebida no body:', req.body.senha_user);

            const user = await Users.findOne({
                where: { email_user: req.body.email_user },
            });

            if (user) {
                console.log('Senha armazenada no banco:', user.senha_user);
                const isPasswordCorrect = await bcrypt.compare(req.body.senha_user, user.senha_user);
                console.log('Resultado da comparação:', isPasswordCorrect);

                if (isPasswordCorrect) {
                    const token = jwt.sign(
                        { id_user: user.id_user, email_user: user.email_user },
                        process.env.JWT_SECRET || 'S3nh@@l3at0r1@123',
                        { expiresIn: '1h' }
                    );

                    res.json({
                        token,
                        id_user: user.id_user,
                    });
                } else {
                    console.log('Senha incorreta.');
                    res.status(401).json({ error: 'Usuário ou Senha Inválida' });
                }
            } else {
                console.log('Usuário não encontrado.');
                res.status(401).json({ error: 'Usuário ou Senha Inválida' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};