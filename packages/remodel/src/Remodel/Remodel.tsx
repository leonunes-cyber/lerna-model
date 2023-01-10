import * as React from "react";
import { ModelDiv } from "./Remodel.styles"

type RemodelProps = {
  name?: string
}

export const Remodel = ({name}: RemodelProps) => {
  return <ModelDiv>Remodel {name}</ModelDiv>
}