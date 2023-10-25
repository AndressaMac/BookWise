import Rating from "@mui/material/Rating";
import { ContainerBookCardPopular,BookRatingContent } from "./styles";
import { useState } from "react";
import { Heading,Text } from "../Typography";

export default function BookCardPopular(){
    
    const [value, setValue] = useState<number | null>(2);
    return(
        <ContainerBookCardPopular>
            <BookRatingContent src='/images/books/codigo-limpo.png'
            width={64}
            height={94}
            alt="Picture of the author"></BookRatingContent>
            <div>
                <Heading size='sm' color='gray-100'>A revolução dos bichos</Heading>
                <Text size='sm' color='gray-400'>George Orwell</Text>
                <Rating name="read-only" value={value} readOnly /> 
            </div>
        </ContainerBookCardPopular>
    )
}