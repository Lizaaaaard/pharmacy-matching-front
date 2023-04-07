import Medicines from "../pages/Medicines";
import About from "../pages/About";
import Login from "../pages/Login";


export const routes = [
    {path:'/search', component:About, exact:true},
    {path:'/medicines', component:Medicines, exact:true},
    {path:'/login', component:Login, exact:true}
]