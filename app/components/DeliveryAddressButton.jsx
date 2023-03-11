import React from "react";
import PropTypes from "prop-types";

import Pin from "assets/pin.svg";

import { Row, Text } from "styles";

const DeliveryAddressButton = ({ marginBottom, fontSize }) => {
  return (
    <Row alignItems="center" marginBottom={marginBottom}>
      <Pin width={24} height={24} />
      <Text
        marginLeft={8}
        fontSize={fontSize}
        fontFamily="OpenSans_300Light"
        color="#008f7e"
      >
        Agregar dirección de entrega
      </Text>
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
