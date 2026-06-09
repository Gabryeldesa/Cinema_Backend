"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const prisma_module_1 = require("./prisma/prisma.module");
const cinema_module_1 = require("./cinema/cinema.module");
const sala_module_1 = require("./sala/sala.module");
const poltrona_module_1 = require("./poltrona/poltrona.module");
const filme_module_1 = require("./filme/filme.module");
const sessao_module_1 = require("./sessao/sessao.module");
const ingresso_module_1 = require("./ingresso/ingresso.module");
const lanche_combo_module_1 = require("./lanche-combo/lanche-combo.module");
const pedido_module_1 = require("./pedido/pedido.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule, cinema_module_1.CinemaModule, sala_module_1.SalaModule, poltrona_module_1.PoltronaModule, filme_module_1.FilmeModule, sessao_module_1.SessaoModule, ingresso_module_1.IngressoModule, lanche_combo_module_1.LancheComboModule, pedido_module_1.PedidoModule],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map