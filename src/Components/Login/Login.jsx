import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../Firebase/firebase.config";

const Login = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user)
      })
      .catch(error => {
        console.log("error", error.message)
      });
  };
  return (
    <div className="w-[fit-content] hover:border-error hover:bg-slate-700 duration-1000 bg-cyan-900 border p-20 rounded mx-auto my-20">
      <button
        onClick={handleGoogleSignIn}
        className="btn btn-outline btn-error"
      >
        Login with Google
      </button>
    </div>
  );
};

export default Login;
