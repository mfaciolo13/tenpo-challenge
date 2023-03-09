import styled from "styled-components/native";

const Container = styled.View`
  background-color: ${(props) => props.bg || "inherited"};
  height: ${(props) => (props.height ? `${props.height}px` : "auto")};
  justify-content: ${(props) => props.justifyContent || "unset"};
  padding-left: ${(props) =>
    props.paddingLeft ? `${props.paddingLeft}px` : "0px"};
  padding-right: ${(props) =>
    props.paddingRight ? `${props.paddingRight}px` : "0px"};
  margin-top: ${(props) => (props.marginTop ? `${props.marginTop}px` : "0px")};
  margin-bottom: ${(props) =>
    props.marginBottom ? `${props.marginBottom}px` : "0px"};
`;

export default Container;
