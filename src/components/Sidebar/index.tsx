import Navigation from "../Navigation";
import { Menu, MenuConteiner, MenuItem } from "./styles";


export default function Sidebar(){
    return(
        <MenuConteiner>
            <div>
                <img src="/images/logo.svg" alt="logo" className="logo" />
                <Navigation/>
            </div>
           
      
        
        </MenuConteiner>
    )
}