import { HouseIcon } from "@phosphor-icons/react"
import { Link } from "react-router"
import { Btn } from "#/components/Btn"
import routes from "#/pages/routes"
import NoteBlock from "#/components/NoteBlock"

export default function NotFoundAlert() {
  return (
    <div className="m-5">
      <NoteBlock title="پیدا نشد!" status="warning">
        <p>چیزی که دنبالش بودی پیدا نشد!</p>

        <Btn as={Link} to={routes.base()} theme="info" themeType="filled" className="mt-2">
          <HouseIcon size={24} />
          <span>بازگشت به خانه</span>
        </Btn>
      </NoteBlock>
    </div>
  )
}
