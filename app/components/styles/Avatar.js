import styled from "styled-components/native";

const Avatar = styled.View`
  border-radius: 50%;
  height: ${(props) => (props.height ? `${props.height}px` : "32px")};
  width: ${(props) => (props.width ? `${props.width}px` : "32px")};
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.bg || "#00BAA4"};
`;

export default Avatar;
