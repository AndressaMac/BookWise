import { styled } from "@/stitches.config";

export const ContainerButton = styled('button', {
   width:'fit-content',
   height:'34px',
   padding:'4px 16px',
   border:'1px solid $purple200',
   background:'$gray800',
   color:'$purple200',
   borderRadius:'99px',
   transition:'0.5s',

    
   "&:hover": {
    backgroundColor:'$purple200',
    color:'$white',
    cursor:'pointer',
  },
  variants: {
    active: {
      true: {
        color: "$gray100",
        background: "$purple200",
        borderColor: "$purple200",
      }
    }
  }

})