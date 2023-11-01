import { useState } from "react";
import { Avatar, BookImage, BookInfoContent, BoxInfor, ConteinerBox, ContentBook, HeaderBox } from "./styles";
import Rating from '@mui/material/Rating';
import { Heading, Text } from "../Typography";
import axios from "axios";
import { api } from "@/src/lib/axios";

interface inforBookProps {
    nameAvatar: string,
    name:string,
    author:string,
    description:string,
    avatar:string,
    bookimage:string,
}



export default function Boxbook({nameAvatar,name, author,description,avatar,bookimage}:inforBookProps){
    const [value, setValue] = useState<number | null>(2);


return(
   
   <ConteinerBox>
        <HeaderBox>
            <div>
                <Avatar width={40} height={40} src={avatar}/>
            </div>
            <BoxInfor>
                <Heading size='sm' color='gray-100' >{nameAvatar}</Heading >
                <Text size='sm' color='gray-400'>Hoje</Text>
            </BoxInfor>
            <div>
            <Rating name="read-only" value={value} readOnly />
            </div>
        </HeaderBox>
        <ContentBook>
            <BookImage src={bookimage}
             width={108}
             height={152}/>
            <BookInfoContent>
                <Heading size='sm' color='gray-100'>{name}</Heading>
                <Text size='sm' color='gray-400'>{author}</Text>
                <Text size='sm' color='gray-300'>{description}</Text>
            </BookInfoContent>
        </ContentBook>
    </ConteinerBox>
)
}

