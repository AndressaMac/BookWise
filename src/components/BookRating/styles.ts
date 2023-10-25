import { styled } from "@/stitches.config";
import Image from "next/image"


export const ContainerBookCardPopular = styled('div', {

    width:'324px',
    height:'130px',
    background:'$gray700',
    borderRadius:'8px',
    display:'flex',
    flexDirection:'row',
    justifyContent:"center",
    gap:"$6",
    padding: '16px 20px' ,

})

export const BookRatingContent = styled(Image, {

})