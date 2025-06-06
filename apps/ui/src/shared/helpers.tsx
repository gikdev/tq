import clsx, { type ClassValue } from "clsx"
import { toast } from "react-toastify"
import { twMerge } from "tailwind-merge"

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

export function createFieldsWithLabels<T extends Record<string, string>>(labels: T) {
  const fields = Object.fromEntries(Object.entries(labels).map(([key, _]) => [key, key])) as {
    [K in keyof T]: K
  }
  return { fields, labels }
}

interface ControlledToastMessages {
  pending: string
  success?: string
  error?: string
}

interface ControlledToastReturn<T> {
  resolve: (data?: T | string) => void
  reject: (err?: unknown) => void
}

/**
 * Creates a controlled toast for async operations using `react-toastify`.
 *
 * Returns `resolve` and `reject` functions to be called manually,
 * allowing precise control over when the toast transitions from
 * pending to success or error.
 *
 * @param initialMessages - Default messages for the toast states.
 * @returns An object containing `resolve` and `reject` functions.
 *
 * @example
 * const { resolve, reject } = createControlledToast({
 *   pending: "Sending request...",
 *   success: "Request successful!",
 *   error: "Something went wrong!",
 * })
 *
 * fetch("/api/submit")
 *   .then(() => resolve("Success with ✅"))
 *   .catch((err) => reject(err))
 */
export function createControlledAsyncToast<T = void>(
  initialMessages: ControlledToastMessages,
): ControlledToastReturn<T> {
  let resolve!: (value: T | PromiseLike<T>) => void
  let reject!: (reason?: unknown) => void

  const promise = new Promise<T>((res, rej) => {
    resolve = res
    reject = rej
  })

  toast.promise(promise, {
    pending: initialMessages.pending,
    success: {
      render({ data }) {
        return typeof data === "string" ? data : (initialMessages.success ?? "با موفقیت انجام شد!")
      },
    },
    error: {
      render({ data }) {
        return typeof data === "string" ? data : (initialMessages.error ?? "خطایی رخ داد!")
      },
    },
  })

  return {
    resolve: (data?: T | string) => resolve(data as T),
    reject: (err?: unknown) => reject(err),
  }
}
