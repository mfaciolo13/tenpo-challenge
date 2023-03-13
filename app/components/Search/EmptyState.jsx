import React from "react";
import { Box, Text } from "../styles";

const EmptyState = () => {
  return (
    <Box
      flex={1}
      alignItems="center"
      paddingLeft={40}
      paddingRight={40}
      marginTop={120}
    >
      <Text
        color="#008f7e"
        fontSize={12}
        lineHeight={16}
        fontFamily="OpenSans_700Bold"
      >
        Lo sentimos
      </Text>
      <Text
        color="#ADADAD"
        fontSize={16}
        lineHeight={22}
        fontFamily="OpenSans_300Light"
        textAlign="center"
      >
        En este momento no hay locales abiertos en el área de búsqueda
        determinada.
      </Text>
    </Box>
  );
};

export default EmptyState;
