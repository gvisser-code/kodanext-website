import AuthForm from "@/components/AuthForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center px-4 py-16">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-[#1E2A4A]">Welkom bij KodaNext</h1>
        <p className="text-[#6B7280] mt-2 text-sm">Log in of maak een account om te solliciteren</p>
      </div>
      <AuthForm />
    </div>
  );
}
