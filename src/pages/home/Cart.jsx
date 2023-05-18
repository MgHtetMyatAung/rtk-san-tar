import React from "react";

const Cart = ({ item }) => {
  return (
    <div className="p-5">
      <h3 className=" text-lg font-medium">{item?.name}</h3>
      <button
        className=" bg-red-500 text-white px-3 py-1"
        onClick={() => dispatch(deleteProduct(item.id))}
      >
        Del
      </button>
    </div>
  );
};

export default Cart;
