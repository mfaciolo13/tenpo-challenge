import React from "react";
import { getDefaultHeaderHeight } from "@react-navigation/elements";
import {
  useSafeAreaFrame,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

import Search from "assets/search.svg";

import CustomAvatar from "./CustomAvatar";
import { Container, Row } from "styles";

const HomeHeader = () => {
  const frame = useSafeAreaFrame();
  const insets = useSafeAreaInsets();

  const headerHeight = getDefaultHeaderHeight(frame, false, insets.top);

  return (
    <Container bg="#F2F2F2" height={headerHeight} justifyContent="flex-end">
      <Row justifyContent="space-between" paddingLeft={16} paddingRight={16}>
        <CustomAvatar name="Mayco Faciolo" />
        <Search width={24} height={24} />
      </Row>
    </Container>
  );
};

export default HomeHeader;
