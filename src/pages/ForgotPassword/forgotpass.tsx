import { Navbar } from "../../components";
import { TextField, Container, useTheme, Button } from "@mui/material";
import Image from '../../assets/forgot-password.svg';
import styles from '../Login/login.module.scss';
import { Link } from "react-router-dom";
import { buttonStyles } from "../../utils/styles.utils";

export const ForgotPassPage: React.FC = () => {

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
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: 0
                    }}
                >
                    <img src={Image} alt="User forgot password"/>
                </Container>
                <Container>
                    <div>
                        <div className={styles.intro}>
                            <h2 className="header-1">Forgot Password</h2>
                            <p style = {{color: '#595959', fontWeight: "bolder"}}>
                                A Reset link will be sent to your email
                            </p>
                        </div>
                        <form style = {{marginTop: '5rem'}}>
                            <TextField
                                label="Email"
                                type="email"
                                name="email"
                                variant="outlined"
                                placeholder="Enter your email"
                            />
                            <Link to="/reset">
                                <Button
                                    variant="contained"
                                    sx={{...buttonStyles, color:'#fff', margin: '3rem 0 5rem 0', fontWeight: 'bolder'}}
                                >
                                    Forgot Password?
                                </Button>
                            </Link>
                            {/* <p style = {{fontWeight: "bolder", textAlign: 'center'}}>
                                Haven't gotten any mail yet? 
                                <Button style={{display: 'inline'}} sx={buttonStyles}>Resend</Button>
                            </p> */}
                        </form>
                    </div>

                </Container>
            </div>
        </main>
    )
}