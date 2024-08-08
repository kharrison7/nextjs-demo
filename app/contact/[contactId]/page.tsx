'use client'
import { zodResolver } from "@hookform/resolvers/zod";
// Need to run the FormFields: https://github.com/vercel/next.js/discussions/59483
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { useParams } from 'next/navigation';
import './index.css'

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

type FormFields = z.infer<typeof schema>;

const App = ( ) => {
  const {
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

  const params = useParams<{ contactId: string; }>()

  return (
    <div className="login-container">
      <h1  className="contact-id">CONTACT ID PAGE: {params.contactId}</h1>
    </div>
  );
};

export default App;