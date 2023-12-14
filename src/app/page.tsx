"use client";

import Card from "@/components/ProductCard";
import Skeleton from "@/components/Skeleton";
import Link from "next/link";
import { useEffect, useState } from "react";

type Product = {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  price: number;
};

export default function Home() {
  const [isLoading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const skeletons = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28,
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/`);
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        return <>Error loading product</>;
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
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
  );
}
