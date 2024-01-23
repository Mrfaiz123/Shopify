import React from "react";
import { items } from "../CartItems";
import ShoppingItems from "./Shoppingitems";

const ShoppingContainer = () => {
  return (
    <div className=" flex justify-center items-center">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 w-[80%]">
        {items.map((item) => {
          return <ShoppingItems key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default ShoppingContainer;