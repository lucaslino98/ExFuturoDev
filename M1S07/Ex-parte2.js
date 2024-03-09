class Pessoa {
    nome;
    idade;
    profissao;

    constructor(name, old, prof) {
        this.nome = name;
        this.idade = old;
        this.profissao = prof;
    }
}

class Cliente extends Pessoa {
    telefone;
    email;
    clienteDesde;

    constructor(name, old, prof, tel, em, client) {
        super(name, old, prof);
        this.telefone = tel;
        this.email = em;
        this.clienteDesde = client;
    }
}

const person =  new Cliente()