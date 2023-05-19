import React from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { ConfirmNoti } from "../../components/noti/confirmNoti";
import { useNavigate } from "react-router";
import {
  useDeleteContactMutation,
} from "../../app/api/contact/contactApi";
import { useToken } from "../../hook/useToken";
import Swal from "sweetalert2";

const Cart = ({ item }) => {
  const token = useToken();
  const navigate = useNavigate();
  const [useDeleteContact, { data, isLoading, isError }] =
    useDeleteContactMutation();
  const handleDelete = ({ id, token }) => {
    Swal.fire({
      title: "Are you sure to delete this contact?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await useDeleteContact({ id, token });
          console.log(res);
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  return (
    <div className="p-5 h-fit shadow-md rounded-lg flex items-center gap-5">
      <div>
        <FaUser size={40} className=" text-gray-500" />
      </div>
      <div className=" w-full">
        <h3 className=" text-xl font-medium">{item?.name}</h3>
        <div className=" flex justify-between items-center">
          <h4 className=" font-medium">{item?.phone}</h4>
          <div className="">
            <button
              className=" text-red-500 px-3 py-1"
              onClick={() => handleDelete({ id: item.id, token })}
            >
              <BsFillTrashFill size={18} />
            </button>
            <button
              className=" px-3 py-1"
              onClick={() => navigate("/manage", { state: { item } })}
            >
              <BiEdit size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
