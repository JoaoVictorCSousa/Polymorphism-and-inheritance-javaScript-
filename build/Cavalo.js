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
exports.Cavalo = void 0;
var Animal_1 = require("./Animal");
var Cavalo = /** @class */ (function (_super) {
    __extends(Cavalo, _super);
    function Cavalo(name, idade) {
        return _super.call(this, name, idade) || this;
    }
    Cavalo.prototype.emitirSom = function () {
        console.log("O cavalo ".concat(this.nome, " emitiu um som!"));
    };
    Cavalo.prototype.deveCorrer = function () {
        console.log("O cavalo ".concat(this.nome, " correu!"));
    };
    return Cavalo;
}(Animal_1.Animal));
exports.Cavalo = Cavalo;
