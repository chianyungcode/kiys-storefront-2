import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/mouse/")({
  component: () => <div>Hello /_layout/mouse/!</div>,
});
