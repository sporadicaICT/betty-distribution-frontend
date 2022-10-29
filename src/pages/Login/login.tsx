import { Navbar } from "../../components";
import { TextField, Container, useTheme, Button, Snackbar } from "@mui/material";
import Image from '../../assets/user_groceries.svg';
import styles from './login.module.scss';
import { Link } from "react-router-dom";
import { buttonStyles } from "../../utils/styles.utils";
import { Google } from "@mui/icons-material";

//Firebase and React hook form Imports
import { signInWithEmailAndPassword } from "firebase/auth";
import { onSnapshot, getDocs, query, doc, collection, DocumentSnapshot } from "firebase/firestore";
import { auth, firestore } from "../../utils/firebase.config";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AppContextType, User } from "../../types";
import { AppDataContext } from "../../contexts/App";

export const LoginPage: React.FC = () => {

    const { setAppData, appData } = useContext(AppDataContext)
    const { success, error } = useTheme().palette

    const getUserDoc = async(user_id: string) => {
        const ref = doc(firestore, 'users', user_id)
        let userDoc: User|any
        onSnapshot(ref, {
            next: ((snapshot) => {
                userDoc = snapshot.data()
            })
        })
        setAppData({ ...appData, currentUser: userDoc })
        return userDoc
    }

    //Function to get User Saved Items
    const getSavedItemsCollection = async (user_id: string) => {
        const ref = collection(firestore, 'user_products', user_id, 'saved_items')
        let savedItemsCollection: any = []
        onSnapshot(ref, {
            next: ((snapshot) => {
                snapshot.forEach(doc => {
                    if(!doc.exists()) {
                        savedItemsCollection = null
                        return
                    }
                    savedItemsCollection = [...savedItemsCollection, doc.data()]
                })
            })
        })
        setAppData({ ...appData, savedItems: savedItemsCollection })
        return savedItemsCollection

    }

    //Function to get Users Orders
    const getOrdersCollection = async (user_id: string) => {
        const ref = collection(firestore, 'user_products', user_id, 'orders')
        let ordersCollection: any = []
        onSnapshot(ref, {
            next: ((snapshot) => {
                snapshot.forEach(doc => {
                    if(!doc.exists()) {
                        ordersCollection = null
                        return
                    }
                    ordersCollection = [...ordersCollection, doc.data()]
                })
            })
        })
        setAppData({ ...appData, orders: ordersCollection })
        return ordersCollection

    }

    //Function to get Users Cart
    const getCartCollection = async (user_id: string) => {
        const ref = collection(firestore, 'user_products', user_id, 'cart')
        let cartCollection: any = []
        onSnapshot(ref, {
            next: ((snapshot) => {
                snapshot.forEach(doc => {
                    if(!doc.exists()) {
                        cartCollection = null
                        return
                    }
                    cartCollection = [...cartCollection, doc.data()]
                })
            })
        })
        setAppData({ ...appData, cart: cartCollection })
        return cartCollection

    }


    const { register, handleSubmit, getValues } = useForm({
        defaultValues: {
            email: '',
            password: ''
        }
    })

    const [toast, setToast] = useState<{
        open: boolean,
        color?: string,
        text?: string
    }>({open: false})

    const themeColors = useTheme().palette;

    const login = async () => {
        const { email, password } = getValues();
        await signInWithEmailAndPassword(auth, email, password)
        .then(async(value) => {
            const { uid } = value.user;

            Promise.all([
                await getUserDoc(uid), 
                await getSavedItemsCollection(uid),
                await getOrdersCollection(uid),
                await getCartCollection(uid)
            ])

            /*
            const currentAppData: AppContextType = {
                currentUser: await getUserDoc(uid),
                savedItems: await getSavedItemsCollection(uid),
                orders: await getOrdersCollection(uid),
                cart: await getCartCollection(uid)
            }
            setAppData(currentAppData)
            */
        })
        .then(() => setToast({ open: true, text: 'You are now logged in', color: success.main }))
        .catch((err) => setToast({ open: true, text: err.code, color: error.main }))

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
                            <h2 className="header-1">Sign In</h2>
                            <p>
                                Don't have an account? <Link to="/sign-up">Sign up here</Link>
                            </p>
                            <Button sx={{...buttonStyles, background:themeColors.secondary.main }} variant={"contained"}>
                                <Google/>
                                Sign In with Google
                            </Button>
                        </div>
                        <div className={styles.or}>
                            <hr/>OR<hr/>
                        </div>
                        <form onSubmit={handleSubmit(login)}>
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

                            <Link to="/forgot">
                                <Button sx={buttonStyles}>
                                    Forgot Password?
                                </Button>
                            </Link>
                            <Button
                            type="submit"
                                variant="contained"
                                sx={{...buttonStyles, color:'#fff'}}
                            >
                                Login
                            </Button>
                        </form>
                    </div>

                </Container>
            </div>

            <Snackbar 
                open={toast.open}
                message={toast.text}
                color={toast.color}
                autoHideDuration={2000}
                onClose={() => setToast({ open:false })}
            />
        </>
    )
}