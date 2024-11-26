const { Produtos } = require('../models');
require('dotenv').config();

module.exports = class ProdutosController {
    static async showAll(req, res) {
        try {
            const produtos = await Produtos.findAll(); // Certifique-se do nome correto
            res.send(produtos); // Enviando a resposta certa
        } catch (error) {
            res.status(500).json({ message: 'Erro ao buscar produtos', error });
        }
    }

    static async showOne(req, res) {
        try {
            const produto = await Produtos.findByPk(req.params.id); // Corrigido para usar "Produtos"
            if (produto) {
                res.send(produto);
            } else {
                res.status(404).json({ message: 'Produto não encontrado' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Erro ao buscar o produto', error });
        }
    }

    static async create(req, res) {
        try {
            const produto = await Produtos.create({ // Corrigido para usar "Produtos"
                nome_produto: req.body.nome_produto,
                descricao_produto: req.body.descricao_produto,
                preco_produto: req.body.preco_produto,
                quantidade_estoque: req.body.quantidade_estoque,
                categoria_produto: req.body.categoria_produto,
                data_adicionado: req.body.data_adicionado
            });
            res.status(201).send(produto);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao criar o produto', error });
        }
    }

    static async update(req, res) {
        try {
            const produto = await Produtos.update( // Corrigido para usar "Produtos"
                {
                    nome_produto: req.body.nome_produto,
                    descricao_produto: req.body.descricao_produto,
                    preco_produto: req.body.preco_produto,
                    quantidade_estoque: req.body.quantidade_estoque,
                    categoria_produto: req.body.categoria_produto,
                    data_adicionado: req.body.data_adicionado
                },
                {
                    where: { id_produto: req.params.id },
                }
            );
            if (produto[0] === 1) {
                res.send({ message: 'Produto atualizado com sucesso' });
            } else {
                res.status(404).json({ message: 'Produto não encontrado' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Erro ao atualizar o produto', error });
        }
    }

    static async delete(req, res) {
        try {
            const produto = await Produtos.findByPk(req.params.id); // Corrigido para usar "Produtos"
            if (produto) {
                await produto.destroy();
                res.send({ message: 'Produto deletado com sucesso' });
            } else {
                res.status(404).json({ message: 'Produto não encontrado' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Erro ao deletar o produto', error });
        }
    }
};
