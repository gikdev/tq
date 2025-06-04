import { Injectable } from "@nestjs/common"
import { CreateAnswerDto } from "./answers.dto"

@Injectable()
export class AnswersService {
  create(createAnswerDto: CreateAnswerDto) {
    return "This action adds a new answer"
  }

  findAll() {
    return "This action returns all answers"
  }
}
