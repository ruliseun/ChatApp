import { auth, provider } from '../firebase-config.js'
import { signInWithPopup } from 'firebase/auth'
import Button from "./Button";

import Cookies from 'universal-cookie';
import { AuthStyle } from '../styles/AuthStyle.js';

const cookies = new Cookies();

export const Auth = ({setIsAuth}) => {

    const signInWithGoogle = async () => {
        
        try{
            const userResult = await signInWithPopup(auth, provider);
            cookies.set('auth-token', userResult.user.refreshToken)
            setIsAuth(true);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <AuthStyle>
            <p>Continue with Google</p>
            <Button name={'Sign in with Google'} clickAction={signInWithGoogle} />
        </AuthStyle>
    );
};