"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Pessoa_1 = require("../model/Pessoa");
let pessoa = new Pessoa_1.Pessoa(`Darth Vader `, `11111111111`, new Date(2000, 9, 1), `000000000`, `Rua Numero 1`, 170, 70);
pessoa.falar();
pessoa.falarFrase("I am your father!");
pessoa.andar();
pessoa.andarQuilometros(8);
pessoa.comer();
pessoa.comerPrato(" pure de batata");
//# sourceMappingURL=teste.js.map