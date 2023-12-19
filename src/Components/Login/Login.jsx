import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../Firebase/firebase.config";
import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState({});
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const userLoggedIn = result.user;
        setUser(userLoggedIn);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
    console.log(user);
  };
  const handleGithub = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const userLoggedIn = result.user;
        setUser(userLoggedIn);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
    console.log(user);
  };
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className=" container border p-20 rounded mx-auto my-20">
      <div className="text-center">
        {user ? (
          <button
            onClick={handleSignOut}
            className="btn btn-outline btn-neutral"
          >
            Sign Out
          </button>
        ) : (
          <div className="flex justify-center gap-4">
            <button
              onClick={handleGoogleSignIn}
              className="btn btn-outline  btn-error"
            >
              Login with Google
            </button>
            <button
              onClick={handleGithub}
              className="btn btn-outline btn-accent"
            >
              Github Login
            </button>
          </div>
        )}
      </div>
      {user && (
        <div>
          <h3 className="text-2xl font-bold">User : {user.displayName}</h3>
          <h4>UserE-mail : {user.email}</h4>
          <img className="rounded-full" src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Login;
