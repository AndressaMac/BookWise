import { styled } from "@/stitches.config";

export const ContainerInput = styled('div', {
    width: '433px',
    height: '48px',
    padding: '14px 20px',
    border:'1px solid $gray500',
    borderRadius:'8px',
    background:'$gray800',
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
   
    "&:focus": {
        outline: "none"
      },
  input:{
    width: '365px',
    height: '20px',
    background:'$gray800',
    border:'none',
    color:'$gray400',

    "&:focus": {
      outline: "none"
    },
    "&::placeholder": {
      color: "$gray400"
    },
  }

})