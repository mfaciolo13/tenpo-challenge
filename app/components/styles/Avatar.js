import styled from "styled-components/native";

const Avatar = styled.View`
  border-radius: 50%;
  height: ${(props) => (props.height ? `${props.height}px` : "32px")};
  width: ${(props) => (props.width ? `${props.width}px` : "32px")};
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.bg || "#00BAA4"};
  z-index: 99;
  ${(props) => {
    props.position && `position: ${props.position};`;
    props.top && `top: ${props.top};`;
    props.bottom && `bottom: ${props.bottom};`;
    props.left && `left: ${props.left};`;
    props.right && `right: ${props.right};`;
  }}
`;

export default Avatar;
