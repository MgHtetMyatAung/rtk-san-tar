import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export const ConfirmNoti = () => {
  const [confirm, setConfirm] = useState(false);

  useEffect(() => {
    Swal.fire({
      title: "Are you sure to delete this contact?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setConfirm(true);
      }
    });
  }, []);

  return confirm;
};
