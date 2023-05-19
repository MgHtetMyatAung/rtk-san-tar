import React, { useEffect, useState } from "react";
// import Logo from "../../assets/logo.png";
import { useLocation, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { BeatLoader } from "react-spinners";
import {
  useCreateContactMutation,
  useUpdateContactMutation,
} from "../../app/api/contact/contactApi";
import { useToken } from "../../hook/useToken";
import { AuthNoti } from "../../components/noti/AuthNoit";
import { data } from "autoprefixer";

const StudentManage = () => {
  const token = useToken();
  const location = useLocation();
  const [useUpdateContact, { isLoading, isError }] = useUpdateContactMutation();
  const [useCreateContact, { isLoading: isFetching }] =
    useCreateContactMutation();
  const [isEdit, setIsEdit] = useState(false);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      address: "",
    },
    onSubmit: async (values, { setSubmitting }) => {
      if (isEdit) {
        try {
          const res = await useUpdateContact({
            data: values,
            token,
            id: location?.state?.item?.id,
          });
          if (res?.data?.success) {
            AuthNoti(res?.data?.message);
            navigate("/");
          } else {
            console.log(res);
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        try {
          const res = await useCreateContact({ data: values, token });
          if (res?.data?.success) {
            AuthNoti(res?.data?.message);
          } else {
            console.log(res);
          }
        } catch (error) {
          console.log(error);
        }
      }
      formik.resetForm();
    },
  });

  useEffect(() => {
    if (location?.state?.item) {
      const data = location?.state.item;
      setIsEdit(true);
      const updatedFormValues = {
        name: data.name,
        phone: data.phone,
        email: data?.email || "",
        address: data?.address || "",
      };
      formik.setValues(updatedFormValues);
    }
  }, [location.state]);
  return (
    <>
      <div className="flex min-h-[60vh] flex-1 flex-col justify-center items-center px-6 py-5 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          {/* <img className="mx-auto h-20 w-auto" src={Logo} alt="Your Company" /> */}
          <h2 className="mt-5 text-center text-xl font-semibold leading-9 tracking-tight text-gray-900">
            {isEdit ? "Edit Contact" : "Add New Contact"}
          </h2>
        </div>

        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-2" onSubmit={formik.handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Phone Number
              </label>
              <div className="mt-2">
                <input
                  id="phone"
                  name="phone"
                  type="number"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400"
                  onChange={formik.handleChange}
                  value={formik.values.phone}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Address
              </label>
              <div className="mt-2">
                <textarea
                  name="address"
                  id="address"
                  cols="30"
                  rows="3"
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400"
                  onChange={formik.handleChange}
                  value={formik.values.address}
                ></textarea>
              </div>
            </div>

            <div className="pt-5 flex gap-5">
              {isEdit ? (
                <button
                  type="submit"
                  className="flex w-[50%] h-[40px] justify-center items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  disabled={isLoading}
                >
                  {isLoading ? <BeatLoader size={11} color="#fff" /> : "Update"}
                </button>
              ) : (
                <button
                  type="submit"
                  className="flex w-[50%] h-[40px] justify-center items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  disabled={isFetching}
                >
                  {isFetching ? <BeatLoader size={11} color="#fff" /> : "Add"}
                </button>
              )}
              <button
                className="flex w-[50%] h-[40px] justify-center items-center rounded-md bg-red-500 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm"
                disabled={isLoading}
                onClick={() => navigate("/")}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default StudentManage;
