import { Box, ButtonBase, TextField } from '@mui/material';
import { useRef } from 'react';

type ImagePickerProps = {
    name?: string
    onChange?: React.ChangeEventHandler<HTMLInputElement>
}

export const ImagePicker: React.FC<ImagePickerProps> = ({ name, onChange }) => {
    const inputRef = useRef<HTMLInputElement>(null);

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