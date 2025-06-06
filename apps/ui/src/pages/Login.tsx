import { useNavigate } from "react-router"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Labeler } from "#/components/Labeler"
import { createFieldsWithLabels } from "#/shared/helpers"
import { Input } from "#/components/Input"
import { Btn } from "#/components/Btn"
import Cookies from "js-cookie"
import storageKeys from "#/shared/storage-keys"
import routes from "./routes"

const ADMIN_PHONE = "09366107839"

const { fields, labels } = createFieldsWithLabels({
  fullName: "نام",
  phone: "شماره تلفن",
})

const iranPhoneRegex = /^09\d{9}$/

const loginSchema = z.object({
  fullName: z.string().min(1, { message: "نام الزامی است" }),
  phone: z.string().refine(val => iranPhoneRegex.test(val), {
    message: "شماره موبایل باید با 09 شروع شده و 11 رقم باشد (مثلاً 09123456789)",
  }),
})

type LoginFormValues = z.infer<typeof loginSchema>

export default function Login() {
  const navigate = useNavigate()

  const { register, handleSubmit, formState } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  })
  const { errors, isSubmitting } = formState

  const onSubmit = async (data: LoginFormValues) => {
    const role = data.phone === ADMIN_PHONE ? "admin" : "client"

    Cookies.set(storageKeys.role, role)
    Cookies.set(storageKeys.fullName, data.fullName)
    Cookies.set(storageKeys.phone, data.phone)

    if (role === "admin") {
      navigate(routes.admin_dashboard())
      return
    }

    if (role === "client") {
      navigate(routes.client_home())
      return
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col bg-slate-2 border border-slate-6 p-5 gap-5 text-center rounded-lg max-w-96 w-full"
    >
      <Labeler labelText={labels.fullName} errorMsg={errors.fullName?.message}>
        <Input {...register(fields.fullName)} />
      </Labeler>

      <Labeler labelText={labels.phone} errorMsg={errors.phone?.message}>
        <Input {...register(fields.phone)} placeholder="09123456789" dir="ltr" />
      </Labeler>

      <Btn theme="primary" themeType="filled" type="submit" disabled={isSubmitting}>
        ورود
      </Btn>
    </form>
  )
}
