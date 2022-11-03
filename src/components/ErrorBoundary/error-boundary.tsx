import Illustration from '../../assets/something-went-wrong.svg';
import { Button } from '@mui/material';
import { buttonStyles } from '../../utils/styles.utils';
import { Component, ReactNode } from 'react';


export class SomethingWentWrong extends Component<{}, { hasError: boolean }> {
    constructor(props:any){
        super(props);

        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error:any){
        return { hasError: true }
    }
    
    render(): ReactNode {
        if(this.state.hasError){
            return(
                <main className='h-full flex items-center justify-center'>
                    <div className='flex items-center justify-center flex-col gap-15 h-100'>
                        <img src={Illustration} alt="404" />
                        <p>Something went wrong</p>
        
                        <Button sx={{...buttonStyles}} href='/'>Go to Home</Button>
                    </div>
                </main>
            )        
        }

        return null
    }
}