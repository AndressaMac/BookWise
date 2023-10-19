import { Menu, MenuConteiner, MenuItem } from "./styles";


export default function MenuLogged(){
    return(
        <MenuConteiner>
            <div>
                <img src="/images/Logo_bookwise.svg" alt="logo" />
                <h1>BookWise</h1>
            </div>
            <Menu>
                <MenuItem>Início</MenuItem>
                <MenuItem>Explorar</MenuItem>
                <MenuItem>Perfil</MenuItem>
            </Menu>
            <div>
                <div></div>
                <p>Cristofer</p>
                <div></div>
            </div>
        </MenuConteiner>
    )
}