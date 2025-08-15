import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AuthForm from "../components/AuthForm";

export default function SignupPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <AuthForm isLogin={false} />
      <Footer />
    </div>
  );
}
