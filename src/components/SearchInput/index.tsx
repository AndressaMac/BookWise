import { MagnifyingGlass } from "@phosphor-icons/react";
import { ContainerInput } from "./styles";



export default function SearchInput(){
    return(
        <ContainerInput>
            <input type="text" />
            <MagnifyingGlass size={24} color="#000f75" />
        </ContainerInput>
    )
}