import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AuthForm from "../components/AuthPage";

export default function SignupPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <AuthForm isLogin={false} />
      <Footer />
    </div>
  );
}
