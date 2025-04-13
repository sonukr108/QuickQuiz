import React from "react";
import { googleSignIn } from "../Context/Firebase"; // Import the function
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import googleSigninImg from '../assets/google.webp';

function SignInwithGoogle() {
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    const { success, user, message } = await googleSignIn();

    if (success) {
      toast.success("User logged in with Google successfully!", {
        position: "top-center",
      });
      
      // Store user details in localStorage
      localStorage.setItem("userName", user.displayName);

      // Redirect to home page after successful login
      setTimeout(() => {
        navigate("/home");
      }, 3000);
    } else {
      toast.error(message, {
        position: "top-center",
      });
    }
  };
  return (
    <div>
      <p className="continue-p">--Or continue with--</p>
      <div
        style={{ display: "flex", justifyContent: "center", cursor: "pointer" }}
        onClick={handleGoogleSignIn}
      >
        <img src={googleSigninImg} width={"50%"} />
      </div>
    </div>
  );
}
export default SignInwithGoogle;