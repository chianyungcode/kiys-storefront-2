import { createFileRoute } from "@tanstack/react-router";

const Forgot = () => {
  return <div>Anjas</div>;
};

export const Route = createFileRoute("/_layout/_protected/forgot/")({
  component: Forgot,
});
