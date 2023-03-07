import styled from "styled-components/native";

const Text = styled.Text`
  font-size: ${(props) => props.size || "14px"};
  color: ${(props) => props.color || "black"};
  font-weight: ${(props) => props.fontWeight || 600};
`;

export default Text;
