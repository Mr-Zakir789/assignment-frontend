import { Routes, Route } from "react-router-dom"
import { Home } from "../home/home"

export const PrivateRoutes = () =>{
    return ( 
        <Routes>
        <Route path ="/" element={<Home/>}/>
        </Routes>
    )
}