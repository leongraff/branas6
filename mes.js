class Mes {
    constructor(nome, saldoInicial) {
        if (nome === "") throw new Error("Mês Inválido: O nome é obrigatório")
        this.nome = nome
        this.saldoInicial = saldoInicial;
        this.totalizadorDoMes = { saldo: 0, juros: 0, rendimentos: 0, receitas: 0, despesas: 0, distribuicaoDeDespesas: [] }
        this.lancamentos = [];
    }
    adicionarLancamento(lancamento) {
        this.lancamentos.push(lancamento);
    }
    calcularRendimentos(valor) {
        const rendimentos = valor * 0.05;
        return rendimentos;
    }
    calcularJuros(valor) {
        const juros = valor * 0.1;
        return juros;
    }
    calcularSaldo(saldoInicial, lancamentos) {
        this.totalizadorDoMes.saldo = this.saldoInicial
        this.apurarDespesas();
        this.apurarReceitas();
        this.apurarJuros();
        this.calcularRendimentos()
        this.distribuirDespesas()
    }
    apurarRendimentos() {
        if (this.totalizadorDoMes.saldo > 0) {
            this.totalizadorDoMes.rendimentos = this.calcularRendimentos(this.totalizadorDoMes.saldo)
            this.totalizadorDoMes.saldo = arredondar(this.totalizadorDoMes.saldo + this.totalizadorDoMes.rendimentos)
        }
    }
    apurarJuros() {
        if (this.totalizadorDoMes.saldo < 0) {
            this.totalizadorDoMes.juros = this.calcularJuros(this.totalizadorDoMes.saldo)
            this.totalizadorDoMes.saldo = arredondar(this.totalizadorDoMes.saldo + this.totalizadorDoMes.juros)
        }
    }

    apurarDespesas() {
        for (const lancamento of this.lancamentos)
            if (lancamento.tipo === "despesa") {
                this.totalizadorDoMes.saldo -= lancamento.valor;
                this.totalizadorDoMes.despesas -= lancamento.valor;
            }
    }

    apurarReceitas() {
        for (const lancamento of this.lancamentos)
            if (lancamento.tipo === "receita") {
                this.totalizadorDoMes.saldo += lancamento.valor;
                this.totalizadorDoMes.receitas += lancamento.valor;
            }
    }
    distribuirDespesas() {
        const distribuicaoDeDespesas = []
        for (const lancamento of this.lancamentos) {
            if (lancamento.tipo === "despesa") {
                const percentual = arredondar((lancamento.valor / this.totalizadorDoMes.despesas) * -100)
                distribuicaoDeDespesas.push({ categoria: lancamento.categoria, percentual })
            }
        }
        return this.totalizadorDoMes.distribuicaoDeDespesas = distribuicaoDeDespesas
    }


}
