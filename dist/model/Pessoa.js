"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
    //método construtor
    constructor(_nome, _cpf, _data_nascimento, _telefone, _endereco, _altura, _peso) {
        this.nome = _nome;
        this.cpf = _cpf;
        this.data_nascimento = _data_nascimento;
        this.telefone = _telefone;
        this.endereco = _endereco;
        this.altura = _altura;
        this.peso = _peso;
    }
    // métodos GETTERS and SETTERS
    // Getters = Recuperar o valor da variavel. Não tem parâmetro, mas tem return.
    // Setters = Atribuir. Tem parâmetro e não tem return.
    /**
     *
     * @returns
     */
    getNome() {
        return this.nome;
    }
    setNome(_nome) {
        this.nome = _nome;
    }
    getCPF() {
        return this.cpf;
    }
    setCPF(_cpf) {
        this.cpf = this.cpf;
    }
    get_data_nascimento() {
        return this.data_nascimento;
    }
    set_data_nascimento(_nome) {
        this.data_nascimento = this.data_nascimento;
    }
    /**
     * Atribui o telefone da pessoa
     *
     * @param _telefone
     * telefone da pessoa
     */
    setTelefone(_telefone) {
        this.telefone = this.telefone;
    }
    getTelefone() {
        return this.telefone;
    }
    /**
     * Atribui altura a pessoa
     *
     * @param _altura
     * altura da pessoa
     */
    setAltura(_altura) {
        this.altura = this.altura;
    }
    getAltura() {
        return this.altura;
    }
    /**
     * Atribui peso a pessoa
     *
     * @param _peso
     * peso da pessoa
     */
    setPeso(_peso) {
        this.peso = this.peso;
    }
    getPeso() {
        return this.peso;
    }
    mostraPessoa() {
        console.log(`Nome: ${this.nome}
                    CPF: ${this.cpf} 
                    Data: ${this.data_nascimento}
                    Telefone: ${this.telefone}
                    Endereço: ${this.endereco}
                    Altura: ${this.altura}
                    Peso: ${this.peso}`);
    }
    //Implementar os métodos
    falar() {
        //lógica de negócio
        console.log(`${this.nome} está falando`);
    }
    falarFrase(_frase) {
        //lógica de negócio
        console.log(`${this.nome} fala: ${_frase}`);
    }
    andar() {
        //lógica de negócio
        console.log(`${this.nome} está andando...`);
    }
    andarQuilometros(_quilometros) {
        setTimeout(() => {
            console.log(`${this.nome} caminhou ${_quilometros} quilometros`);
        }, 3000);
    }
    comer() {
        console.log(`${this.nome} está comendo...`);
    }
    comerPrato(_prato) {
        console.log(`${this.nome} comeu ${_prato}`);
    }
    /**
     * CRUD
    */
    cadastroPessoa(bananinha) {
        //persistindo os dados
        console.log(`${bananinha.nome} cadastrado(a) com sucesso!`);
    }
}
exports.Pessoa = Pessoa;
//# sourceMappingURL=Pessoa.js.map