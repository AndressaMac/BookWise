import Rating from "@mui/material/Rating";
import { ContainerBookCardPopular,BookRatingContent } from "./styles";
import { useState } from "react";
import { Heading,Text } from "../Typography";

interface popularProps{
    imagepopular: string,
    title:string
    author:string

}



export default function BookCardPopular({ imagepopular,title,author}:popularProps){
    
    const [value, setValue] = useState<number | null>(2);
   
   
    return(
        <ContainerBookCardPopular>
            <BookRatingContent src={imagepopular}
            width={64}
            height={94}
            alt="Picture of the author"></BookRatingContent>
            <div>
                <Heading size='sm' color='gray-100'>{title}</Heading>
                <Text size='sm' color='gray-400'>{author}</Text>
                <Rating name="read-only" value={value} readOnly /> 
            </div>
        </ContainerBookCardPopular>
    )
}