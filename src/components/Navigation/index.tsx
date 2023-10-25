import { Binoculars } from "@phosphor-icons/react/dist/ssr/Binoculars"
import { ChartLineUp } from "@phosphor-icons/react/dist/ssr/ChartLineUp"
import { Container, NavItemContainer } from "./styles"
import router, { useRouter } from "next/router"
import { useSession } from "next-auth/react"
import { useMemo } from "react"
import { User } from "@phosphor-icons/react/dist/ssr/User"

const NAV_ITENS = [
    {
        label:'Início',
        href:'/',
        icon: <ChartLineUp size={24} />

    },
    {
        label: 'Explorar',
        href: '/explore',
        icon: <Binoculars size={24} />

    }
]


export default function Navigation(){
    const router = useRouter();

    const { data: session } = useSession();
  
    const navItems = useMemo(() => {
      if (session) {
        return NAV_ITENS.concat({
          label: 'Perfil',
          href: `/profile/${session.user.id}`,
          icon: <User size={24} />
        })
      }
  
      return NAV_ITENS;
    }, [session])
  
return(
    <>
     <Container>
      {navItems.map(({ href, label, icon }) => (
        <NavItemContainer href={href} key={label} active={router.asPath === href}>
          {icon}
          {label}
        </NavItemContainer>
      ))}
    </Container>
    </>
)
}