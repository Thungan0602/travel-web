import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import Facebook from "~/assets/images/facebook.svg";
import Google from "~/assets/images/google.svg";
import { Button } from "~/shared/ui/atoms/Button";
import { Input } from "~/shared/ui/atoms/Input";

import { useNavigate } from "react-router";
import { SocialButton } from "~/shared/ui/atoms/SocialButton";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export type LoginSchemaType = z.infer<typeof LoginSchema>;

export default function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit: SubmitHandler<LoginSchemaType> = (data) =>  console.log(data);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-[#294D81] text-5xl mb-5">Login to your account</h1>
        <div className="mt-13">
          <p className="font-bold mb-3">Email</p>
          <Input placeholder="Enter your email" {...register("email")} />
          {errors.email && (
            <p className="text-red-500 mt-4">{errors.email.message}</p>
          )}
        </div>
        <div className="mt-6">
          <p className="font-bold mb-3">Password</p>
          <Input
            placeholder="Enter your password"
            type="password"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-red-500 mt-4">{errors.password.message}</p>
          )}
        </div>
        <p className="underline font-bold mt-6 mb-8 cursor-pointer" onClick={() => navigate("/change-password")} >Forgot Password</p>
        <Button className="py-5 w-full bg-[#3562A6] text-white" type="submit"> Sign In</Button>
      </form>
      <p className="text-center mt-8">OR</p>
      <div className="flex gap-4 mt-8 w-full lg:justify-center ">
        <SocialButton icon={Google} className="w-1/2" variant="default">
          Sign in with Google
        </SocialButton>
        <SocialButton icon={Facebook} className="w-1/2" variant="primary">
          Sign in with Facebook
        </SocialButton>
      </div>
      <p className="font-medium text-center lg:mt-8 mt-6 pb-5">
        Don't have an account?
        <a href="./register" className="text-blue-500">
          {" "}
          Sign Up
        </a>{" "}
      </p>
    </div>
  );
}