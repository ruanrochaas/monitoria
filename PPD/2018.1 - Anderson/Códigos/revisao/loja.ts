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

    public cadCliente(cliente: Cliente): boolean{
        return
    }
}