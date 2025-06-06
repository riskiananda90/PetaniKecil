import { BorderBeam } from "@/components/magicui/border-beam";
import MouseLight from "@/components/mouseLight";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { EyeClosedIcon, EyeIcon, Lock, Mail } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// sk_dqxx2az9_m9kDgraxaxG2wncM8IYOzoKh
// granite cpd-apikey-IBMid-692000TANK-2025-05-26T07:22:59Z
// gemini AIzaSyBx8GOo6IyGZMbSRwAscM9H8mmb47Z8GL0
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const HandleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setisLoading(true);
    setTimeout(() => {
      setisLoading(false);
      navigate("/Dashboard");
    }, 2000);
  };
  return (
    <MouseLight
      id="login"
      bgColor="bg-charcoal"
      glowColor="rgba(255,135,50,0.08)"
    >
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-charcoal to-charcoal/90">
        <div className=" w-full max-w-md px-4 animate-fade-in">
          <Link to={"/"} className=" flex items-center justify-center mb-8">
            <div className=" w-10 h-10 bg-coral rounded-lg flex items-center justify-center">
              <span className=" text-bold text-white text-xl">HD</span>
            </div>
            <span className="ml-2 text-2xl font-bold gradient-text">
              Harapan Digital
            </span>
          </Link>
          <Card className="relative border-gray-500">
            <BorderBeam duration={8} size={200} />
            <CardHeader className="text-center">
              <CardTitle className=" text-2xl text-primary-foreground">
                Selamat Datang
              </CardTitle>
              <CardDescription className="text-primary-foreground  ">
                Masuk untuk mengakses Zerocode kamu
              </CardDescription>
            </CardHeader>
            <form onSubmit={HandleSubmit}>
              <CardContent className="text-primary-foreground ">
                <div className="space-y-4">
                  <label className="text-sm font-medium text-cream/80 block">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    <Input
                      type="email"
                      placeholder="Masukan email..."
                      value={email}
                      className="pl-10 bg-charcoal/50 border-gray-500 text-cream placeholder:text-cream/30 focus:border-gray-500"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <label className="text-sm font-medium text-cream/80 block">
                    Password
                  </label>
                  <div className="relative ">
                    <Lock className=" absolute left-3 top-2 h-5 w-5 text-gray-400" />
                    <Input
                      type="password"
                      placeholder="*******"
                      value={password}
                      className="pl-10 bg-charcoal/50 border-gray-500 text-cream placeholder:text-cream/30 focus:border-coral"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                      type="button"
                      className=" absolute right-3 top-2 text-gray-400 hover:text-cream"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeIcon size={20} />
                      ) : (
                        <EyeClosedIcon size={20} />
                      )}
                    </button>
                  </div>
                </div>
                <div className=" flex items-center justify-between mt-1">
                  <div className=" flex items-center space-x-2 ">
                    <input
                      type="checkbox"
                      id="remember"
                      className=" rounded-full border-cream/20 text-coral focus:ring-coral/20 accent-amber-600"
                    />
                    <label
                      htmlFor="remember"
                      className="text-sm text-cream/70 font-medium"
                    >
                      Ingat aku
                    </label>
                  </div>
                  <Link
                    to="/forgot-password"
                    className="text-sm text-coral hover:text-coral/80 font-medium"
                  >
                    Lupa password?
                  </Link>
                </div>
              </CardContent>
              <CardFooter className=" flex flex-col text space-y-2 mt-2">
                <Button
                  type="submit"
                  className="w-full bg-coral hover:bg-coral/90 text-white transition-all duration-200"
                  disabled={isLoading}
                >
                  {isLoading ? "Signing In..." : "Sign In"}
                </Button>
                <p className="text-cream/70 text-sm text-center text-primary-foreground">
                  Don't have an account?{" "}
                  <Link
                    to="/register"
                    className="text-coral hover:text-coral/80"
                  >
                    Register
                  </Link>
                </p>
              </CardFooter>
            </form>
          </Card>
        </div>
      </div>
    </MouseLight>
  );
};

export default Login;


// tyjakvxrqarmgoxscvvw
// SUPABASE_URL = https://tyjakvxrqarmgoxscvvw.supabase.co
// SUPABASE_ANON_KEY
// api key : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR5amFrdnhycWFybWdveHNjdnZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg3NzE4NjYsImV4cCI6MjA2NDM0Nzg2Nn0.qveZsKbFKSOZnzhan_69QetyLgprJUtT17GlTu_97o0