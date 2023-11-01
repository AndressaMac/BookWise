import BookCard from "@/src/components/BookCard"
import BookCardPopular from "@/src/components/BookRating"
import Boxbook from "@/src/components/BoxBook"

import { ConteinerFeed, PageTitleContent, TitlePage, TitleTranding, PageTitleImage } from "../styles/pages/feed"
import { ReactElement, useEffect, useState } from "react"
import { DefaultLayout } from "@/src/layouts/DefaultLayout"
import { Heading, Text } from "@/src/components/Typography"
import axios from "axios"



export default function Feed({ dataFromAPI1,dataFromAPI2,data3 }: any) {
  console.log("data", dataFromAPI1);
  console.log('data2', dataFromAPI2)


  return (
    <ConteinerFeed>

      <div>
        <PageTitleContent>
          <PageTitleImage src="/images/Icon_inicio.svg" width={32}
            height={32} alt="Inicio" />
          <Heading size='md' color='gray-100'>Início</Heading>
        </PageTitleContent>
        <div>
          <TitlePage>
            <Text size='sm' color='gray-100'>Sua última leitura</Text>
            <Text size='sm' color='purple-100'>Ver todas</Text>
          </TitlePage>
          <BookCard />
        </div>
        <Text size='sm' color='gray-100'>Avaliações mais recentes</Text>

        {dataFromAPI1?.ratings?.map((rating: any) => (
          <Boxbook
            bookimage={rating?.book?.cover_url}
            key={rating?.id}
            avatar={rating?.user?.avatar_url}
            name={rating?.book?.name}
            author={rating?.book?.author}
            description={rating?.description}
            nameAvatar={rating?.user?.name}
          />
        ))}


      </div>
      <div>
        <TitleTranding>
          <Text size='sm' color='gray-100'>Livros Populares</Text>
          <Text size='sm' color='purple-100'>Ver todas</Text>
        </TitleTranding>
       {dataFromAPI2?.books?.map((book:any) => (
        <BookCardPopular 
        key={book?.id}
           imagepopular={book?.cover_url}
           title={book?.name} 
           author={book?.author} />
       ))}
       
      </div>

    </ConteinerFeed>
  )

}

Feed.getLayout = (page: ReactElement) => {
  return (
    <DefaultLayout title="Início">
      {page}
    </DefaultLayout>
  )
}

export async function getServerSideProps() {
  // Realize uma solicitação à API aqui
  try {
    const response = await axios.get(`http://localhost:3000/api/ratings/latest`); // Substitua pela sua URL de API
    const data = response.data;

    const responsePopular = await axios.get(`http://localhost:3000/api/books/popular`);
    const dataPopular = responsePopular.data;




    return {
      props: {
        dataFromAPI1: data,
        dataFromAPI2: dataPopular,
       
      },

      // Os dados serão passados para o componente como props
    };

  } catch (error) {
    return {
      props: { data: {} }, // Trate erros aqui
    };
  }
}
