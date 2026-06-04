"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePoltronaDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_poltrona_dto_1 = require("./create-poltrona.dto");
class UpdatePoltronaDto extends (0, swagger_1.PartialType)(create_poltrona_dto_1.CreatePoltronaDto) {
}
exports.UpdatePoltronaDto = UpdatePoltronaDto;
//# sourceMappingURL=update-poltrona.dto.js.map