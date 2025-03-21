import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from "../../firebase/firebase.init";
import { useState } from "react";



const Login = () => {
  const provider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const [user, setUser] = useState(null)
  const handleGoogleSignIn = () =>{
    signInWithPopup(auth, provider)
    .then(result =>{
      console.log(result.user);
      setUser(result.user)
    })
    .catch(error =>{
      console.log('ERROR', error);
    })
  }

  const handleGithubSignIn = () =>{
    signInWithPopup(auth, githubProvider)
    .then(result =>{
      console.log(result.user);
      setUser(result.user)
    })
    .catch(error =>{
      console.log("Github Error", error);
      
    })
  }
  const handleSignOut = () =>{
    signOut(auth)
    .then(()=>{
      console.log('sign out successful');
      setUser(null)
    })
    .catch(error =>{
      console.log('Signout error', error);
      
    })
  }
  return (
    <div>
      {
        user ? <button onClick={handleSignOut}>Sign Out</button> : 
        <>
        <button onClick={handleGoogleSignIn} >Login With Google</button>
        <button onClick={handleGithubSignIn}>Login With Github</button>
        </> 
        
      }
     
      
      {
        user && <div>
          <h4>{user.displayName}</h4>
          <p>Email: {user.email}</p>
          <img src={user.photoURL} alt="" />
        </div>
      }
    </div>
  );
};

export default Login;