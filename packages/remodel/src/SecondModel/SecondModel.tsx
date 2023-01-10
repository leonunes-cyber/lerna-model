import * as React from "react";
import { ModelDiv } from "./SecondModel.styles"

type RemodelProps = {
  secondName?: string
}

export const SecondModel = ({secondName}: RemodelProps) => {
  return <ModelDiv>Second Model {secondName}</ModelDiv>
}