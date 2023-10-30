import Rating from "@mui/material/Rating";
import { ContainerBookCard ,Contentimage,HeadContainer,InforContainer,DetailsContainer} from "./styles";
import { useState } from "react";
import { Heading, Text } from "../Typography";



export default function BookCard(){
    const [value, setValue] = useState<number | null>(2);
   
    return(
        <ContainerBookCard>
            <Contentimage src="/images/books/codigo-limpo.png" width={108}
            height={152}
            alt="Picture of the author"/>
              
            <DetailsContainer>
            <HeadContainer>
                 <Text size='sm' color='gray-300'>Há 2 dias</Text>
                 <Rating name="read-only" value={value} readOnly />
            </HeadContainer>
           
            <InforContainer>
                 <Heading size='sm' color='gray-100' >Entendendo Algoritmos</Heading>
                 <Text size='sm' color='gray-400'>Aditya Bhargava</Text>
                 <Text size='sm' color='gray-300'>Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectu...</Text>
            </InforContainer>
            </DetailsContainer>
        </ContainerBookCard>
    )
}