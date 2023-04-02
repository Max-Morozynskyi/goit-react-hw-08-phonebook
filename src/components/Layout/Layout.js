import { AppBar } from "components/AppBar/AppBar"
import { AppCopyright } from "components/AppCopyright/AppCopyright"
import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import { Toaster } from 'react-hot-toast';
import { Preloader } from "components/Preloader/Preloader";


export const Layout = () => {
  return (<>
    <Toaster />
    <AppBar />
    <Suspense fallback={<Preloader />}>
      <Outlet />
    </Suspense>
    <AppCopyright />
  </>)
}