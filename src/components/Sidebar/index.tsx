import { useRouter } from "next/router";
import Navigation from "../Navigation";
import { MenuConteiner,Infofooter, LoginButton, Logout } from "./styles";
import { signOut, useSession } from "next-auth/react";
import { useMemo } from "react";
import { SignIn } from "@phosphor-icons/react/dist/ssr/SignIn";
import { Heading, Text } from "../Typography";
import { SignOut } from "@phosphor-icons/react/dist/ssr/SignOut";
import { Avatar } from "@mui/material";

export default function Sidebar(){
    
    const { data: session } = useSession();
    
    const router = useRouter();
  
    const user = session?.user;

    const handleOpenProfile = () => {
        router.push(`/profile/${user?.id}`)
      }
      
    return(
        <MenuConteiner>
            <div>
                <img src="/images/logo.svg" alt="logo" className="logo" />
                <Navigation/>
            </div>
           <div>
            {!user ? (
            <Infofooter>
                <Text size='md' color='gray-100' >Fazer login</Text>
                <LoginButton href='/Home' >
                   <SignIn size={24} color="#50b2c0" />
                </LoginButton>
               
            </Infofooter>
            ) 
            : 
            (
            <Infofooter>
                <Avatar src={user?.avatar_url} alt={user?.name} onClick={handleOpenProfile} ></Avatar>
                <p>Fazer login</p>
                <Logout>
                   <SignOut size={24} color="#f75a68" onClick={() => signOut()} />
                </Logout>
                
            </Infofooter>
            )}

           </div>
      
        
        </MenuConteiner>
    )
}