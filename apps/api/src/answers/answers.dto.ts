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
  result: string
}

export class AnswerResponseDto {
  id: string

  @IsDate()
  createdAt: Date
}
