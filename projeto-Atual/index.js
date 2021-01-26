import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente('Carlos', 1236549876);
const cliente2 = new Cliente('Diva', 7891234560);

const conta1 = new ContaCorrente(1001, cliente1);
conta1.depositar(500);
const conta2 = new ContaCorrente(102, cliente2);

let valor = 200;
conta1.transferir(valor, conta2);

console.log(ContaCorrente.numeroContas); 
// 'numeroContas' é um contador de contas cadastradas