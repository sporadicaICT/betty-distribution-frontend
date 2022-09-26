import { CircularProgress } from "@mui/material";
import { LinearProgress } from "@mui/material";

type LoadingScreenProps = {
    progressType: 'circular'|'linear',
    message?:string
}

export const LoadingScreen:React.FC<LoadingScreenProps> = ({ progressType, message }) => {
    return(
        <main>
            <div>
            {
                progressType === 'circular'? <CircularProgress/>
                :progressType === 'linear' ? <LinearProgress/>
                : <CircularProgress/>
            }
            </div>
        </main>
    )
}