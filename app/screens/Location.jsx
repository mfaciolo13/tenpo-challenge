import React, { useCallback, useRef, useState } from "react";
import * as ExpoLocation from "expo-location";
import { Alert } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

import { GOOGLE_MAPS_API_KEY } from "@env";

import DeliveryAddressButton from "components/DeliveryAddressButton";
import LocationInfoModal from "components/Location/LocationInfoModal";
import ListViewRow from "components/Location/ListViewRow";
import Map from "components/Location/Map";

import { Box } from "styles";
import { useFocusEffect } from "@react-navigation/native";

const Location = () => {
  const [direction, setDirection] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const ref = useRef();

  const toggleModalVisible = () => setModalVisible((prev) => !prev);

  const getLocationNameByCoords = async (lat, lng) => {
    const res = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_MAPS_API_KEY}`,
    );

    const { results } = await res.json();

    ref.current.setAddressText(results[1].formatted_address);

    return setModalVisible(true);
  };

  const getLocationPermission = async () => {
    const { status } = await ExpoLocation.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      alert("Permission denied");

      return;
    }

    const location = await ExpoLocation.getCurrentPositionAsync({});

    const { latitude, longitude } = location.coords;

    setDirection({ latitude, longitude });

    return getLocationNameByCoords(latitude, longitude);
  };

  const handleSearch = (latitude, longitude) => {
    const dir = { latitude, longitude };
    const randomCondition = Math.floor(Math.random() * 10) < 4;

    return new Promise((resolve, reject) => {
      if (randomCondition) {
        reject(dir);
      }

      resolve(dir);
    });
  };

  const createTwoButtonAlert = (
    title,
    description,
    onConfirm,
    onCancel,
    cancelText,
    confirmText,
  ) =>
    Alert.alert(title, description, [
      {
        text: cancelText,
        onPress: () => onCancel(),
        style: "cancel",
      },
      { text: confirmText, onPress: () => onConfirm() },
    ]);

  const resetFields = () => {
    setDirection(null);
    ref.current?.setAddressText("");
  };

  useFocusEffect(
    useCallback(() => {
      getLocationPermission();

      return () => {
        resetFields();
      };
    }, []),
  );

  return (
    <Box width="100%" height="600px" bg="#fff" flex={1}>
      <Box alignItems="center" bg="#D4F9F5">
        <DeliveryAddressButton marginBottom={20} fontSize={18} />
      </Box>
      <GooglePlacesAutocomplete
        placeholder="Escribe tu dirección"
        ref={ref}
        co
        styles={{
          container: {
            flex: 0,
            zIndex: 40,
          },
          textInput: {
            borderRadius: 28,
            height: 56,
            color: "#008f7e",
            fontFamily: "OpenSans_400Regular",
            fontSize: 16,
            borderWidth: 0.2,
            borderColor: "#ccc",
            paddingLeft: 24,
            shadowOffset: { width: 0, height: 1 },
            shadowRadius: 6,
            shadowColor: "#00000029",
            shadowOpacity: 1,
            zIndex: 100,
            elevation: 100,
          },
          textInputContainer: {
            backgroundColor: "#D4F9F5",
            height: 23,
          },
          listView: {
            top: 50,
          },
        }}
        minLength={2}
        enablePoweredByContainer={false}
        fetchDetails
        debounce={300}
        renderRow={({ structured_formatting }) => (
          <ListViewRow
            title={structured_formatting?.main_text}
            description={structured_formatting?.secondary_text}
          />
        )}
        onPress={(_, details = null) =>
          handleSearch(
            details.geometry.location.lat,
            details.geometry.location.lng,
          )
            .then((dir) => {
              setDirection(dir);
              setModalVisible(true);
            })
            .catch((dir) => {
              createTwoButtonAlert(
                "Ha ocurrido un error",
                "No pudimos encontrar la ubicación",

                () => {
                  setDirection(dir);
                  setModalVisible(true);
                },
                () => {},
                "Cancelar",
                "Reintentar",
              );
            })
        }
        query={{
          key: GOOGLE_MAPS_API_KEY,
          language: "es",
        }}
      />
      <Map
        direction={direction}
        setDirection={setDirection}
        isModalVisible={modalVisible}
        setModalVisible={toggleModalVisible}
      />
      {modalVisible ? (
        <LocationInfoModal
          modalVisible={modalVisible}
          setModalVisible={toggleModalVisible}
          resetFields={resetFields}
        />
      ) : null}
    </Box>
  );
};

export default Location;
