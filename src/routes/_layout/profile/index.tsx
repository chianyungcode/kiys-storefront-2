import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/profile/')({
  component: () => <div>Hello /_layout/profile/!</div>
})