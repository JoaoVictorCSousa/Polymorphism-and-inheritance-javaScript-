"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cachorro = void 0;
var Animal_1 = require("./Animal");
var Cachorro = /** @class */ (function (_super) {
    __extends(Cachorro, _super);
    function Cachorro(nome, idade) {
        return _super.call(this, nome, idade) || this;
    }
    Cachorro.prototype.emitirSom = function () {
        console.log("O cachorro ".concat(this.nome, " de idade ").concat(this.idade, " emitiu um som!"));
    };
    Cachorro.prototype.deveCorrer = function () {
        console.log("O cachorro ".concat(this.nome, " de idade ").concat(this.idade, " conseguiu correr!"));
    };
    return Cachorro;
}(Animal_1.Animal));
exports.Cachorro = Cachorro;
