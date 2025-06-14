import { WarningDiamondIcon } from "@phosphor-icons/react"
import { Link } from "react-router"
import { Btn } from "#/components/Btn"
import routes from "#/pages/routes"

export default function NotFoundAlert() {
  return (
    <div className="bg-amber-3 text-amber-11 p-2 border border-amber-7 rounded-md m-5 flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <p className="font-bold text-amber-12">پیدا نشد!</p>

        <WarningDiamondIcon size={24} />
      </div>

      <p>چیزی که دنبالش بودی پیدا نشد!</p>
      <Btn as={Link} to={routes.base()} theme="info" themeType="filled">
        بازگشت به خانه
      </Btn>
    </div>
  )
}
