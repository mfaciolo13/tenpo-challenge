import styled from "styled-components/native";

const Text = styled.Text`
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : "14px")};
  color: ${(props) => props.color || "black"};
  font-weight: ${(props) => props.fontWeight || 400};
  font-family: ${(props) => props.fontFamily || "Roboto_400Regular"};
  letter-spacing: ${(props) =>
    props.letterSpacing ? Number(props.letterSpacing) : "unset"};
  line-height: ${(props) =>
    props.lineHeight ? `${props.lineHeight}px` : "unset"};
  text-align: ${(props) => props.textAlign};
  z-index-: 10;
  ${(props) => {
    props.position && `position: ${props.position};`;
    props.top && `top: ${props.top};`;
    props.bottom && `bottom: ${props.bottom};`;
  }}
`;

export default Text;
