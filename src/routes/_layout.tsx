import { Outlet, createFileRoute } from "@tanstack/react-router";

import Footer from "../components/ui/footer";
import Navbar from "../components/ui/navbar";

export const Route = createFileRoute("/_layout")({
  component: () => (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  ),
});
