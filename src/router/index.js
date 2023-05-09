import Medicines from "../pages/Medicines";
import Search from "../pages/Search";
import Login from "../pages/Login";
import Pharmacies from "../pages/Pharmacies";
import Register from "../pages/Register";
import Cart from "../pages/Cart";
import Profile from "../pages/Profile";


export const routes = [
    {path:'/search', component:Search, exact:true},
    {path:'/medicines', component:Medicines, exact:true},
    {path:'/login', component:Login, exact:true},
    {path:'/pharmacies', component:Pharmacies, exact:true},
    {path:'/register', component:Register, exact:true},
    {path:'/cart', component:Cart, exact:true},
    {path:'/profile', component:Profile, exact:true}
]