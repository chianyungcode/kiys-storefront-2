import { Outlet, createFileRoute } from "@tanstack/react-router";
import Navbar from "../components/ui/navbar";
import Footer from "../components/ui/footer";

export const Route = createFileRoute("/_layout")({
  component: () => (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  ),
});
