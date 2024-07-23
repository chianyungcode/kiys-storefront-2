import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/checkout/')({
  component: () => <div>Hello /_layout/checkout/!</div>
})