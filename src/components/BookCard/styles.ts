import { styled } from "@/stitches.config";
import Image from "next/image";

export const ContainerBookCard = styled('div',{
    width:'608px',
    height:'192px',
    borderRadius:'8px',
    background: '$gray600',
    padding:'20px 24px',
    display:'flex',
    flexDirection:'row',
    gap:'$5',
})

export const Contentimage = styled(Image, {
    width:'108px',
    height:'152px',
} )

export const HeadContainer = styled('div',{
    display:'flex',
    flexDirection:"row",
    justifyContent:'space-between'

})

export const InforContainer = styled('div', {
    display:'flex',
    flexDirection:'column',
})

export const DetailsContainer = styled('div', {
    display:'flex',
    flexDirection:'column',
})