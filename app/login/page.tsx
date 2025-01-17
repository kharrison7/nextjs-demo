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
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    defaultValues: {
      email: "test@email.com",
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
      <form className="login gap-2" onSubmit={handleSubmit(onSubmit)}>
        <input {...register("email")} type="text" placeholder="Email" />
        {errors.email && (
          <div className="text-red-500">{errors.email.message}</div>
        )}
        <input {...register("password")} type="password" placeholder="Password" />
        {errors.password && (
          <div className="text-red-500">{errors.password.message}</div>
        )}
        <button disabled={isSubmitting} type="submit">
          {isSubmitting ? "Loading..." : "Submit"}
        </button>
        {errors.root && <div className="text-red-500">{errors.root.message}</div>}
      </form>
    </div>
  );
};

export default App;