import React from "react";
// import Logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRegisterActionMutation } from "../../app/api/auth/authApi";
import { AuthNoti } from "../../components/noti/AuthNoit";
import { BeatLoader } from "react-spinners";

const SignUpSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too short!")
    .max(50, "Too long!")
    .required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
  password_confirmation: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Password confirmation is required"),
});

const SignUpPage = () => {
  const [useSignUp, { isLoading, isError }] = useRegisterActionMutation();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
    },
    validationSchema: SignUpSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const res = await useSignUp(values);
        if (res?.data?.success) {
          formik.resetForm();
          AuthNoti(res?.data?.message);
          navigate("/login");
        } else {
          AuthNoti(res?.error?.data?.message, "error");
        }
      } catch (error) {
        console.log(error);
      }
      
    },
  });
  return (
    <>
      <div className="flex min-h-screen flex-1 flex-col justify-center items-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          {/* <img className="mx-auto h-20 w-auto" src={Logo} alt="Your Company" /> */}
          <h2 className="mt-5 text-center text-2xl font-semibold leading-9 tracking-tight text-gray-900">
            Create your new account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-2" onSubmit={formik.handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Your Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className=" text-red-500 text-sm">
                    {formik.errors.name}
                  </div>
                ) : null}
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
                {formik.touched.email && formik.errors.email ? (
                  <div className=" text-red-500 text-sm">
                    {formik.errors.email}
                  </div>
                ) : null}
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="password"
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className=" text-red-500 text-sm">
                    {formik.errors.password}
                  </div>
                ) : null}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Confirm Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password_confirmation"
                  name="password_confirmation"
                  type="password"
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400"
                  onChange={formik.handleChange}
                  value={formik.values.password_confirmation}
                />
                {formik.touched.password_confirmation &&
                formik.errors.password_confirmation ? (
                  <div className=" text-red-500 text-sm">
                    {formik.errors.password_confirmation}
                  </div>
                ) : null}
              </div>
            </div>

            <div className="pt-5">
              <button
                type="submit"
                className="flex w-full h-[40px] items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                disabled={isLoading}
              >
                {isLoading ? <BeatLoader size={11} color="#fff" /> : "Sign up"}
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            You have already an account?{" "}
            <a
              href="#"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 ms-5"
              onClick={() => navigate("/login")}
            >
              Login
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
