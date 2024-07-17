import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/cart/')({
  component: () => <div>Hello /_layout/cart/!</div>
})