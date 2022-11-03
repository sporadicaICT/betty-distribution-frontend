import { Button, Typography } from '@mui/material';
import Illustration from '../../assets/404.svg';
import { buttonStyles } from '../../utils/styles.utils';


export const PageNotFound: React.FC = () => {
    return(
        <main className='h-full flex items-center justify-center'>
            <div className='flex items-center justify-center flex-col gap-15 h-100'>
                <img src={Illustration} alt="404" />
                <p>Page not Found</p>

                <Button sx={{...buttonStyles}} href='/'>Go to Home</Button>
            </div>
        </main>
    )
}