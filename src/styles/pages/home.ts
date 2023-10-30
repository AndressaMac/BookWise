
import { styled } from "../../../stitches.config";

export const ContainerHome =styled('div', {
   
    display:'flex',
    flexDirection:'row',
  

})


export const LoginConteiner = styled('div', {
    width: '23.25rem',
    height: '21.875rem',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    gap: '1rem'

   
})


export const TextContent = styled('div', {
  ' >h1' :{
    fontSize:'$6',
    fontWeight:'$bold',
    color:'$gray100',
  },

  '>p' : {
    fontSize:'$4',
    fontWeight:'$regular',
    color:'$gray200',
  }

})

export const LoginContant = styled('div', {

display: 'flex',
width: '23.25rem',
padding:'  1.25rem 1.5rem',
alignItems: 'center',
gap: '$5',
backgroundColor:'$gray600',

})