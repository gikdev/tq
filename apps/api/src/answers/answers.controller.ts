import { Body, Controller, Get, Post } from "@nestjs/common"
import type { CreateAnswerDto } from "./answers.dto"
import type { AnswersService } from "./answers.service"

@Controller("answers")
export class AnswersController {
  constructor(private readonly answersService: AnswersService) {}

  @Post()
  create(@Body() createAnswerDto: CreateAnswerDto) {
    return this.answersService.create(createAnswerDto)
  }

  @Get()
  findAll() {
    return this.answersService.findAll()
  }
}
