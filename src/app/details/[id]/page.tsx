"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import StarRating from "@/components/StarRating";
import Skeleton from "@/components/Skeleton";
import Stock from "@/components/Stock";
import { useCartStore } from "@/store/CartStore";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Review from "@/components/Review";
import { Button } from "@/components/ui/button";

// Define the type for a product in the shopping cart
export interface CartProduct {
  id: number;
  title: string;
  price: number;
  quantity: number;
}

// Define the type for the shopping cart state
export interface CartState {
  cart: CartProduct[];
}

// Define the actions for the shopping cart
export interface CartActions {
  addToCart: (product: CartProduct) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
}

export default function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState({
    id: 0,
    title: "",
    description: "",
    price: 0,
    thumbnail: "",
    brand: "",
    rating: 0,
    discountPercentage: 0,
    stock: 0,
    category: "",
  }); // Provide a default type

  const [isLoading, setLoading] = useState(true);

  const fullPrice = (product.price / product.discountPercentage).toFixed(2);

  const addToCart = useCartStore((state) => state.addToCart);

  const [cart, setCart] = useState(0);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(addToCart));
  }, [addToCart]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        return <>Error loading product</>;
      } finally {
        setLoading(false); // Set loading to false once the data is received
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  const handleAddToCart = () => {
    const { id, title, price } = product;
    const cartProduct: CartProduct = { id, title, price, quantity: 1 };

    addToCart(cartProduct);
    setCart(cart + 1);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center">
        <Skeleton />
      </div>
    ); // Render a loading skeleton while the data is being fetched
  }

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex justify-center">
      <div className="flex flex-col h-[100vh] w-[90%] gap-5 flex-wrap items-center">
        <div className="flex flex-wrap justify-center w-full gap-5">
          <img
            src={product.thumbnail}
            className="object-cover rounded-md w-[600px] h-[500px]"
          />

          <div className="flex flex-col gap-4 items-start w-full max-w-[380px]">
            <div>
              <h1 className="text-3xl font-bold">{product.title}</h1>
              <span className="text-sm text-gray-500">{product.category}</span>
            </div>
            <div>
              <p className="text-xs font-bold text-red-700">
                SAVE ${fullPrice}
              </p>
              <p className="text-2xl font-bold text-red-700">
                ${product.price}
              </p>
            </div>
            <span className="text-xs">
              <strong>brand:</strong> {product.brand}
            </span>

            <span className="text-xs font-bold">
              SOLD AND SHIPPED BY NXTSTORE
            </span>

            <span>{product.description}</span>
            <span>
              <Stock stock={product.stock} />
            </span>
            <Button
              onClick={handleAddToCart}
              className="w-[100px] h-[30px] bg-black text-white rounded-md hover:bg-slate-700"
            >
              Add to Cart
            </Button>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Free Delivery and Returns</AccordionTrigger>
                <AccordionContent>
                  <p>Free standard delivery on orders over $200.</p>• You can
                  return your order no questions, within 30 days.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  <span className="flex gap-3">
                    Reviews <StarRating rating={product.rating} />
                    {product.rating}
                  </span>
                </AccordionTrigger>

                <AccordionContent>
                  <Review />
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Is it animated?</AccordionTrigger>
                <AccordionContent>
                  Yes. It&apos;s animated by default, but you can disable it if
                  you prefer.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
