import styled from "styled-components/native";

const Row = styled.View`
  background-color: ${(props) => props.bg || "inherited"};
  flex-direction: row;
  justify-content: ${(props) => props.justifyContent || "start"};
  margin-top: ${(props) => (props.marginTop ? `${props.marginTop}px` : "0px")};
  margin-bottom: ${(props) =>
    props.marginBottom ? `${props.marginBottom}px` : "0px"};
`;

export default Row;
