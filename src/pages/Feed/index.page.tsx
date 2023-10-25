import BookCard from "@/src/components/BookCard"
import BookCardPopular from "@/src/components/BookRating"
import Boxbook from "@/src/components/BoxBook"

import { ConteinerFeed, PageTitleContent, TitlePage, TitleTranding,PageTitleImage } from "./styles"
import { ReactElement } from "react"
import { DefaultLayout } from "@/src/layouts/DefaultLayout"
import { Heading, Text } from "@/src/components/Typography"


export default function Feed(){
    return(
  <ConteinerFeed>  

  <div>
      <PageTitleContent>
         <PageTitleImage src="/images/Icon_inicio.svg" width={32}
            height={32} alt="Inicio"/>
         <Heading size='md' color='gray-100'>Início</Heading>
      </PageTitleContent>
      <div>
        <TitlePage>
          <Text size='sm' color='gray-100'>Sua última leitura</Text>
          <Text size='sm'color='purple-100'>Ver todas</Text>
        </TitlePage>
        <BookCard/>
      </div>
       <Text size='sm' color='gray-100'>Avaliações mais recentes</Text>
       
       <Boxbook/>
       
  </div>
  <div>
     <TitleTranding>
          <Text size='sm' color='gray-100'>Livros Populares</Text>
          <Text size='sm'color='purple-100'>Ver todas</Text>
     </TitleTranding>
      <BookCardPopular/>
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