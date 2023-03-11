import React from "react";
import PropTypes from "prop-types";
import MapView, { Marker } from "react-native-maps";

import { Box } from "styles";

const Map = ({ direction, isModalVisible, setDirection, setModalVisible }) => {
  const origin = {
    latitude: "-31.420202",
    longitude: "-64.188926",
    latitudeDelta: 0.02,
    longitudeDelta: 0.02,
  };

  return (
    <Box flex={1}>
      <MapView
        initialRegion={origin}
        region={direction}
        showsPointsOfInterest
        showsScale
        style={{
          width: "100%",
          height: isModalVisible ? "50%" : "100%",
        }}
      >
        <Marker
          draggable
          image={require("assets/map-pin.png")}
          coordinate={direction}
          onDragEnd={(newDirection) =>
            setDirection(newDirection.nativeEvent.coordinate)
          }
          onPress={setModalVisible}
        />
      </MapView>
    </Box>
  );
};

Map.propTypes = {
  direction: PropTypes.shape({
    latitude: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    longitude: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
  isModalVisible: PropTypes.bool,
  setDirection: PropTypes.func,
  setModalVisible: PropTypes.func,
};

export default Map;
