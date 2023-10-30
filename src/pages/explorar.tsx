import { DefaultLayout } from "@/src/layouts/DefaultLayout"
import { ReactElement } from "react"
import { ExploreContainer } from "../styles/pages/explorar"
import BookCardExplorar from "@/src/components/BookCardExplorar"
import SearchInput from "@/src/components/SearchInput"
import ButtonSearch from "@/src/components/ButtonSearch"
import { useQuery } from "@tanstack/react-query"
import { Category } from "@prisma/client"
import { api } from "@/src/lib/axios"


export default function Explorar(){
  


    return(

        <ExploreContainer>
        <BookCardExplorar/>
        <SearchInput/>
        <ButtonSearch active={false}/>
        
        </ExploreContainer>
    
    )
}

Explorar.getLayout = (page: ReactElement) => {
    return (
      <DefaultLayout title="Explorar">
        {page}
      </DefaultLayout>
    )
  }