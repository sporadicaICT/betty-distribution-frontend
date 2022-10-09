import { lazy, useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';

import { LoginPage, HomePage } from './pages';

//Lazy Loaded Pages
const SignUpPage = lazy(() => import('./pages').then(m => ({default: m.SignUpPage})))
const AdminPage = lazy(() => import('./pages').then(m => ({default: m.AdminPage})))
const ForgotPassPage = lazy(() => import('./pages').then(m => ({ default: m.ForgotPassPage })))
const ConfirmResetPage = lazy(() => import('./pages').then(m => ({default: m.ConfirmResetPage})))


function App() {
  const [authenticated, setAuth] = useState(true);
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
        <Route path="/sign-up" element={<SignUpPage/>} />
        <Route path="/admin" element={<AdminPage/>} />
        <Route path="/forgot" element={<ForgotPassPage/>} />
        <Route path="/reset" element={<ConfirmResetPage/>} />
      </Routes>
    </ThemeProvider>
  )
}



export default App
