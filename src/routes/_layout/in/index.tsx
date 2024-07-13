import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/in/")({
  component: () => <div className="">Hello /_layout/in/!</div>,
});
