import { Inject, Injectable } from "@nestjs/common"
import { DRIZZLE } from "src/drizzle/drizzle.module"
import { answers } from "src/drizzle/schema"
import { DrizzleDb } from "src/drizzle/types"
import { CreateAnswerDto } from "./answers.dto"

@Injectable()
export class AnswersService {
  constructor(@Inject(DRIZZLE) private db: DrizzleDb) {}

  async create(createAnswerDto: CreateAnswerDto) {
    await this.db.insert(answers).values({
      fullName: createAnswerDto.fullName,
      phone: createAnswerDto.phone,
      result: createAnswerDto.result,
    })
  }

  async findAll() {
    return await this.db.query.answers.findMany()
  }
}
