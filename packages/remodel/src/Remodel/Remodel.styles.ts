import styled from "styled-components";

type ModelProps = {
  bg?: string
}

export const ModelDiv = styled.div<ModelProps>`
  background-color: ${({bg}) => bg ? bg : 'yellow' };
`