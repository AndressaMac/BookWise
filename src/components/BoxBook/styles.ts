
import { styled } from "../../../stitches.config";

export const ConteinerBox = styled('div', {
width:'600px',
height:'280px',
borderRadius: '8px',
background: '$gray700',
display:'flex',
padding:'24px',
flexDirection:'column',
alignSelf: 'stretch',
gap:'$2'
})

export const Avatar = styled('div', {

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