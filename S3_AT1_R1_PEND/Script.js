class Funcionario {
    constructor(Nome, Salario, DataAdmissao) {
        this.Nome = Nome;
        this.Salario = Salario;
        this.DataAdmissao = DataAdmissao;
    }
    
    calcularBonus() {
        return this.Salario * 0.10;
    }

    exibirDetalhes() {
        console.log(`Nome: ${this.Nome}, Salário: R$${this.Salario}, Data de Admissão: ${this.DataAdmissao}, Bônus: R$${this.calcularBonus()}`);
    }
}

class Gerente extends Funcionario {
    constructor(Nome, Salario, DataAdmissao, Departamento) {
        super(Nome, Salario, DataAdmissao);
        this.Departamento = Departamento;
    }

    calcularBonus() {
        return this.Salario * 0.20; 
    }

    exibirDetalhes() {
        console.log(`Nome: ${this.Nome}, Salário: R$${this.Salario}, Data de Admissão: ${this.DataAdmissao}, Departamento: ${this.Departamento}, Bônus: R$${this.calcularBonus()}`);
    }
}

const Funcionarioex = new Funcionario("João Lucas", 3000, "2008-05-19");
const Gerenteex = new Gerente("Lucas Netto", 5000, "2007-10-14", "TI");

Funcionarioex.exibirDetalhes();
Gerenteex.exibirDetalhes();