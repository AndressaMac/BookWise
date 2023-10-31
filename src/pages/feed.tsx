import BookCard from "@/src/components/BookCard"
import BookCardPopular from "@/src/components/BookRating"
import Boxbook from "@/src/components/BoxBook"

import { ConteinerFeed, PageTitleContent, TitlePage, TitleTranding,PageTitleImage } from "../styles/pages/feed"
import { ReactElement, useEffect, useState } from "react"
import { DefaultLayout } from "@/src/layouts/DefaultLayout"
import { Heading, Text } from "@/src/components/Typography"
import axios from "axios"


export default function Feed({data}:any){
  console.log("data", data.ratings);
  

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

export async function getServerSideProps() {
  // Realize uma solicitação à API aqui
  try {
    const response = await axios.get(`http://localhost:3000/api/ratings/latest`); // Substitua pela sua URL de API
    const data = response.data;

    return {
      props: { data }, // Os dados serão passados para o componente como props
    };
  } catch (error) {
    return {
      props: { data: {} }, // Trate erros aqui
    };
  }
}
