import { styled } from "@/stitches.config";
import Link from "next/link";

export const MenuConteiner = styled('div', {
    width: "232px",
    height: "calc(100% - 40px)",
    margin: 20,
    background: "$gray700 url('/images/sidebar-bg.png') no-repeat center",
    backgroundSize: "cover",
    borderRadius: 12,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 40,
    paddingBottom: 24,
  
    ".logo": {
      width: 128 ,
      marginBottom: 64
    } 
})

export const LoginButton = styled(Link, {
   cursor:'pointer',
})

export const Logout= styled('div', {
  cursor:'pointer',
})

export const Infofooter = styled('div', {
  display:'flex',
  flexDirection:'row',
  gap:'$3',
 
  p :{
    maxWidth: 100,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  },
})

