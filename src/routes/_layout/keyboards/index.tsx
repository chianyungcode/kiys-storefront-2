import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/keyboards/")({
  component: () => <div>Hello /_layout/keyboards/!</div>,
});
