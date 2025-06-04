import { IsDate, IsNotEmpty, IsString } from "class-validator"

export class CreateAnswerDto {
  @IsNotEmpty()
  @IsString()
  fullName: string

  @IsNotEmpty()
  @IsString()
  phone: string

  @IsNotEmpty()
  @IsString()
  questionnaire: string

  @IsNotEmpty()
  @IsString()
  result: string
}
