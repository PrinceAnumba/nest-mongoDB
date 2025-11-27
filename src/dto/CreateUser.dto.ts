import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';
// 1. Import ApiProperty
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateUserSettingsDto {
  @ApiPropertyOptional({
    example: true,
    description: 'Enable push notifications',
  })
  @IsOptional()
  @IsBoolean()
  receiveNotifications?: boolean;

  @ApiPropertyOptional({
    example: false,
    description: 'Receive marketing emails',
  })
  @IsOptional()
  @IsBoolean()
  receiveEmails?: boolean;

  @ApiPropertyOptional({
    example: true,
    description: 'Receive SMS alerts',
  })
  @IsOptional()
  @IsBoolean()
  receiveSMS?: boolean;
}

export class CreateUserDto {
  @ApiProperty({
    example: 'john_doe_99',
    description: 'The unique username',
  })
  @IsNotEmpty()
  @IsString()
  username: string;

  @ApiPropertyOptional({
    example: 'John Doe',
    description: 'The visible display name',
  })
  @IsString()
  @IsOptional()
  displayName?: string;

  // IMPORTANT: For nested objects, define the type explicitly
  @ApiPropertyOptional({
    type: CreateUserSettingsDto,
    description: 'User preference settings',
  })
  @IsOptional()
  settings?: CreateUserSettingsDto;
}
