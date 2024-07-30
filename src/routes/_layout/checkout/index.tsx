import { createFileRoute } from "@tanstack/react-router";

import ContactForm from "@/components/payment/contact-form";
import DeliveryForm from "@/components/payment/delivery-form";
import Container from "@/components/ui/container";

const CheckoutPage = () => {
  return (
    <Container className="space-y-10">
      <h1 className="text-4xl font-sora font-semibold">Checkout</h1>
      <div className="space-y-4">
        <ContactForm />
        <DeliveryForm />
      </div>
    </Container>
  );
};

export const Route = createFileRoute("/_layout/checkout/")({
  component: CheckoutPage,
});
