import Rating from "@mui/material/Rating";
import { ContainerBookCard } from "./styles";
import { useState } from "react";


export default function BookCard(){
    const [value, setValue] = useState<number | null>(2);
   
    return(
        <ContainerBookCard>
            <div><img src="/images/books/o-hobbit.png"/></div>
            <div>
                <div>
                    <span>Há 2 dias</span>
                    <Rating name="read-only" value={value} readOnly />
                </div>
            </div>
            <div>
                 <h1>Entendendo Algoritmos</h1>
                 <span>Aditya Bhargava</span>
                 <p>Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectu...</p>
            </div>
            
        </ContainerBookCard>
    )
}