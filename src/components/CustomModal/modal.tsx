import { Box, Modal } from "@mui/material";
import { modalStyle, backdropStyle } from "../../utils/styles.utils";

type CustomModalProps = {
    isOpen: boolean,
    dismiss: any, //Called when the modal is dismissed
    children: React.ReactNode
}

export const CustomModal: React.FC<CustomModalProps> = ({ isOpen, dismiss, children }) => {
    return(
        <Modal sx={backdropStyle} open={isOpen} onClose={dismiss}>
            <Box sx={{...modalStyle, padding: '40px'}}>
                { children }
            </Box>
        </Modal>
    )
}