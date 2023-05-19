import React, { useEffect, useState } from "react";
import { useGetAllContactsQuery } from "../../app/api/contact/contactApi";
import Cart from "./Cart";
import { useDispatch } from "react-redux";
import { getAllContactsTotal } from "../../app/features/contact/contactSlice";
import Pagination from "../../components/pagination/Pagination";
import MainLoading from "../../components/loading/MainLoading";

const HomePage = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const [page, setPage] = useState(1);
  const { data, isLoading, isFetching, isSuccess } = useGetAllContactsQuery({
    token,
    page,
  });
  const dispatch = useDispatch();
  useEffect(() => {
    if (data) {
      dispatch(getAllContactsTotal(data?.contacts?.total));
    }
  }, [data]);
  return (
    <div className=" container mx-auto pt-10 relative min-h-[85vh]">
      {isLoading ? (
        <MainLoading className={" h-screen fixed top-0 left-0 right-0 z-40"} />
      ) : (
        <>
          {isFetching ? (
            <MainLoading className={"h-[65vh]"} />
          ) : (
            <div className=" min-h-[65vh]">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {data?.contacts?.data.map((item) => (
                  <Cart key={item.id} item={item} />
                ))}
              </div>
            </div>
          )}

          <Pagination page={page} setPage={setPage} />
        </>
      )}
    </div>
  );
};

export default HomePage;
