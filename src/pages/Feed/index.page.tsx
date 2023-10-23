import BookCard from "@/src/components/BookCard"
import BookCardPopular from "@/src/components/BookRating"
import Boxbook from "@/src/components/BoxBook"
import MenuLogged from "@/src/components/MenuLogged"
import { ConteinerFeed, PageTitleContent, TitlePage, TitleTranding } from "./styles"
import { ReactElement } from "react"
import { DefaultLayout } from "@/src/layouts/DefaultLayout"

export default function Feed(){
    return(
  <ConteinerFeed>  
  <div>
      {/* <MenuLogged/> */}
  </div>
  <div>
      <PageTitleContent>
         <img src="/" alt=""/>
         <h1>Início</h1>
      </PageTitleContent>
      <div>
        <TitlePage>
          <h2>Sua última leitura</h2>
          <p>Ver todas</p>
        </TitlePage>
      <Boxbook/>
      </div>
       {/* <h2>Avaliações mais recentes</h2>
       <BookCard/>
       <BookCard/> */}
  </div>
  <div>
     {/* <TitleTranding>
          <h2>Livros Populares</h2>
          <p>Ver todas</p>
     </TitleTranding>
      <BookCardPopular/> */}
  </div>
   
  </ConteinerFeed>
    )

}
Feed.getLayout = (page: ReactElement) => {
  return (
    <DefaultLayout title="Feed">
      {page}
    </DefaultLayout>
  )
}