import {
  createFileRoute,
  useLoaderData,
  useNavigate,
} from "@tanstack/react-router";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { fetchCategories } from "@/api/categoryApi";
import NotFound from "@/components/not-found";
import ProductCatalog from "@/components/product-catalog";
import Container from "@/components/ui/container";
import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navbar";
import { useAuth } from "@/context/auth-provider";
import { axiosAuth } from "@/lib/axios";

export const Route = createFileRoute("/")({
  component: Index,
  loader: async () => {
    const categories = await fetchCategories();

    return { categories };
  },
  notFoundComponent: () => {
    return <NotFound>Something went wrong when fetch products</NotFound>;
  },
});

function Index() {
  const { categories } = useLoaderData({ from: "/" });
  const { data } = categories;

  const { accessToken, setAccessToken, setUserId } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMe = async () => {
      try {
        const response = await axiosAuth.post("/auth/refresh/token");
        const userIdResponse = response.data.data.userId;
        const token = response.data.data.accessToken;
        setAccessToken(token);
        setUserId(userIdResponse);
      } catch (error) {
        setAccessToken(null);
        setUserId(null);
      }
    };

    if (!accessToken) {
      fetchMe();
    }
  }, [accessToken, setAccessToken, navigate, setUserId]);

  return (
    <div className="relative bg-[#FDFEFE]">
      <Navbar />
      <Container className="space-y-20">
        <Swiper spaceBetween={50} slidesPerView={1}>
          <SwiperSlide>
            <img src="/images/keyboards.webp" alt="" className="rounded-2xl" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/keyboards.webp" alt="" className="rounded-2xl" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/keyboards.webp" alt="" className="rounded-2xl" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/keyboards.webp" alt="" className="rounded-2xl" />
          </SwiperSlide>
        </Swiper>

        <ProductCatalog inCategoryPage={false} categories={data} />
      </Container>
      <Footer />
    </div>
  );
}
