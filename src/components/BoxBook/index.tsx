import { useState } from "react";
import { Avatar, BookImage, BookInfoContent, BoxInfor, ConteinerBox, ContentBook, HeaderBox } from "./styles";
import Rating from '@mui/material/Rating';
import { Heading, Text } from "../Typography";
import axios from "axios";
import { api } from "@/src/lib/axios";


export default function Boxbook(){
    const [value, setValue] = useState<number | null>(2);




return(
   
   <ConteinerBox>
        <HeaderBox>
            <div>
                <Avatar src=''/>
            </div>
            <BoxInfor>
                <Heading size='sm' color='gray-100' >Jaxson Dias</Heading >
                <Text size='sm' color='gray-400'>Hoje</Text>
            </BoxInfor>
            <div>
            <Rating name="read-only" value={value} readOnly />
            </div>
        </HeaderBox>
        <ContentBook>
            <BookImage/>
            <BookInfoContent>
                <Heading size='sm' color='gray-100'>O Hobbit</Heading>
                <Text size='sm' color='gray-400'>J.R.R. Tolkien</Text>
                <Text size='sm' color='gray-300'>Semper et sapien proin vitae nisi. Feugiat neque integer donec et aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo a in.
                     Amet libero pharetra nunc elementum fringilla velit ipsum. Sed vulputate massa velit nibh...</Text>
            </BookInfoContent>
        </ContentBook>
    </ConteinerBox>
)
}

