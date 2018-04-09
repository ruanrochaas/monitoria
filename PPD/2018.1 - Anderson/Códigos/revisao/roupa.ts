export class Roupa{
    private cor: string;
    private codigoB: string;
    private tamanho: string;
    private tipo: string;
    private qtd: number;

    public constructor(cor: string, codigoB: string, tamanho: string, tipo: string, qtd: number){
        this.cor = cor;
        this.codigoB = codigoB;
        this.tamanho = tamanho;
        this.tipo = tipo;
        this.qtd = qtd;
    }

    public getCor():string{
        return this.cor;
    }

    public setCor(cor: string):void{
        this.cor = cor;
    }

    public getCodigo(): string{
        return this.codigoB;
    }

    public setCodigo(codigo: string): void{
        this.codigoB = codigo;
    }

    public getTamanho(): string{
        return this.tamanho;
    }

    public setTrabalho(tamanho: string): void{
        this.tamanho = tamanho;
    }

    public getTipo(): string{
        return this.tipo;
    }

    public setTipo(tipo: string): void{
        this.tipo = tipo;
    }

    public getQtd(): number{
        return this.qtd;
    }

    public setQtd(qtd: number): void{
        this.qtd = qtd;
    }
}