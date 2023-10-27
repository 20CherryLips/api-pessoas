import { Pessoa } from "../model/Pessoa";

let listaPessoas = [];

let pessoa = new Pessoa('Maria Zeferina',
                        '3333333333333',
                        new Date(1972, 8, 29),
                        '9999999999999',
                        'Rua das Corridas',
                        165,
                        55);
pessoa.cadastroPessoa(pessoa);