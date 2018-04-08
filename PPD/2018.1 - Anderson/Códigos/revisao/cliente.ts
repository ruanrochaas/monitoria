import{Roupa} from "./roupa";
export class Cliente{
    private nome: string;
    private cpf: string;
    private compras: Array<Roupa>;

    public constructor(nome: string, cpf: string, compras: Array<Roupa>){
        this.nome = nome;
        this.cpf = cpf;
        this.compras = compras;
    }

    public getNome(): string{
        return this.nome;
    }

    public setNome(nome: string): void{
        this.nome = nome;
    }

    public getCpf(): string{
        return this.cpf;
    }

    public setCpf(cpf: string): void{
        this.cpf = cpf;
    }

    public getCompras(): Array<Roupa>{
        return this.compras;
    }

    public setCompras(compras: Array<Roupa>): void{
        this.compras = compras;
    }
}