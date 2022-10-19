import { Box, ButtonBase, TextField } from '@mui/material';
import { useRef } from 'react';

type ImagePickerProps = {
    name?: string
    onChange?: React.ChangeEventHandler<HTMLInputElement>
}

export const ImagePicker: React.FC<ImagePickerProps> = ({ name, onChange }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    let base64String:any = '';

    //Convert Image from input[type="file"] to base64 string
    const toBase64 = (file:any) => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });

    const getImage = async (event:React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.item(0)
        base64String = await toBase64(file)
    }
    

    return(
        <Box sx={{ width:'100%', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
            <TextField variant='standard' sx={{border:0}}/>

            <input
                type="file"  
                name={name} 
                accept="image/*"
                title="Select Image"
                onChange={onChange}
            />
        </Box>
    )
}