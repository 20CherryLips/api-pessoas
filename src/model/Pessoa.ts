export class Pessoa {

    // atributos da fonte
    private nome: string;
    private cpf: string;
    private data_nascimento: Date;
    private telefone: string;
    private endereco: string;
    private altura: number;
    private peso: number;

    //método construtor
    public constructor(
        _nome: string,
        _cpf: string,
        _data_nascimento: Date,
        _telefone: string,
        _endereco: string,
        _altura: number,
        _peso: number) {

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
    public getNome() {
        return this.nome;
    }
    public setNome(_nome: string) {
        this.nome = _nome;
    }


    public getCPF() {
        return this.cpf;
    }
    public setCPF(_cpf: string) {
        this.cpf = this.cpf;
    }


    public get_data_nascimento() {
        return this.data_nascimento;
    }
    public set_data_nascimento(_nome: Date) {
        this.data_nascimento = this.data_nascimento;
    }

    /**
     * Atribui o telefone da pessoa
     * 
     * @param _telefone 
     * telefone da pessoa
     */
    public setTelefone(_telefone: string) {
        this.telefone = this.telefone;
    }
    public getTelefone() {
        return this.telefone;
    }

    /**
     * Atribui altura a pessoa
     * 
     * @param _altura 
     * altura da pessoa
     */
    public setAltura(_altura: number) {
        this.altura = this.altura;
    }
    public getAltura() {
        return this.altura
    }

    /**
     * Atribui peso a pessoa
     * 
     * @param _peso 
     * peso da pessoa
     */
    public setPeso(_peso: number) {
        this.peso = this.peso;
    }
    public getPeso() {
        return this.peso;
    }

    public mostraPessoa() {
        console.log(`Nome: ${this.nome}
                    CPF: ${this.cpf} 
                    Data: ${this.data_nascimento}
                    Telefone: ${this.telefone}
                    Endereço: ${this.endereco}
                    Altura: ${this.altura}
                    Peso: ${this.peso}`);
    }

    //Implementar os métodos
    public falar(): void {
        //lógica de negócio
        console.log(`${this.nome} está falando`);
    }

    public falarFrase(_frase: string): void {
        //lógica de negócio
        console.log(`${this.nome} fala: ${_frase}`);
    }

    public andar(): void {
        //lógica de negócio
        console.log(`${this.nome} está andando...`);
    }

    public andarQuilometros(_quilometros: number): void {
        setTimeout(() => {
            console.log(`${this.nome} caminhou ${_quilometros} quilometros`);
        }, 3000);
    }

    public comer(): void {
        console.log(`${this.nome} está comendo...`);
    }

    public comerPrato(_prato: string): void {
        console.log(`${this.nome} comeu ${_prato}`);
    }

    /** 
     * CRUD
    */
   cadastroPessoa(bananinha: Pessoa) {
    //persistindo os dados
    console.log(`${bananinha.nome} cadastrado(a) com sucesso!`);
    }
}
