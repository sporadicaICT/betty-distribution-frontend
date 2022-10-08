import { Navbar } from "../../components";
import { TextField, Container, useTheme, Button } from "@mui/material";
import Image from '../../assets/reset-email.svg';
import styles from '../Login/login.module.scss';
import { buttonStyles } from "../../utils/styles.utils";

export const ConfirmResetPage: React.FC = () => {

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
                <Container
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <div>
                        <h1 className="header-1">Check Your Email</h1>
                    </div>
                    <p style = {{color: '#595959', fontWeight: "bolder"}}>A reset email has been sent to</p>
                    <div>
                        <p>Didn't receive email?</p>
                        <Button
                            sx={{...buttonStyles, margin: '3rem 0 5rem 0', fontWeight: 'bolder', position: 'relative', bottom: '3.5rem'}}
                        >
                            Click to resend
                        </Button>
                    </div>

                </Container>
            </div>
        </main>
    )
}