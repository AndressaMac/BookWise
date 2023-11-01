
import { styled } from "../../../stitches.config";
import Image from "next/image";

export const ConteinerBox = styled('div', {
width:'608px',
height:'280px',
padding: "18px $5",
borderRadius: '8px',
background: '$gray700',
display:'flex',
flexDirection:'column',
alignSelf: 'stretch',
gap:'$2'
})

export const Avatar = styled(Image, {

width:'40px',
height:'40px',
borderRadius: '999px',
border:' 1px solid var(--gradient-vertical, #7FD1CC)',

})

export const HeaderBox = styled('div', {

display:'flex',
flexDirection:'row',
gap:'$2',

})

export const BoxInfor = styled('div',{
    width:'392px',
    display:'flex',
    flexDirection:'column',
})

export const BookImage = styled(Image, {
width: '108px',
height:'152px' ,
borderRadius:'4px',
background:'cover',

})

export const BookInfoContent= styled('div',{
width:'453px'
})
export const ContentBook = styled('div',{
    display:'flex',
    flexDirection:'row',
    width:'560px',
    height:'152px',
    gap:'$3'
})
