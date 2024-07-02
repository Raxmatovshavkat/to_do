import { PartialType } from '@nestjs/mapped-types';
import { create_to_do_dto } from './create-to-do.dto';

export class UpdateToDoDto extends PartialType(create_to_do_dto) {}
