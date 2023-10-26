import { DefaultLayout } from "@/src/layouts/DefaultLayout"
import { ReactElement } from "react"
import { ExploreContainer } from "./styles"
import BookCardExplorar from "@/src/components/BookCardExplorar"
import SearchInput from "@/src/components/SearchInput"
import ButtonSearch from "@/src/components/ButtonSearch"


export default function Explorar(){

    return(
        < ExploreContainer>
        <BookCardExplorar/>
        <SearchInput/>
        <ButtonSearch/>
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