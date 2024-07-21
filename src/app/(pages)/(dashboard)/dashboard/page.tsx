import SignUpForm from "@/layout/auth/sign-up";

export default function SignUp() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center px-4 w-full">
      <div className="absolute inset-0 -z-10 h-full w-full  bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)]  dark:bg-[linear-gradient(to_right,#f0f0f0_0.2px,transparent_0.2px),linear-gradient(to_bottom,#f0f0f0_0.2px,transparent_0.2px)] bg-[size:6rem_4rem]"></div>
      <SignUpForm />
    </main>
  );
}
