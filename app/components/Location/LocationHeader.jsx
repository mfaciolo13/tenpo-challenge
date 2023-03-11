import React from "react";
import { getDefaultHeaderHeight } from "@react-navigation/elements";
import {
  useSafeAreaFrame,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

import { Container } from "styles";

const LocationHeader = () => {
  const frame = useSafeAreaFrame();
  const insets = useSafeAreaInsets();

  const headerHeight = getDefaultHeaderHeight(frame, false, insets.top);

  return (
    <Container bg="#D4F9F5" height={headerHeight} justifyContent="flex-end" />
  );
};

export default LocationHeader;
