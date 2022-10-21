//JANEIRO
const saldoInicial = 0;
const janeiro = new Mes("janeiro", saldoInicial)
janeiro.adicionarLancamento(new Lancamento("Salário", "receita", 2000))
janeiro.adicionarLancamento(new Lancamento("Aluguel", "despesa", 2500))

janeiro.calcularSaldo();
console.log(janeiro);
//FEVEREIRO

const fevereiro = new Mes("fevereiro", janeiro.totalizador.saldo)
fevereiro.adicionarLancamento(new Lancamento("Salário", "receita", 3000));
fevereiro.adicionarLancamento(new Lancamento("Aluguel", "despesa", 1031));
fevereiro.adicionarLancamento(new Lancamento("Conta de luz", "despesa", 145));
fevereiro.adicionarLancamento(new Lancamento("Conta de água", "despesa", 512));
fevereiro.adicionarLancamento(new Lancamento("Transporte", "despesa", 112));
fevereiro.adicionarLancamento(new Lancamento("Alimentação", "despesa", 430));
fevereiro.adicionarLancamento(new Lancamento("Condomínio", "despesa", 230));
fevereiro.adicionarLancamento(new Lancamento("Farmácia", "despesa", 89));
fevereiro.calcularSaldo()
console.log(fevereiro)

//MARÇO

const marco = new Mes("marco", fevereiro.totalizador.saldo);
marco.adicionarLancamento(new Lancamento("Salário", "receita", 3000));
marco.adicionarLancamento(new Lancamento("Aluguel", "despesa", 203));
marco.adicionarLancamento(new Lancamento("Conta de luz", "despesa", 421));
marco.adicionarLancamento(new Lancamento("Conta de água", "despesa", 500));
marco.adicionarLancamento(new Lancamento("Transporte", "despesa", 1024));
marco.adicionarLancamento(new Lancamento("Alimentação", "despesa", 450));
marco.adicionarLancamento(new Lancamento("Condomínio", "despesa", 304));
marco.adicionarLancamento(new Lancamento("Farmácia", "despesa", 124));
marco.calcularSaldo();
console.log(marco)

// invoca novamente o calcularSaldo();

//janeiro.adicionarLancamento(new Lancamento("Escola", "despesa", 300));
//janeiro.adicionarLancamento(new Lancamento("Festa", "despesa", 700));
//janeiro.calcularSaldo();
//fevereiro.saldoInicial = janeiro.totalizador.saldo;
//fevereiro.calcularSaldo;
//marco.saldoInicial = fevereiro.totalizador.saldo;
//marco.calcularSaldo;