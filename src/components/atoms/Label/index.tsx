import { VFC } from "react";
import styled from "styled-components";

type ColorCode = '#E89244' | '#E20E20' | '#40AF40'

export interface LabelProps{
  name: string,
  color: ColorCode
}


export const Label: VFC<LabelProps> = (props) => {
  const { name, color } = props;
  const Wrapper = styled.div`
  display: inline;
    padding: 2px 4px;
    margin: 0 2px;
    color: white;
    background-color: ${color};
  `
  return <Wrapper>{name}</Wrapper>
}