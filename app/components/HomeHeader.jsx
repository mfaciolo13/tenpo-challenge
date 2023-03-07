import React from "react";

import Search from "assets/search.svg";

import CustomAvatar from "./CustomAvatar";
import Container from "./styles/Container";
import Row from "./styles/Row";

const HomeHeader = () => {
  return (
    <Container bg="#F2F2F2">
      <Row
        justifyContent="space-between"
        paddingHorizontal={16}
        marginBottom={16}
      >
        <CustomAvatar name="Mayco Faciolo" />
        <Search width={24} height={24} />
      </Row>
    </Container>
  );
};

export default HomeHeader;
