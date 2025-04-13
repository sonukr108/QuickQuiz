import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "../Context/Firebase";
import { toast } from "react-toastify";
import { setDoc, doc } from "firebase/firestore";
import googleSigninImg from '../assets/google.webp'
import { useNavigate } from "react-router-dom";

function SignInwithGoogle() {
  const navigate = useNavigate();
  function googleLogin() {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider).then(async (result) => {
      // console.log(result);
      const user = result.user;

      if (result.user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: user.displayName
        });

        // Store username in localStorage
        localStorage.setItem("userName", user.displayName);

        toast.success("User logged in Successfully", {
          position: "top-center",
        });

        setTimeout(() => {
          navigate("/home");
        }, 3000);
      }
    })
  };
  return (
    <div>
      <p className="continue-p">--Or continue with--</p>
      <div
        style={{ display: "flex", justifyContent: "center", cursor: "pointer" }}
        onClick={googleLogin}
      >
        <img src={googleSigninImg} width={"50%"} />
      </div>
    </div>
  );
}
export default SignInwithGoogle;