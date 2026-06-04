import { PartialType } from '@nestjs/swagger';
import { CreatePoltronaDto } from './create-poltrona.dto';

export class UpdatePoltronaDto extends PartialType(CreatePoltronaDto) {}