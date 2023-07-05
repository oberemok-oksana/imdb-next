"use client";
import { useForm } from "react-hook-form";
import styles from "./Form.module.css";

const LogIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      phone: "",
    },
  });
  return (
    <>
      <h1>Login</h1>
      <form
        className={styles.form}
        onSubmit={handleSubmit((data) => console.log(data))}
      >
        <input
          className={styles.input}
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "It should be a valid email address",
            },
          })}
          placeholder="Your email"
        />
        <p className={styles.error}>{errors.email?.message}</p>
        <input
          className={styles.input}
          {...register("password", {
            required: "This field is required",
            minLength: { value: 8, message: "Min length is 8" },
          })}
          placeholder="Your password"
        />
        <p className={styles.error}>{errors.password?.message}</p>

        <input className={styles.submit} type="submit" />
      </form>
    </>
  );
};

export default LogIn;
