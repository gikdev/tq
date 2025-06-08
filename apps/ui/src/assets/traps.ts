interface Questionnaire {
  id: string
  to: string
  title: string
}

interface TrapQuestionnaire extends Questionnaire {}

export const trapQuestionnaires: TrapQuestionnaire[] = [
  { id: "abandonment", to: "/", title: "رها شدگی" },
  { id: "mistrust-abuse", to: "/", title: "بی اعتمادی/بد رفتاری" },
  { id: "vulnerability", to: "/", title: "آسیب‌پذیری" },
  { id: "dependence", to: "/", title: "وابستگی" },
  { id: "emotional-deprivation", to: "/", title: "محرومیت هیجانی" },
  { id: "social-exclusion", to: "/", title: "طرد اجتماعی" },
  { id: "defectiveness-shame", to: "/", title: "نقص/شرم" },
  { id: "failure", to: "/", title: "شکست" },
  { id: "subjugation", to: "/", title: "اطاعت" },
  { id: "unrelenting-standards", to: "/", title: "معیارهای سختگیرانه" },
  { id: "entitlement", to: "/", title: "استحقاق" },
]
