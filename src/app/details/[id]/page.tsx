"use client";

import { useParams, useRouter } from "next/navigation";

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
import { CgMathMinus, CgMathPlus } from "react-icons/cg";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { FaLongArrowAltRight } from "react-icons/fa";

// Define the type for a product in the shopping cart
export interface CartProduct {
  id: number;
  title: string;
  price: number;
  quantity: number;
  thumbnail: string;
  category: string;
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
  const { toast } = useToast();
  const router = useRouter();

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
  const [qty, setQty] = useState(1);

  const handleAddToCart = () => {
    const { id, title, price, thumbnail, category } = product;
    const cartProduct: CartProduct = {
      id,
      title,
      price,
      thumbnail,
      category,
      quantity: qty,
    };

    addToCart(cartProduct);
    setQty(1);
  };

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
    <div className="flex items-center justify-center">
      <div className="flex flex-col  w-[90%] gap-5 flex-wrap items-center">
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

            <div className="flex items-center gap-3">
              <Button
                onClick={() => {
                  handleAddToCart();
                  toast({
                    title: "Added to Cart!",
                    description: `Added ${qty} ${product.title} to cart`,
                    action: (
                      <ToastAction
                        altText="Cart"
                        className="w-[75px] flex justify-between"
                        onClick={() => router.push("../cart")}
                      >
                        Cart
                        <FaLongArrowAltRight />
                      </ToastAction>
                    ),
                  });
                }}
                className="text-white transition-transform transform bg-black rounded-md duration-10 hover:bg-slate-700 focus:outline-none active:scale-90"
              >
                Add to Cart
              </Button>

              <Button
                className="transition-transform transform z-5 duration-10 focus:outline-none active:scale-90"
                variant={"outline"}
                onClick={() => setQty(qty + 1)}
              >
                <CgMathPlus size={20} />
              </Button>
              <Input
                className="w-[50px]"
                value={qty}
                onChange={() => console.log(qty)}
              />
              <Button
                className="transition-transform transform duration-10 focus:outline-none active:scale-90"
                variant={"outline"}
                onClick={() => setQty(qty > 1 ? qty - 1 : qty)}
              >
                <CgMathMinus />
              </Button>
            </div>
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
