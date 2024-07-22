import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/products/')({
  component: () => <div>Hello /_layout/products/!</div>
})