import { Box, ButtonBase, TextField } from '@mui/material';
import { useRef } from 'react';

type ImagePickerProps = {
    name?: string
    onChange?: React.ChangeEventHandler<HTMLInputElement>
}

export const ImagePicker: React.FC<ImagePickerProps> = ({ name, onChange }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    return(
        <Box>
            <Box>
                <TextField 
                    disabled 
                    label="Attachment" 
                    variant='standard'
                />
            </Box>
            <ButtonBase component="label">
                <input 
                    ref={inputRef}
                    type="file"  
                    name={name} 
                    accept="image/*"
                    
                    title="Select Image"
                    onChange={onChange}
                />
            </ButtonBase>
        </Box>
    )
}