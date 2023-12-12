import { Check } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Props {
  subtotal: number;
}

export function OrderSummary({ subtotal }: Props) {
  const shipping = subtotal >= 200 || subtotal === 0 ? 0 : 30;
  const tax = subtotal === 0 ? 0 : .12 * (subtotal + shipping);
  const total = (subtotal + shipping + tax).toFixed(2);

  return (
    <Card className={cn("w-[380px] h-[400px]")}>
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col gap-4">
        <div className="flex justify-center">
          <hr className="w-full" />
        </div>
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${subtotal}</span>
        </div>
        <div className="flex justify-between">
          <span>Estimated Delivery & Handling</span>
          <span>{shipping === 0 ? "Free" : "$" + shipping.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Tax</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-center">
          <hr className="w-full" />
        </div>
        <div className="flex justify-between">
          <span>Total</span>
          <span>${total}</span>
        </div>
      </CardContent>

      <CardFooter className="flex flex-col gap-2">
        <Button className="w-full">
          <Check className="w-4 h-4 mr-2" /> Checkout
        </Button>
        <Button className="w-full" variant='outline'>
          <span className="italic font-bold">
            <span className="text-blue-800">Pay</span>
            <span className="text-blue-400">Pal</span>
          </span>
        </Button>
      </CardFooter>
    </Card>
  );
}
