import { Navbar } from "../../components";
import { TextField, Container, useTheme, Button, Snackbar } from "@mui/material";
import Image from '../../assets/successful_purchase.svg';
import styles from '../Login/login.module.scss';
import { Link, useNavigate } from "react-router-dom";
import { buttonStyles } from "../../utils/styles.utils";
import { Google } from "@mui/icons-material";

//Firebase and React hook form Imports
import { createUserWithEmailAndPassword, GoogleAuthProvider, UserCredential, signInWithPopup } from "firebase/auth";
import { setDoc, onSnapshot, getDocs, query, doc, collection, DocumentSnapshot } from "firebase/firestore";
import { auth, firestore } from "../../utils/firebase.config";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AppContextType, User } from "../../types";
import { AppDataContext } from "../../contexts/App";
import { async } from "@firebase/util";
import { makeid } from "../../helpers";


export const SignUpPage: React.FC = () => {
    
    const GoogleAuth = new GoogleAuthProvider();
    const themeColors = useTheme().palette;
    const navigate = useNavigate();

    const { setAppData } = useContext(AppDataContext);
    const { success, error } = useTheme().palette;

    const { register, handleSubmit, getValues } = useForm({
        defaultValues: {
            email: '',
            password: '',
            name: '',
        }
    });

    const [toast, setToast] = useState<{
        open: boolean,
        color?: string,
        text?: string
    }>({open: false})


    //Create User Document in Firestore
    const setUserDoc = async(value:UserCredential) => {
        const { user } = value;
        const { email, name } = getValues();

        const ref = doc(firestore, 'users', user.uid)
        let userDoc: User = {
            id: makeid(15),
            email: email,
            name: name,
            phone_number: null,
            still_exists: true,
            user_delivery_address: null
        }
        const response = await setDoc(ref, userDoc)
        .then((value) => { return userDoc })
        .catch(() => {return null})
        return response
    }

    //Email and Password Sign Up
    const signUp = async () => {
        const { email, password, name } = getValues();
        await createUserWithEmailAndPassword(auth, email, password)
        .then(async(value) => {
            const currentAppData: AppContextType = {
                currentUser: await setUserDoc(value),
                savedItems: null,
                orders: null,
                cart: null
            }
            setAppData(currentAppData)
            setToast({open: true, color: success.main, text: 'Account Created Successfully'})
        })
        .catch((err) => setToast({open: true, color: error.main, text: err.code}))
    }

    //Google Sign Up
    const googleSignUp = async() => {
        await signInWithPopup(auth, GoogleAuth)
        .then(async(value) => {

            const currentAppData: AppContextType = {
                currentUser: await setUserDoc(value),
                savedItems: null,
                orders: null,
                cart: null
            }
            setAppData(currentAppData)
        })
        .then(() =>  setToast({ open: true, color: success.main, text: 'Signed up sucessfully!' }))
        .catch((err) => setToast({ open: true, color: error.main, text: err.code }))
    }



    return(
        <>
            <Navbar signedIn={false}/>

            <div className={styles.main}>
                <Container 
                    sx={{ 
                        background: themeColors.secondary.main, 
                        borderRadius: '30px 0 0 30px',
                        display: 'flex',
                        alignItems: 'flex-end',
                        justifyContent: 'flex-end',
                        padding: 0
                    }}
                >
                    <img src={Image} alt="User picking groceries"/>
                </Container>
                <Container>
                    <div>
                        <div className={styles.intro}>
                            <h2 className="header-1">Create Account</h2>
                            <p>
                                Already have an account? <Link to="/sign-up">Sign in</Link>
                            </p>
                            <Button onClick={googleSignUp} sx={{...buttonStyles, background:themeColors.secondary.main, ":hover": { background:'#000', color:'#fff' } }} variant={"contained"}>
                                <Google/>
                                Sign Up with Google
                            </Button>
                        </div>
                        <div className={styles.or}>
                            <hr/>OR<hr/>
                        </div>
                        <form onSubmit={handleSubmit(signUp)}>
                            <TextField
                                label="Name"
                                type="text"
                                {...register('name')}
                                variant="outlined"
                                placeholder="Enter your full name"
                            />

                            <TextField
                                label="Email"
                                type="email"
                                {...register('email')}
                                variant="outlined"
                                placeholder="Enter your email"
                            />

                            <TextField
                                label="Password"
                                type="password"
                                {...register('password')}
                                variant="outlined"
                                placeholder="Enter your password"
                            />

                            <Button
                                type="submit"
                                variant="contained"
                                sx={{...buttonStyles, color:'#fff'}}
                            >
                                Sign Up
                            </Button>
                        </form>
                    </div>

                </Container>
            </div>

            <Snackbar 
                open={toast.open}
                autoHideDuration={2000}
                message={toast.text}
                onClose={() => setToast({open: false})}
                color={toast.color}
            />
        </>
    )
}