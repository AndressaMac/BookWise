import Rating from "@mui/material/Rating/Rating";
import { ContainerBookCardPopular } from "./styles";
import { useState } from "react";

export default function BookCardPopular(){
    
    const [value, setValue] = useState<number | null>(2);
    return(
        <ContainerBookCardPopular>
            <div><img src=""/></div>
            <div>
                <h1>A revolução dos bichos</h1>
                <span>George Orwell</span>
                 <Rating name="read-only" value={value} readOnly /> 
            </div>
        </ContainerBookCardPopular>
    )
}