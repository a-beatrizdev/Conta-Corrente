// 1. Classe Cliente:

class Cliente {

  // Método construtor: executado quando criamos um novo cliente
  constructor(nome, cpf, agencia, conta) {

    // "this" representa o objeto que está sendo criado
    this.nome = nome;       // Armazena o nome recebido
    this.cpf = cpf;         // Armazena o CPF
    this.agencia = agencia; // Armazena a agência
    this.conta = conta;     // Armazena o número da conta
  }
}


// 2. Classe ContaCorrente:

class ContaCorrente {

  // Construtor recebe um cliente já criado
  constructor(cliente) {

    this.cliente = cliente; // Associa a conta ao cliente
    this.saldo = 0;         // Inicia o saldo com 0
  }

  // 2.1 Método para realizar depósito
  depositar(valor) {

    // Guarda o saldo antes da operação
    let saldoAnterior = this.saldo;

    // Soma o valor ao saldo atual
    this.saldo += valor;

    // Retorna um resumo da operação
    return {
      valor: valor,
      saldoAnterior: saldoAnterior,
      saldoAtual: this.saldo,
      tipo: "Depósito",
      data: new Date().toLocaleDateString()
    };
  }

  // 2.2 Método para realizar saque
  sacar(valor) {

    // Verifica se há saldo suficiente
    if (valor > this.saldo) {
      alert("Saldo insuficiente!");
      return null; // interrompe a função
    }

    // Guarda o saldo antes da operação
    let saldoAnterior = this.saldo;

    // Subtrai o valor do saldo
    this.saldo -= valor;

    // Retorna os dados da operação
    return {
      valor: valor,
      saldoAnterior: saldoAnterior,
      saldoAtual: this.saldo,
      tipo: "Saque",
      data: new Date().toLocaleDateString()
    };
  }
}


// 3. Variável global (guarda a conta criada)
let contaCorrente;


// 4. Função para criar conta
function criarConta() {

  // Pega os valores digitados nos inputs
  let nome = document.getElementById("nome").value;
  let cpf = document.getElementById("cpf").value;
  let agencia = document.getElementById("agencia").value;
  let conta = document.getElementById("conta").value;

  // Cria um objeto cliente
  let cliente = new Cliente(nome, cpf, agencia, conta);

  // Cria uma conta vinculada ao cliente
  contaCorrente = new ContaCorrente(cliente);

  // Mostra os dados do cliente na tela
  document.getElementById("extrato").innerHTML = `

-------- Dados do Cliente ------
Nome: ${cliente.nome}
CPF: ${cliente.cpf}
Agência: ${cliente.agencia}
Conta: ${cliente.conta}

<span style="color: green;">
Conta criada com sucesso!
</span>

`;
}


// 5. Função para depositar
function depositar() {

  // Pega o valor digitado
  let valor = parseFloat(document.getElementById("valor").value);

  // Executa o depósito
  let operacao = contaCorrente.depositar(valor);

  // Mostra o extrato na tela
  mostrarExtrato(operacao);
}


// 6. Função para sacar
function sacar() {

  // Pega o valor digitado
  let valor = parseFloat(document.getElementById("valor").value);

  // Executa o saque
  let operacao = contaCorrente.sacar(valor);

  // Só mostra se o saque for válido
  if (operacao != null) {
    mostrarExtrato(operacao);
  }
}


// 7. Função para mostrar o extrato
function mostrarExtrato(operacao) {

  // Exibe os dados do cliente e da operação
  document.getElementById("extrato").innerHTML = `

-------- Dados do Cliente ------
Nome: ${contaCorrente.cliente.nome}
CPF: ${contaCorrente.cliente.cpf}
Agência: ${contaCorrente.cliente.agencia}
Conta: ${contaCorrente.cliente.conta}

-------- Conta Corrente ------
Tipo: ${operacao.tipo}
Valor: ${operacao.valor}
Data: ${operacao.data}
Saldo anterior: ${operacao.saldoAnterior}
Saldo atual: ${operacao.saldoAtual}

<span style="color: ${operacao.tipo == "Depósito" ? "green" : "red"};">
${operacao.tipo} realizado com sucesso!
</span>

`;
}