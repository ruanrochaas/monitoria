import {Cliente} from "./cliente";
import {Roupa} from "./roupa";

export class Loja{
    private clientes: Array<Cliente>;
    private roupas: Array<Roupa>;

    public constructor(clientes: Array<Cliente>, roupas: Array<Roupa>){
        this.clientes = clientes;
        this.roupas = roupas;
    }

    public getClientes(): Array<Cliente>{
        return this.clientes;
    
    }

    public setClientes(clientes: Array<Cliente>): void{
        this.clientes = clientes;
    }

    public getRoupas(): Array<Roupa>{
        return this.roupas;
    }

    public setRoupas(roupas: Array<Roupa>): void{
        this.roupas = roupas;
    }

    public criCadCliente(nome: string, cpf: string, compras: Array<Roupa>): boolean{
        let clienteN: Cliente = new Cliente(nome, cpf, compras);
        for(let cliente of this.clientes){
            if(cliente.getCpf() == clienteN.getCpf()){
                return false
            }
        }
        this.clientes.push(clienteN);
        return true;
    }

    public criarEcadastrarRoupa(cor : string, tamanho : string, codigoDeBarras : string, tipo : string, quantidade : number) : boolean{
        let roupa : Roupa;
        roupa = new Roupa(cor, codigoDeBarras,tamanho, tipo, quantidade);
        for (let roupaPercorrida of this.roupas){
            if (roupaPercorrida.getCodigo() == roupa.getCodigo()){
                return false;
            }
                  
        }
        this.roupas.push(roupa);
        return true;
    }

    public venderRoupa(codRoupa: string, cpfCliente : string, quantidadeR : number) : boolean{
        let clienteX : Cliente;
        for (let pCliente of this.clientes){
            if (pCliente.getCpf() == cpfCliente){
                clienteX = pCliente;
            }
        }
        if(clienteX == undefined){
            return false;
        }
        let roupaX : Roupa;
        for ( let proupa of this.roupas){
            if (proupa.getCodigo() == codRoupa){
                roupaX = proupa;
            }
        }
        if(roupaX == undefined){
            return false;
        }
        let novaQtd : number = roupaX.getQtd() - quantidadeR;
        roupaX.setQtd(novaQtd);
        
        clienteX.adicionarRoupa(quantidadeR,roupaX);

        return true;
    }
}