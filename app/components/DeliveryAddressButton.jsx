import React from "react";
import PropTypes from "prop-types";

import Pin from "assets/pin.svg";

import { Box, Row, Text } from "styles";

const DeliveryAddressButton = ({ address, marginBottom, fontSize }) => {
  return (
    <Row
      alignItems="center"
      justifyContent="center"
      marginBottom={marginBottom}
    >
      <Pin width={24} height={24} />
      {address ? (
        <Box width="80%" align="center">
          <Text
            marginLeft={8}
            fontSize={12}
            lineHeight={16}
            fontFamily="OpenSans_500Medium"
            color="#008f7e"
          >
            Enviaremos tu pedido a
          </Text>
          <Text
            marginLeft={8}
            fontSize={fontSize}
            fontFamily="OpenSans_300Light"
            color="#008f7e"
            numberOfLines={1}
          >
            {address}
          </Text>
        </Box>
      ) : (
        <Text
          marginLeft={8}
          fontSize={fontSize}
          fontFamily="OpenSans_300Light"
          color="#008f7e"
        >
          Agregar dirección de entrega
        </Text>
      )}
    </Row>
  );
};

DeliveryAddressButton.propTypes = {
  marginBottom: PropTypes.number,
  fontSize: PropTypes.number,
};

DeliveryAddressButton.defaultProps = {
  marginBottom: 40,
  fontSize: 16,
};

export default DeliveryAddressButton;
