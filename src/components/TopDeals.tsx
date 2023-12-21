import Link from "next/link";
import Card from "@/components/ProductCard";
import Skeleton from "@/components/Skeleton";

type Product = {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  price: number;
};

interface Props {
  isLoading: boolean;
  products: Product[];
}

const skeletons = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28,
];

const TopDeals = ({ isLoading, products }: Props) => {
  return (
    <div>
      <div className="w-full">
        <h1 className="flex items-center justify-center w-full mb-10 text-3xl font-bold">
          Top Deals!
        </h1>
        <div className="flex flex-wrap items-center justify-center w-full gap-4">
          {isLoading
            ? skeletons.map((skeleton) => <Skeleton key={skeleton} />)
            : products.map((product: Product) => (
                <Link key={product.id} href={`./details/${product.id}`}>
                  <Card
                    title={product.title}
                    description={product.description}
                    thumbnail={product.thumbnail}
                    price={product.price}
                  />
                </Link>
              ))}
        </div>
      </div>
    </div>
  );
};

export default TopDeals;
