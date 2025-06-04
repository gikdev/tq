import { Module } from "@nestjs/common"
import { AnswersModule } from "src/answers/answers.module"

@Module({
  imports: [AnswersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
