import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from 'react-router-dom';

function Root() {
  return (
    <>
    <Navbar></Navbar>
    <Outlet></Outlet>
    <Footer></Footer>
    </>
  )
}

export default Root
