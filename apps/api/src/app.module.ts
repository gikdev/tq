import { join } from "node:path"
import { Module } from "@nestjs/common"
import { ConfigModule } from "@nestjs/config"
import { ServeStaticModule } from "@nestjs/serve-static"
import { AnswersModule } from "src/answers/answers.module"
import { DrizzleModule } from "./drizzle/drizzle.module"

@Module({
  imports: [
    DrizzleModule,
    AnswersModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "..", "client"),
      exclude: ["/api/{*test}"],
      serveStaticOptions: {
        fallthrough: false,
      },
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
