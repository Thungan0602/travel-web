import Facebook from "~/assets/images/facebook.svg";
import Google from "~/assets/images/google.svg";
import { Button } from "~/shared/ui/atoms/Button";
import { Input } from "~/shared/ui/atoms/Input";
import z from "zod";
import { useNavigate } from "react-router";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SocialButton } from "~/shared/ui/atoms/SocialButton";


export const RegisterSchema = z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email({
        message: "Please enter a valid email address",
    }),
    password: z.string().min(8, "Password must be at least 8 characters"),
});

export type RegisterSchemaType = z.infer<typeof RegisterSchema>;

export default function Register() {
    const navigate = useNavigate();
    const { 
        register, 
        handleSubmit, 
        formState: { errors }, 
    } = useForm<RegisterSchemaType>({
        resolver: zodResolver(RegisterSchema),
    })

    const onSubmit: SubmitHandler<RegisterSchemaType> = (data) => console.log(data);
    return (
        <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-[#294D81] text-5xl mb-5">Create your account</h1>
          <div className="mt-13 lg:flex gap-4 ">
            <div className="lg:w-1/2">
              <p className="font-bold mb-3">First name </p>
              <Input
                placeholder="Enter your first name "
                {...register("firstName")}
              />
              {errors.firstName && (
                <p className="text-red-500 mt-1">{errors.firstName.message}</p>
              )}
            </div>
            <div className="lg:w-1/2">
              <p className="font-bold mb-3 mt-4 lg:mt-0">Last name</p>
              <Input
                placeholder="Enter your last name"
                {...register("lastName")}
              />
              {errors.lastName && (
                <p className="text-red-500 mt-1">{errors.lastName.message}</p>
              )}
            </div>
          </div>
          <div className="mt-4">
            <p className="font-bold mb-3">Email</p>
            <Input placeholder="Enter your email" {...register("email")} />
            {errors.email && (
              <p className="text-red-500 mt-1">{errors.email.message}</p>
            )}
          </div>
          <div className="mt-4">
            <p className="font-bold mb-3">Password</p>
            <Input
              placeholder="Enter your password"
              type="password"
              {...register("password")}
            />
            {errors.password && (
              <p className="text-red-500 mt-1">{errors.password.message}</p>
            )}
          </div>
          <Button className="py-5 w-full bg-[#3562A6] text-white mt-8" type="submit"> Create account</Button>
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
          <a href="./login" className="text-blue-500">
            {" "}
            Sign In
          </a>{" "}
        </p>
      </div>
    );
}