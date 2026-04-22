//1. Classe Cliente 

class Cliente {

    // Método construtor: executado quando criamos um novo cliente

    constructor(nome, cpf, agencia, conta) {

        // "this" represemta o objeto que está sendo criado

        this.nome = nome; // Armazena o nome recebido
        this.cpf = cpf;
        this.agencia = agencia;
        this.conta = conta;

    }

}

//2. Classe ContaCorrente

class ContaCorrente {

    // Construtor recebe um cliente já criado

    constructor(cliente) {

        this.cliente = cliente // Associa a conta a um cliente
        this.saldo = 0; // Inicia o saldo com 0 

    }

    // 2.1 Método para realizar o depósito
    depositar(valor) {

        // Guarda o saldo antes da operação 
        let saldoAnterior = this.saldo;

        // Soma o valo depositado ao saldo atual
        this.saldo += valor;

        return {

            valor: valor, // Valor depositado
            saldoAnterior: saldoAnterior, // Saldo antes da operação
            saldoAtual: this.saldo, //Novo saldo após depósito
            tipo: "Deposito", // Tipo da operação
            data: new Date().tocolocaleString(), // Data atual formatada


        };


    }

}

// 3. Função principal (executada ao clicar no botão)

function criarConta() {

    // Pega o valor digitado no input "nome"

    let nome = document.getElementById("nome").value;
    let cpf = document.getElementById("cpf").value;
    let agencia = document.getElementById("agencia").value;
    let conta = document.getElementById("conta").value;

    // Converte o valor digitado para número (float)
    let valor = parseFloat(document.getElementById("valor").value);


    // 4. Criando objetos (Instâncias das classes):

    // Cria o objeto cliente com os dados digitados
    let cliente = new Cliente(nome, cpf, agencia, conta);

    // Cria uma conta vinculada ao cliente 
    let ContaCorrente = new ContaCorrente(cliente);

    // Executa o depósito e guarda o resultado
    let operacao = ContaCorrente.depositar(valor);





}

