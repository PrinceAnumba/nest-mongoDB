import {  IsOptional, IsString } from "class-validator";

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  displayName?: string;

  @IsString()
  @IsOptional()
  avatarUrl?: string;
}
