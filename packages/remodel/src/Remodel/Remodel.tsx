import * as React from "react";
import { ModelDiv } from "./Remodel.styles"

type RemodelProps = {
  name?: string
  bg?: string
}

export const Remodel = ({ name, bg }: RemodelProps) => {
  return <ModelDiv bg={bg}>Remodel { name }</ModelDiv>
}