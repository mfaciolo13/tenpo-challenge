import styled from "styled-components/native";

const Box = styled.View`
  background-color: ${(props) => props.bg || "inherited"};
  justify-content: ${(props) => props.justifyContent || "start"};
  padding-inline: ${(props) =>
    props.paddingHorizontal ? `${props.paddingHorizontal}px` : "0px"};
  margin-top: ${(props) => (props.marginTop ? `${props.marginTop}px` : "0px")};
  margin-bottom: ${(props) =>
    props.marginBottom ? `${props.marginBottom}px` : "0px"};
  padding-left: ${(props) =>
    props.paddingLeft ? `${props.paddingLeft}px` : "0px"};
  padding-right: ${(props) =>
    props.paddingRight ? `${props.paddingRight}px` : "0px"};
  width: ${(props) => (props.width ? props.width : "auto")};
  height: ${(props) => (props.height ? props.height : "auto")};
  border-radius: ${(props) =>
    props.borderRadius ? `${props.borderRadius}px` : "0px"};
  z-index: 10;

  ${(props) => {
    props.flex && `flex: ${props.flex};`;
    props.position && `position: ${props.position};`;
    props.top && `top: ${props.top};`;
    props.bottom && `bottom: ${props.bottom};`;
  }};
`;

export default Box;
