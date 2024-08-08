'use client'
import { zodResolver } from "@hookform/resolvers/zod";
// Need to run the FormFields: https://github.com/vercel/next.js/discussions/59483
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import './index.css'

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

type FormFields = z.infer<typeof schema>;

const App = () => {
  const {
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormFields> = async (data: any) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(data);
    } catch (error) {
      setError("root", {
        message: "This email is already taken",
      });
    }
  };

  return (
    <div className="login-container">
      <h1>CONTACT</h1>
      <form className="login gap-2" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Email" />
        {/* {errors.email && (
          <div className="text-red-500">{errors.email.message}</div>
        )} */}
        <input type="userName" placeholder="User Name" />
        {/* {errors.userName && (
          <div className="text-red-500">{errors.userName.message}</div>
        )} */}
        <button disabled={isSubmitting} type="submit">
          {isSubmitting ? "Submitting Contact..." : "Add Contact"}
        </button>
        {errors.root && <div className="text-red-500">{errors.root.message}</div>}
    //   </form>
    </div>
  );
};

export default App;