import styled from "styled-components/native";

const Row = styled.View`
  background-color: ${(props) => props.bg || "inherited"};
  flex-direction: row;
  justify-content: ${(props) => props.justifyContent || "start"};
  padding-inline: ${(props) =>
    props.paddingHorizontal ? `${props.paddingHorizontal}px` : "0px"};
  margin-top: ${(props) => (props.marginTop ? `${props.marginTop}px` : "0px")};
  margin-bottom: ${(props) =>
    props.marginBottom ? `${props.marginBottom}px` : "0px"};
`;

export default Row;
