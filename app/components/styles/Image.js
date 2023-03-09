import styled from "styled-components/native";

const Image = styled.Image`
  width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) => (props.height ? props.height : "100%")};
`;

export default Image;
