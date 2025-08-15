import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AuthForm from "../components/AuthForm";

export default function LoginPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <AuthForm isLogin={true} />
      <Footer />
    </div>
  );
}
