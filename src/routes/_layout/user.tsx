import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/user')({
  component: () => <div>Hello /_layout/user!</div>
})