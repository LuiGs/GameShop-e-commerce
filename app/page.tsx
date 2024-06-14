import BannerDiscount from "@/components/banner-discount";
import BannerProduct from "@/components/banner-product";
import CarouselTextBanner from "@/components/carousel-text-banner";
import ChooseCategory from "@/components/choose-category";
import FeaturedProducts from "@/components/featured-products";

export default function Home() {
  return (
    <main>
      <CarouselTextBanner />
      <div className="relative min-h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('/background.jpg')" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-75 z-10"></div>
        <div className="relative z-20">
          <BannerProduct />
        </div>
      </div>
      <BannerDiscount />
      <FeaturedProducts />
      <ChooseCategory />
    </main>
  );
}
