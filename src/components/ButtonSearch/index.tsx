import { ContainerButton } from "./styles";

interface Props {
    active:boolean
}

export default function ButtonSearch({active}: Props ){
    return(
    <ContainerButton active={active}>
        Tudo
    </ContainerButton>
    )
}