import { PartialType } from '@nestjs/swagger';
import { CreatePoutronaDto } from './create-poutrona.dto';

export class UpdatePoutronaDto extends PartialType(CreatePoutronaDto) {}
