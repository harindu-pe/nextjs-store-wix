import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const CartModal = () => {
  // TEMPORARY
  const cartItems = true;

  return (
    <div className="absolute right-0 top-12 z-20 flex w-max flex-col gap-6 rounded-md bg-white p-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      {!cartItems ? (
        <div>Cart is Empty</div>
      ) : (
        <>
          <h2 className="text-xl">Shopping Cart</h2>
          <div className="flex flex-col gap-8">
            {/* ITEM */}
            <div className="flex gap-4">
              <Image
                src="https://images.pexels.com/photos/10727340/pexels-photo-10727340.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
                alt=""
                width={72}
                height={96}
                className="rounded-md object-cover"
              />
              <div className="flex w-full flex-col justify-between">
                {/* TOP */}
                <div>
                  {/* TITLE */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">Product Name</h3>
                    <div className="flex items-center gap-2 rounded-sm bg-gray-50 p-1">
                      $49
                    </div>
                  </div>

                  {/* DESCRIPTION */}
                  <div className="text-sm text-gray-500">Available</div>
                </div>

                {/* BOTTOM */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qty. 2</span>
                  <span className="text-blue-500">Remove</span>
                </div>
              </div>
            </div>
            {/* ITEM */}
            <div className="flex gap-4">
              <Image
                src="https://images.pexels.com/photos/10727340/pexels-photo-10727340.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
                alt=""
                width={72}
                height={96}
                className="rounded-md object-cover"
              />
              <div className="flex w-full flex-col justify-between">
                {/* TOP */}
                <div>
                  {/* TITLE */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">Product Name</h3>
                    <div className="flex items-center gap-2 rounded-sm bg-gray-50 p-1">
                      $49
                    </div>
                  </div>

                  {/* DESCRIPTION */}
                  <div className="text-sm text-gray-500">Available</div>
                </div>

                {/* BOTTOM */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qty. 2</span>
                  <span className="text-blue-500">Remove</span>
                </div>
              </div>
            </div>
          </div>
          {/* BOTTOM */}
          <div className="">
            <div className="flex items-center justify-between font-semibold">
              <span className="">Subtotal</span>
              <span className="">$49</span>
            </div>
            <p className="mb-4 mt-2 text-sm text-gray-500">
              Shipping and taxes calculated at checkout.
            </p>
            <div className="flex justify-between text-sm">
              <Button variant="secondary" className="py-6">
                View Cart
              </Button>
              <Button className="py-6">Checkout</Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartModal;
