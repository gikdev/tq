import { atomWithStorage } from "jotai/utils"
import routes from "#/pages/routes"

export type PrecisionAnswerCode = 1 | 2 | 3 | 4 | 5 | 6

export interface PrecisionQuestion {
  id: number
  query: string
  answers: PrecisionAnswer[]
}

export interface PrecisionAnswer {
  id: number
  text: string
  code: PrecisionAnswerCode
}

export const percisionAnswers: PrecisionAnswer[] = [
  { id: 0, code: 1, text: "کاملا غلط" },
  { id: 1, code: 2, text: "تقریبا غلط" },
  { id: 2, code: 3, text: "بیشتر درست است تا غلط" },
  { id: 3, code: 4, text: "اندکی درست" },
  { id: 4, code: 5, text: "تقریبا درست" },
  { id: 5, code: 6, text: "کاملا درست" },
]

const lifeTrapsQuestions: PrecisionQuestion[] = [
  {
    id: 0,
    query: "من نمی‌توانم از نزدیکانم جدا شوم چون می‌ترسم مرا ترک کنند.",
    answers: percisionAnswers,
  },
  {
    id: 1,
    query: "اگر افراد مورد علاقه‌ام، فرد دیگری را به من ترجیح دهند، دچار غم و اندوه شدید می‌شوم.",
    answers: percisionAnswers,
  },
  {
    id: 2,
    query: "معمولاً به دیگران اعتماد ندارم و بیشتر اوقات فکر می‌کنم دیگران نیت‌های پنهان و بدی دارند.",
    answers: percisionAnswers,
  },
  {
    id: 3,
    query: "احساس می‌کنم نمی‌توانم جلوی دیگران دست از حالت دفاعی بردارم چون به من صدمه می‌زنند.",
    answers: percisionAnswers,
  },
  {
    id: 4,
    query: "نگرانم که مریض شوم یا آسیب ببینم؛ در مقایسه با دیگران نگرانی من بیشتر است.",
    answers: percisionAnswers,
  },
  {
    id: 5,
    query: "نگران‌ام که خودم (یا خانواده‌ام) سرمایه‌ام را از دست بدهم و محتاج دیگران شوم.",
    answers: percisionAnswers,
  },
  {
    id: 6,
    query: "احساس می‌کنم که تنهایی نمی‌توانم از پس مسائل برآیم و نیاز دارم کسی کمکم کند.",
    answers: percisionAnswers,
  },
  {
    id: 7,
    query: "من و والدینم اغلب بیش از حد در زندگی و مسایل یکدیگر درگیر می‌شویم.",
    answers: percisionAnswers,
  },
  {
    id: 8,
    query:
      "اغلب در زندگی کسی را نداشته‌ام که از من حمایت کند، به درد دل‌ام گوش بدهد و نگران اتفاقات زندگی من باشد.",
    answers: percisionAnswers,
  },
  {
    id: 9,
    query: "کسی نبوده که نیازهای عاطفی من (مثل درک شدن، همدلی، راهنمایی و حمایت) را برآورده سازد.",
    answers: percisionAnswers,
  },
  {
    id: 10,
    query:
      "احساس می‌کنم به هیچ‌کس یا هیچ گروهی تعلق خاطر ندارم؛ با دیگران خیلی فرق دارم، وصلهٔ ناجور جمع هستم.",
    answers: percisionAnswers,
  },
  {
    id: 11,
    query: "آدم کسل‌کننده و خسته‌کننده‌ای هستم؛ در موقعیت‌های اجتماعی حرفی برای گفتن ندارم.",
    answers: percisionAnswers,
  },
  {
    id: 12,
    query:
      "آرزو دارم دوستان، اعضای خانواده و آشنایان با تمام عیب‌ها و نقص‌های من مرا دوست داشته باشند، اما متأسفانه چنین فردی در زندگی من وجود ندارد.",
    answers: percisionAnswers,
  },
  {
    id: 13,
    query: "از خودم شرمنده هستم، ارزش، احترام، دوستی و محبت دیگران را ندارم.",
    answers: percisionAnswers,
  },
  {
    id: 14,
    query: "در محیط‌های شغلی و تحصیلی، به‌اندازه همسالانم باهوش و توانمند نیستم.",
    answers: percisionAnswers,
  },
  {
    id: 15,
    query: "به‌دلیل اینکه می‌دانم دیگران موفق و با استعداد هستند، اغلب احساس بی‌کفایتی می‌کنم.",
    answers: percisionAnswers,
  },
  {
    id: 16,
    query:
      "اغلب احساس می‌کنم باید خواسته‌های دیگران تن بدهم، چون رهایم می‌کنند یا در صدد تلافی برمی‌آیند.",
    answers: percisionAnswers,
  },
  {
    id: 17,
    query:
      "دیگران اعتقاد دارند من برای خوشبختی مردم همه‌کار می‌کنم، ولی برای رفع نیازهای خودم قدمی برنمی‌دارم.",
    answers: percisionAnswers,
  },
  {
    id: 18,
    query:
      "تلاش می‌کنم هر کاری را به بهترین نحو انجام دهم، اینکه کار ناقص باشد اصلاً مرا راضی نمی‌کند.",
    answers: percisionAnswers,
  },
  {
    id: 19,
    query: "آن‌قدر کار دارم که وقتی برای استراحت و لذت بردن از زندگی ندارم.",
    answers: percisionAnswers,
  },
  {
    id: 20,
    query: "احساس می‌کنم نباید از قوانین و قراردادهایی که دیگران تابع آن‌ها هستند، اطاعت کنم.",
    answers: percisionAnswers,
  },
  {
    id: 21,
    query:
      "نمی‌توانم کارهای کسالت‌بار یا به‌انجام‌رساندن وظایفم را تحمل کنم؛ از این لحاظ به‌نظر می‌رسد آدم بی‌نظمی هستم.",
    answers: percisionAnswers,
  },
  {
    id: 22,
    query: "در حال حاضر نمی‌توانم از نزدیکانم جدا شوم چون می‌ترسم مرا ترک کنند.",
    answers: percisionAnswers,
  },
  {
    id: 23,
    query:
      "اگر فرد مورد علاقه‌ام به فرد دیگری توجه کند، به‌شدت نگران می‌شوم که دیگر دوستم نداشته باشد.",
    answers: percisionAnswers,
  },
  {
    id: 24,
    query: "معمولاً فکر می‌کنم دیگران نیت‌های پنهانی دارند و به همین دلیل به آن‌ها اعتماد ندارم.",
    answers: percisionAnswers,
  },
  {
    id: 25,
    query:
      "احساس می‌کنم نمی‌توانم جلوی دیگران از خودم دفاع کنم، چون به نظر می‌رسد که صداقت من را نمی‌پذیرند.",
    answers: percisionAnswers,
  },
  {
    id: 26,
    query: "نگرانم که بیمار شوم یا آسیب ببینم؛ در مقایسه با دیگران، نگرانی‌ام بیشتر است.",
    answers: percisionAnswers,
  },
  {
    id: 27,
    query: "نگرانم که اگر خانواده‌ام، سرپناهم را از دست بدهم، محتاج دیگران شوم.",
    answers: percisionAnswers,
  },
  {
    id: 28,
    query:
      "احساس می‌کنم نمی‌توانم به‌تنهایی از پس مسائل زندگی‌ام بربیایم و به کسی نیاز دارم که کمکم کند.",
    answers: percisionAnswers,
  },
  {
    id: 29,
    query: "در روابط صمیمی‌، اغلب نگرانم که به اندازه کافی مورد محبت یا درک قرار نگیرم.",
    answers: percisionAnswers,
  },
  {
    id: 30,
    query: "اغلب احساس می‌کنم کسی را ندارم که واقعاً از من حمایت کند یا مرا بفهمد.",
    answers: percisionAnswers,
  },
  {
    id: 31,
    query:
      "کسی نبوده که در زندگی فعلی‌ام، واقعاً نیازهای عاطفی من را (درک، همدلی، راهنمایی، حمایت) تأمین کند.",
    answers: percisionAnswers,
  },
  {
    id: 32,
    query:
      "احساس می‌کنم به هیچ‌کس تعلق خاطر ندارم و با دیگران خیلی فرق دارم؛ جمع‌ها برایم ناآشنا یا ناپسند هستند.",
    answers: percisionAnswers,
  },
  {
    id: 33,
    query: "احساس می‌کنم در موقعیت‌های اجتماعی، فردی کسل‌کننده و خسته‌کننده‌ام و چیزی برای گفتن ندارم.",
    answers: percisionAnswers,
  },
  {
    id: 34,
    query:
      "آرزو دارم دوستان و اعضای خانواده‌ام مرا دوست داشته باشند، اما واقعیت این است که نقش مؤثری در زندگی‌ام ندارند.",
    answers: percisionAnswers,
  },
  {
    id: 35,
    query: "از خودم شرمنده‌ام؛ ارزش احترام یا محبت دیگران را ندارم.",
    answers: percisionAnswers,
  },
  {
    id: 36,
    query: "در شغل یا تحصیل‌، احساس می‌کنم به اندازه بقیه باهوش یا توانمند نیستم.",
    answers: percisionAnswers,
  },
  {
    id: 37,
    query: "به‌دلیل اینکه معمولاً دیگران موفق‌تر از من هستند، اغلب احساس شکست یا کم‌ارزشی می‌کنم.",
    answers: percisionAnswers,
  },
  {
    id: 38,
    query: "احساس می‌کنم باید خواسته‌های دیگران را به‌هر شکل ممکن برآورده کنم، حتی اگر خودم نخواهم.",
    answers: percisionAnswers,
  },
  {
    id: 39,
    query: "دیگران از من انتظار دارند برای رفع نیازهای‌شان فداکاری کنم و خودم را نادیده بگیرم.",
    answers: percisionAnswers,
  },
  {
    id: 40,
    query:
      "علایق یا کارهایی که انجام می‌دهم برای دیگران رضایت‌بخش نیست و مدام احساس ناکافی بودن دارم.",
    answers: percisionAnswers,
  },
  {
    id: 41,
    query: "آن‌قدر کار دارم که برای استراحت یا لذت بردن از زندگی وقت ندارم.",
    answers: percisionAnswers,
  },
  {
    id: 42,
    query: "احساس می‌کنم نباید از قوانین و قراردادهایی که دیگران تعیین کرده‌اند، سرپیچی کنم.",
    answers: percisionAnswers,
  },
  {
    id: 43,
    query:
      "نمی‌توانم کارهایی را که دیگران نیمه‌کاره رها کرده‌اند، کامل انجام دهم یا به نتیجه برسانم؛ از این بابت احساس بی‌کفایتی می‌کنم.",
    answers: percisionAnswers,
  },
]

const trapQuestionnaireNames = [
  "life-traps",
  "abandonment",
  "mistrust-abuse",
  "vulnerability",
  "dependence",
  "emotional-deprivation",
  "social-exclusion",
  "defectiveness-shame",
  "failure",
  "subjugation",
  "unrelenting-standards",
  "entitlement",
] as const
export type TrapQuestionnaireName = (typeof trapQuestionnaireNames)[number]

export interface Questionnaire {
  id: TrapQuestionnaireName
  to: string
  title: string
  questions: PrecisionQuestion[]
}

let questionnaires: Questionnaire[] = [
  { id: "life-traps", to: "/", title: "تله‌های زندگی", questions: lifeTrapsQuestions },
  { id: "abandonment", to: "/", title: "رها شدگی", questions: [] },
  { id: "mistrust-abuse", to: "/", title: "بی اعتمادی/بد رفتاری", questions: [] },
  { id: "vulnerability", to: "/", title: "آسیب‌پذیری", questions: [] },
  { id: "dependence", to: "/", title: "وابستگی", questions: [] },
  { id: "emotional-deprivation", to: "/", title: "محرومیت هیجانی", questions: [] },
  { id: "social-exclusion", to: "/", title: "طرد اجتماعی", questions: [] },
  { id: "defectiveness-shame", to: "/", title: "نقص/شرم", questions: [] },
  { id: "failure", to: "/", title: "شکست", questions: [] },
  { id: "subjugation", to: "/", title: "اطاعت", questions: [] },
  { id: "unrelenting-standards", to: "/", title: "معیارهای سختگیرانه", questions: [] },
  { id: "entitlement", to: "/", title: "استحقاق", questions: [] },
]

questionnaires = questionnaires.map(q => ({ ...q, to: routes.client_testById_home(q.id) }))

export { questionnaires }

export const answersAtom = atomWithStorage<Record<TrapQuestionnaireName, string>>("ANSWERS", {
  "life-traps":
    "0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0",
  abandonment: "",
  "mistrust-abuse": "",
  vulnerability: "",
  dependence: "",
  "emotional-deprivation": "",
  "social-exclusion": "",
  "defectiveness-shame": "",
  failure: "",
  subjugation: "",
  "unrelenting-standards": "",
  entitlement: "",
})
