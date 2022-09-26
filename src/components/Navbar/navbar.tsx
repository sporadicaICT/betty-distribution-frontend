import Logo from '../../assets/logo.svg';
import styles from './navbar.module.scss';
import { Container, Box } from '@mui/material';
import { Search, PersonOutline, ShoppingCartOutlined } from '@mui/icons-material';

type NavbarProps = {
    signedIn: boolean
}

const boxStyles = {
    display:'flex', 
    alignItems:'center'
}

const containerStyles = {
    ...boxStyles,
    justifyContent: 'space-between'
}

export const Navbar: React.FC<NavbarProps> = ({ signedIn }) => {
    return(
        <nav className={styles.navbar}>
            <Container sx={containerStyles}>
                <Box sx={{...boxStyles, gap:'10px'}}>
                    <div className={styles.navbarBox}>
                        <img src={Logo} alt="Logo"/>
                    </div>
                    <h2 className='header-1'>Betty Distribution</h2>
                </Box>

                <Box sx={{...boxStyles, gap:'10px'}}>
                    <Box sx={{...boxStyles, display: !signedIn?'block':'none'}}>
                        <span className={styles.auth}>Login</span>
                        <span className={styles.auth}>Create Account</span>
                    </Box>

                    <div className={styles.navbarBox}>
                        <Search/>
                    </div>

                    <Box sx={{ display: signedIn?'block':'none' }}>
                        <div className={styles.navbarBox}>
                            <PersonOutline/>
                        </div>
                    </Box>

                    <Box sx={{ display: signedIn?'block':'none' }}>
                        <div className={`${styles.navbarBox} ${styles.cartbox}`}>
                            <ShoppingCartOutlined/>
                            <span>
                                <span>&#8358;</span>
                                6000
                            </span>
                        </div>
                    </Box>
                </Box>
            </Container>
        </nav>
    )
}