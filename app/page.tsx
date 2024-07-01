import HeroCarousel from "@/components/HeroCarousel";
import Searchbar from "@/components/Searchbar";
import Image from "next/image";
import { getAllProducts } from "@/lib/actions";
import ProductCard from "@/components/ProductCard";

const Home = async () => {
  const allProducts = await getAllProducts();

  return (
    <>
      <section className="px-6 md:px-20 py-24">
        <div className="flex max:flex-row gap-16">
          <div className="flex flex-col justify-center">
            <p className="small-text">Your Smart Shopping Companion:</p>

            <h1 className="head-text">
              Discover the Best Prices with
              <span className="text-primary"> PriceAlert</span>
            </h1>

            <p className="mt-6">
              Unlock powerful analytics to boost your shopping experience,
              helping you save more and shop smarter.
            </p>

            <Searchbar />
          </div>
        </div>
      </section>

      <section className="px-6 md:px-20 py-24 bg-gray-50">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-6">
              About
              <span className="text-primary"> PriceAlert</span>
            </h2>
            <ul className="features-items space-y-6">
              <li>
                <h3 className="text-2xl font-semibold">Comprehensive Price Analysis</h3>
                <p className="text-lg text-gray-700">
                  Search for products and get real-time information on the current, average, lowest, and highest prices.
                </p>
              </li>
              <li>
                <h3 className="text-2xl font-semibold">Email Alerts for Price Drops</h3>
                <p className="text-lg text-gray-700">
                  Receive instant email notifications when the price of a product you are tracking drops, ensuring you never miss a deal.
                </p>
              </li>
              <li>
                <h3 className="text-2xl font-semibold">Detailed Price History</h3>
                <p className="text-lg text-gray-700">
                  Maintain and access the price history of products to help you make informed purchasing decisions.
                </p>
              </li>
              <li>
                <h3 className="text-2xl font-semibold">More Features</h3>
                <p className="text-lg text-gray-700">
                  Our platform continuously evolves to offer more features and tools that enhance your shopping experience.
                </p>
              </li>
            </ul>
          </div>
          <HeroCarousel />
        </div>
      </section>

      <section className="trending-section px-6 md:px-20 py-24">
        <h2 className="section-text text-3xl font-bold mb-6">In Trend</h2>
        <div className="flex flex-wrap gap-x-8 gap-y-16">
          {allProducts?.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
