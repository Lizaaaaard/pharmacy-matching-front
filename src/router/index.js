import Medicines from "../pages/Medicines";
import Search from "../pages/Search";
import Login from "../pages/Login";
import Pharmacies from "../pages/Pharmacies";


export const routes = [
    {path:'/search', component:Search, exact:true},
    {path:'/medicines', component:Medicines, exact:true},
    {path:'/login', component:Login, exact:true},
    {path:'/pharmacies', component:Pharmacies, exact:true}
]