import {
  ArrowLeftIcon,
  ArrowRightIcon,
  BombIcon,
  CheckCircleIcon,
  InfoIcon,
  WarningIcon,
} from "@phosphor-icons/react"
import { Link, useParams } from "react-router"
import { Btn } from "#/components/Btn"
import routes from "#/pages/routes"
import { BtnContainer, ContentContainer } from "../_shared/Layout"

export default function TestByIdHome() {
  const testId = useParams().testId
  if (!testId) return null

  return (
    <>
      <ContentContainer className="flex flex-col gap-2">
        <div className="bg-blue-3 border border-blue-7 rounded-md p-2 text-blue-11 flex flex-col gap-2">
          <div className="text-blue-12 flex gap-1 items-center font-bold">
            <InfoIcon size={24} weight="fill" />
            <p>سلام به همگی / نکات مهم قبل شروع</p>
          </div>

          <div className="">
            <p>
              آقا قبل اینکه این تست رو شروع کنید در نظر داشته باشید که به سوالات به صورت کاملا
              صادقانه و با دقت بسیار پاسخ بدید
            </p>
            <p>
              نکته دیگر این هست که این بلوک متن نوشته شده اصلا مهم نیست و در واقع متن لورم ایپسوم
              (Lorem Ipsum) هست که من از خودم درآوردم...
            </p>
          </div>
        </div>
        <div className="bg-red-3 border border-red-7 rounded-md p-2 text-red-11 flex flex-col gap-2">
          <div className="text-red-12 flex gap-1 items-center font-bold">
            <BombIcon size={24} weight="fill" />
            <p>سلام به همگی / نکات مهم قبل شروع</p>
          </div>

          <div className="">
            <p>
              آقا قبل اینکه این تست رو شروع کنید در نظر داشته باشید که به سوالات به صورت کاملا
              صادقانه و با دقت بسیار پاسخ بدید
            </p>
            <p>
              نکته دیگر این هست که این بلوک متن نوشته شده اصلا مهم نیست و در واقع متن لورم ایپسوم
              (Lorem Ipsum) هست که من از خودم درآوردم...
            </p>
          </div>
        </div>
        <div className="bg-yellow-3 border border-yellow-7 rounded-md p-2 text-yellow-11 flex flex-col gap-2">
          <div className="text-yellow-12 flex gap-1 items-center font-bold">
            <WarningIcon size={24} weight="fill" />
            <p>سلام به همگی / نکات مهم قبل شروع</p>
          </div>

          <div className="">
            <p>
              آقا قبل اینکه این تست رو شروع کنید در نظر داشته باشید که به سوالات به صورت کاملا
              صادقانه و با دقت بسیار پاسخ بدید
            </p>
            <p>
              نکته دیگر این هست که این بلوک متن نوشته شده اصلا مهم نیست و در واقع متن لورم ایپسوم
              (Lorem Ipsum) هست که من از خودم درآوردم...
            </p>
          </div>
        </div>
        <div className="bg-green-3 border border-green-7 rounded-md p-2 text-green-11 flex flex-col gap-2">
          <div className="text-green-12 flex gap-1 items-center font-bold">
            <CheckCircleIcon size={24} weight="fill" />
            <p>سلام به همگی / نکات مهم قبل شروع</p>
          </div>

          <div className="">
            <p>
              آقا قبل اینکه این تست رو شروع کنید در نظر داشته باشید که به سوالات به صورت کاملا
              صادقانه و با دقت بسیار پاسخ بدید
            </p>
            <p>
              نکته دیگر این هست که این بلوک متن نوشته شده اصلا مهم نیست و در واقع متن لورم ایپسوم
              (Lorem Ipsum) هست که من از خودم درآوردم...
            </p>
          </div>
        </div>
      </ContentContainer>

      <BtnContainer>
        <Btn
          className="flex-1 flex items-center gap-1 justify-between"
          as={Link}
          to={routes.client_home()}
        >
          <ArrowRightIcon size={24} />
          <span>بازگشت</span>
        </Btn>

        <Btn
          className="flex-1 flex items-center gap-1 justify-between"
          themeType="filled"
          theme="primary"
          as={Link}
          to={routes.client_testById_test(testId)}
        >
          <span>شروع</span>
          <ArrowLeftIcon size={24} />
        </Btn>
      </BtnContainer>
    </>
  )
}
