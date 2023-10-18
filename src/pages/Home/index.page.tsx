import { ContainerHome, LoginContant, LoginConteiner, TextContent } from "./styles";
import { signIn, useSession } from 'next-auth/react'
 
 
 
 export default function Home(){
    const session = useSession()
   console.log(session)
    return(
        <ContainerHome>
        <img src='/images/image.svg'  />
        
        <LoginConteiner>
            <TextContent>
                <h1>Boas vindas!</h1>
                <p>Faça seu login ou acesse como visitante.</p>
            </TextContent>

            <LoginContant onClick={() => signIn('google')} >
                <img src="/images/logos_google-icon.svg"/>Entrar com Google
            </LoginContant>
            <LoginContant onClick={() => signIn('github')}>
                <img src="/images/akar-icons_github-fill.svg"/>Entrar com GitHub
            </LoginContant>
            <LoginContant>
                <img src="/images/RocketLaunch.svg"/>Acessar como visitante
            </LoginContant>

        </LoginConteiner>
        </ContainerHome>
    )
}