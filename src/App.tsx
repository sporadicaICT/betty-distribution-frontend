import { lazy, useState, createContext, useMemo } from 'react'
import './App.scss'
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import { CartItems } from './mock/cart';


import { LoginPage, HomePage, UpdateProfilePage, CartPage, ProductPage, CategoriesPage, OrderPage } from './pages';

//Lazy Loaded Pages
const SignUpPage = lazy(() => import('./pages').then(m => ({ default: m.SignUpPage })))
const AdminPage = lazy(() => import('./pages').then(m => ({ default: m.AdminPage })))
const ForgotPassPage = lazy(() => import('./pages').then(m => ({ default: m.ForgotPassPage })))
const ConfirmResetPage = lazy(() => import('./pages').then(m => ({default: m.ConfirmResetPage })))
//const UpdateProfilePage = lazy(() => import('./pages').then(m => ({ default: m.UpdateProfilePage })))

 
export const Context = createContext<any>(null);

function App() {
  const [cartData, setCartData] = useState(CartItems);

  // const values = useMemo(() => ({
  //   cartData, setCartData
  // }), [cartData]);

  const values = [cartData, setCartData];

  const [authenticated, setAuth] = useState(true);
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
          <Route path="/order" element={<OrderPage/>} />
        </Routes>
      </ThemeProvider>
    </Context.Provider>
  )
}



export default App
