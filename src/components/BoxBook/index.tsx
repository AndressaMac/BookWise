import { useState } from "react";
import { Avatar, BoxInfor, ConteinerBox, HeaderBox } from "./styles";
import Rating from '@mui/material/Rating';


export default function Boxbook(){
    const [value, setValue] = useState<number | null>(2);
return(
   
   <ConteinerBox>
        <HeaderBox>
            <div>
                <Avatar src=''/>
            </div>
            <BoxInfor>
                <h1>Jaxson Dias</h1>
                <p>Hoje</p>
            </BoxInfor>
            <div>
            <Rating name="read-only" value={value} readOnly />
            </div>
        </HeaderBox>
        <div>
            <div><img src="/images/o-hobbit.png"/></div>
            <div>
                <h1>O Hobbit</h1>
                <p>J.R.R. Tolkien</p>
                <span>Semper et sapien proin vitae nisi. Feugiat neque integer donec et aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed vulputate massa velit nibh...</span>
            </div>
        </div>
    </ConteinerBox>
)
}

