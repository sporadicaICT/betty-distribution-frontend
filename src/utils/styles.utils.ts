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