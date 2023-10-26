import { styled } from "@/stitches.config";
import Image from "next/image";


export const BookCardExplorarContainer = styled('div',{
    width:'328px',
    height:'184px',
    background:'$gray700',
    borderRadius:'8px',
    display:'flex',
    flexDirection:'row',
    padding: '16px 20px',
    gap:'$5',

  ".bookInfor":{
    display:'flex',
    flexDirection:"column",
    justifyContent:'space-between',
  
  },
  ".heading":{
    display:'flex',
    flexDirection:"column",

  },

})

export const BookImage = styled(Image, {

})