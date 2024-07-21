import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/keyboards/$product-slug/")({
  component: () => <div>Hello /_layout/keyboards/$product-slug/!</div>,
});
