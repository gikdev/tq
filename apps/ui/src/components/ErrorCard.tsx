import styled from "@master/styled.react"
import type { ReactNode } from "react"
import { ErrorBoundary } from "react-error-boundary"

const StyledContainer = styled.span`
  bg-red-2 border-2 border-red-6 p-4 flex flex-col
  gap-4 text-red-11 rounded-lg max-w-72 text-center
`

function ErrorCard() {
  return (
    <StyledContainer>
      <p>یه مشکلی پیش اومده و به احتمال زیاد تقصیر ماست. میتوانید به مسئول مربوطه پیام دهید.</p>
    </StyledContainer>
  )
}

interface ErrorCardBoundaryProps {
  children: ReactNode
}

export function ErrorCardBoundary({ children }: ErrorCardBoundaryProps) {
  return <ErrorBoundary FallbackComponent={ErrorCard}>{children}</ErrorBoundary>
}
