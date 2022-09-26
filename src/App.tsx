import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';

import { LoginPage } from './pages'
function App() {
  const [authenticated, setAuth] = useState(false);
  const theme = createTheme({
    palette: {
      primary: {
        main: '#F27F7E', //Red
      },
      secondary: {
        main: '#D9D9D9' //Grey
      },
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path='/' element={authenticated ? <HomePage/> : <LoginPage/>}  />
      </Routes>
    </ThemeProvider>
  )
}

function HomePage(){
  return(<div>Home page</div>)
}

export default App
