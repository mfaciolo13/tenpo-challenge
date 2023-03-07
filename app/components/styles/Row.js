import styled from "styled-components/native";

const Row = styled.View`
  flex-direction: row;
  justify-content: ${(props) => props.justifyContent || "start"};
  padding-inline: ${(props) => props.paddingHorizontal || "unset"};
  margin-bottom: ${(props) => `${props.marginBottom}px` || "0px"};
`;

export default Row;
