import { Rating } from "@mui/material";
import { Heading, Text } from "../Typography";
import { BookCardExplorarContainer, BookImage } from "./styles";
import { Book, Category } from "@prisma/client"
import { useQuery } from "@tanstack/react-query";
import { api } from "@/src/lib/axios";


export default function BookCardExplorar(){
    // const { data: categories } = useQuery<Category[]>(["categories"], async () => {
    //     const { data } = await api.get("/books/categories");
    //     return data?.categories ?? []
    //   })
    
    
    
    return(
        <BookCardExplorarContainer >
            <BookImage src="/images/books/codigo-limpo.png" width={108}
            height={152}
            alt="Picture of the author"/>
            <div className="bookInfor">
              <div className="heading">
                  <Heading size='md' color='gray-100'>A revolução dos bichos</Heading>
                  <Text size='md' color='gray-400'>George Orwell</Text>
              </div>
                   <Rating/>
            </div>
            
        </BookCardExplorarContainer>
    )
}