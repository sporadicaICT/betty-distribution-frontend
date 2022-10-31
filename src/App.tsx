import { lazy, useState, createContext, useMemo, useEffect } from 'react'
import './App.scss'
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import { CartItems } from './mock/cart';
import { auth, firestore } from "./utils/firebase.config";


import { LoginPage, HomePage, UpdateProfilePage, CartPage, ProductPage, CategoriesPage, PageNotFound } from './pages';
import { AppDataContext } from './contexts/App';
import { AppContextType } from './types';

//Lazy Loaded Pages
const SignUpPage = lazy(() => import('./pages').then(m => ({ default: m.SignUpPage })))
const AdminPage = lazy(() => import('./pages').then(m => ({ default: m.AdminPage })))
const ForgotPassPage = lazy(() => import('./pages').then(m => ({ default: m.ForgotPassPage })))
const ConfirmResetPage = lazy(() => import('./pages').then(m => ({default: m.ConfirmResetPage })))
//const UpdateProfilePage = lazy(() => import('./pages').then(m => ({ default: m.UpdateProfilePage })))

 
export const Context = createContext<any>(null);

function AppData(props:any){
  const [appData, setAppData] = useState(null)
  const value = {
    appData: appData,
    setAppData: setAppData
  }
  
  return(
    <AppDataContext.Provider value={value}>
      { props.children }
    </AppDataContext.Provider>
  )
}

function App() {
  const [cartData, setCartData] = useState(CartItems);

  // const values = useMemo(() => ({
  //   cartData, setCartData
  // }), [cartData]);

  const values = [cartData, setCartData];

  const [authenticated, setAuth] = useState(true); //Change this to auth.currentUser ? true : false
  const theme = createTheme({
    palette: {
      primary: {
        light: '#F4AAA9',
        main: '#F27F7E', //Red
      },
      secondary: {
        main: '#D9D9D9' //Grey
      },
    }
  })

  useEffect(() => {
    //const unsubsribe = auth.onAuthStateChanged()
  }, [])

  return (
    <Context.Provider value={values}>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path='/' element={authenticated ? <HomePage/> : <LoginPage/>}  />
          <Route path="/sign-up" element={<SignUpPage/>} />
          <Route path="/admin" element={<AdminPage/>} />
          <Route path="/update-profile" element={<UpdateProfilePage/>} />
          <Route path="/forgot" element={<ForgotPassPage/>} />
          <Route path="/reset" element={<ConfirmResetPage/>} />
          <Route path="/cart" element={<CartPage/>} />
          <Route path="/categories" element={<CategoriesPage/>} />
          <Route path="/product" element={<ProductPage/>} />
          <Route path="/*" element={<PageNotFound/>} />
        </Routes>
      </ThemeProvider>
    </Context.Provider>
  )
}



export default App
