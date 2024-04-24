import { PartialType } from '@nestjs/mapped-types';
import { CreateWorkflowDto } from '@app/workflows';

export class UpdateWorkflowDto extends PartialType(CreateWorkflowDto) {}
