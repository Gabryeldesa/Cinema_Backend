"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSessaoDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_sessao_dto_1 = require("./create-sessao.dto");
class UpdateSessaoDto extends (0, swagger_1.PartialType)(create_sessao_dto_1.CreateSessaoDto) {
}
exports.UpdateSessaoDto = UpdateSessaoDto;
//# sourceMappingURL=update-sessao.dto.js.map