import { IsBoolean, IsOptional, IsString } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

// Re-using the DTO for the settings structure
// Since all its properties are already @IsOptional() and @ApiPropertyOptional(),
// it works perfectly for an update operation.
export class UpdateUserSettingsDto {
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

// The main DTO for updating the user
export class UpdateUserDto {
  @ApiPropertyOptional({
    example: 'New Display Name',
    description: 'The user’s visible name, if changed.',
  })
  @IsOptional()
  @IsString()
  displayName?: string;

  @ApiPropertyOptional({
    example: 'https://new-avatar.com/image.jpg',
    description: 'URL to the new profile picture.',
  })
  @IsString()
  @IsOptional()
  avatarUrl?: string;

  // IMPORTANT: The nested settings object itself must be optional
  @ApiPropertyOptional({
    type: UpdateUserSettingsDto, // Tells Swagger the structure of the nested object
    description: 'Optional updates to user preference settings.',
  })
  @IsOptional()
  settings?: UpdateUserSettingsDto;
}
