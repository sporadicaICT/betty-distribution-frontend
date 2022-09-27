import { Navbar } from "../../components";
import { TextField, Container, useTheme, Button } from "@mui/material";
import Image from '../../assets/successful_purchase.svg';
import styles from '../Login/login.module.scss';
import { Link } from "react-router-dom";
import { buttonStyles } from "../../utils/styles.utils";
import { Google } from "@mui/icons-material";

export const SignUpPage: React.FC = () => {

    const themeColors = useTheme().palette;

    return(
        <main>
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
                            <Button sx={{...buttonStyles, background:themeColors.secondary.main, ":hover": { background:'#000', color:'#fff' } }} variant={"contained"}>
                                <Google/>
                                Sign Up with Google
                            </Button>
                        </div>
                        <div className={styles.or}>
                            <hr/>OR<hr/>
                        </div>
                        <form>
                            <TextField
                                label="Name"
                                type="text"
                                name="name"
                                variant="outlined"
                                placeholder="Enter your full name"
                            />

                            <TextField
                                label="Email"
                                type="email"
                                name="email"
                                variant="outlined"
                                placeholder="Enter your email"
                            />

                            <TextField
                                label="Password"
                                type="password"
                                name="password"
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
        </main>
    )
}