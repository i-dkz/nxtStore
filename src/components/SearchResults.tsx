import { ProductQuery } from "@/app/page";
import useSearch from "@/hooks/useSearch";
import Skeleton from "./Skeleton";
import { Product } from "@/hooks/useSearch";
import Link from "next/link";
import Card from "./ProductCard";
import { useState } from "react";
import { useSearchStore } from "@/store/SearchStore";

interface Props {
  productQuery: ProductQuery;
}

const SearchResults = ({ productQuery }: Props) => {
  const { selectedSearch } = useSearchStore();
  const { data, error, isLoading } = useSearch(productQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  if (error) return <p>{error}</p>;
  return (
    <div>
      <div className="w-full">
        <h1 className="flex items-center justify-center w-full mb-10 text-3xl font-bold">
          {selectedSearch === "" ? <>Top Deals!</> : <>showing results for: {selectedSearch}</>}
        </h1>
        <div className="flex flex-wrap items-center justify-center w-full gap-4">
          {isLoading
            ? skeletons.map((skeleton) => <Skeleton key={skeleton} />)
            : data.map((product: Product) => (
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

export default SearchResults;
