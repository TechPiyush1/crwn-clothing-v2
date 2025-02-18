import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';


const Authorize =()=>{
    const logGoogleUser = async() =>
    {
        const {user}=await signInWithGooglePopup();
        const userDocRef=await createUserDocumentFromAuth(user);
    }
    return(
    <div>
      <h1>Welcome and Sign-in</h1>
      <button onClick={logGoogleUser}>
        Sign in with Google Popup
      </button>
    </div>
    );

}

export default Authorize;