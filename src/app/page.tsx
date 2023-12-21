"use client";

import SearchResults from "@/components/SearchResults";
import TopDeals from "@/components/TopDeals";
import { useSearchStore } from "@/store/SearchStore";

import { useEffect, useState } from "react";

export interface ProductQuery {
  searchText: string;
}

export default function Home() {
  const [isLoading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const { selectedSearch, setSelectedSearch, productQuery } = useSearchStore();


  useEffect(() => {
    const fetchData = async () => {
      if (selectedSearch != "") {
        try {
          const response = await fetch(`https://dummyjson.com/products/`);
          const data = await response.json();
          setProducts(data.products);
        } catch (error) {
          return <>Error loading product</>;
        } finally {
          setLoading(false);
        }
      } else {
        try {
          const response = await fetch(`https://dummyjson.com/products/`);
          const data = await response.json();
          setProducts(data.products);
        } catch (error) {
          return <>Error loading product</>;
        } finally {
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [selectedSearch]);

  return <SearchResults productQuery={productQuery}/>;
  
  
}
