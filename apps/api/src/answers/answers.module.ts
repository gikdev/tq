import { Module } from "@nestjs/common"
import { DrizzleModule } from "src/drizzle/drizzle.module"
import { AnswersController } from "./answers.controller"
import { AnswersService } from "./answers.service"

@Module({
  imports: [DrizzleModule],
  controllers: [AnswersController],
  providers: [AnswersService],
})
export class AnswersModule {}
