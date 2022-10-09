import { SxProps } from "@mui/material"

export const buttonStyles: SxProps = {
    borderRadius: '15px',
    width: '100%',
    height: 58,
    display: 'flex',
    alignItems:'center',
    justifyContent: 'center',
    gap: '1rem',
    boxShadow: 0,
    textTransform: 'capitalize',
    fontFamily: "Inter, sans-serif",

    ":hover": {
        boxShadow: 0
    }
} 

export const whiteButtonText: SxProps = {
    color: '#fff',
    fontWeight: 600
}

export const backdropStyle: SxProps = {
    display: 'flex',
    alignItems: 'center'
}

export const modalStyle: SxProps = {
    background: '#fff',
    border: 1.5,
    borderColor: '#121212',
    width: '50%',
    margin: '0 auto'
}