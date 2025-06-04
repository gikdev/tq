import "dotenv/config"
import { faker } from "@faker-js/faker"
import { NodePgDatabase, drizzle } from "drizzle-orm/node-postgres"
import { Pool } from "pg"
import * as schema from "./schema"

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || "",
})

const db = drizzle(pool, { schema }) as NodePgDatabase<typeof schema>

async function main() {
  await Promise.all(
    Array(10)
      .fill("")
      .map(async () => {
        await db
          .insert(schema.answers)
          .values({
            fullName: faker.person.fullName(),
            phone: faker.phone.number({ style: "international" }),
            questionnaire: generateRandomQuestionnaire(),
            result: generateFakeAnswerResult(),
          })
          .returning()
      }),
  )
}
main()
  .then()
  .catch(e => {
    console.error(e)
    process.exit(0)
  })

function generateRangeRandomNum(max = 6, min = 1) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function generateFakeAnswerResult() {
  let result = ""

  for (const turn of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]) {
    result += `${generateRangeRandomNum()},`
  }

  return result.slice(0, -1)
}

function generateRandomQuestionnaire() {
  const questionnaires = ["fear1", "fear2", "symptom1", "symptom2", "illness1", "illness2"]
  const randomQIndex = generateRangeRandomNum(questionnaires.length - 1, 0)
  return questionnaires[randomQIndex]
}
