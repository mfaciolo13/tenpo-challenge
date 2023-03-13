import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { FlatList, Pressable, TextInput } from "react-native";

import { Box, Row, Text } from "styles";

import LeftArrow from "assets/left-arrow.svg";
import Check from "assets/check-icon.svg";
import CheckBlur from "assets/check-icon-blur.svg";

import ListItem from "components/Search/ListItem";
import EmptyState from "components/Search/EmptyState";

const meltImg = require("assets/restaurants/melt.png");

const Search = ({ route }) => {
  const { address } = route.params;
  const navigation = useNavigation();

  const defaultData = [
    {
      title: "Melt Bilbao",
      description: "Av. Francisco Bilbao 3975, La Reina",
      img: meltImg,
      id: 0,
    },
    {
      title: "Melt Pajaritos",
      description: "Americo Vespucio 51 - Local 128, Pajaritos, Maipú",
      img: meltImg,
      id: 1,
    },
    {
      title: "Melt Barrio Brasil",
      description: "Compañía de Jesús 1909, Santiago",
      img: meltImg,
      id: 2,
    },
    {
      title: "Melt El Bosque",
      description: "Callao 2912, Las Condes",
      img: meltImg,
      id: 3,
    },
  ];

  const [value, setValue] = useState("");
  const [data, setData] = useState(defaultData);
  const [onlyOpen, setOnlyOpen] = useState(true);

  const handleSearch = (text) => {
    setValue(text);

    if (text === "") {
      return setData(defaultData);
    }

    const filteredData = data.filter((item) =>
      item?.title?.toLowerCase()?.includes(text?.toLowerCase()),
    );

    return setData(filteredData);
  };

  const handleOnlyOpen = () => {
    if (onlyOpen) {
      return setData(defaultData);
    }

    return setData([]);
  };

  useEffect(() => {
    handleOnlyOpen();
  }, [onlyOpen]);

  return (
    <Box flex={1} bg="#FFFFFF">
      <Row bg="#D4F9F5" paddingBottom={50}>
        <Row marginLeft={16}>
          <Pressable onPress={() => navigation.navigate("Home")}>
            <LeftArrow width={40} height={40} />
          </Pressable>
        </Row>
        <Box>
          <Text color="#008f7e" fontSize={12} fontFamily="OpenSans_700Bold">
            Tu ubicación cercana
          </Text>
          <Text color="#008f7e" fontSize={18} fontFamily="OpenSans_300Light">
            {address || "Calle Agustinas #546"}
          </Text>
        </Box>
      </Row>
      <Box bg="#F2F2F2">
        <TextInput
          value={value}
          onChangeText={handleSearch}
          style={{
            color: "#008f7e",
            fontFamily: "OpenSans_400Regular",
            fontSize: 16,
            paddingVertical: 16,
            paddingHorizontal: 16,
            zIndex: 40,
            elevation: 60,
            backgroundColor: "#FFFFFF",
            borderRadius: 28,
            flexDirection: "row",
            height: 56,
            borderWidth: 0.2,
            borderColor: "#ccc",
            shadowOffset: { width: 0, height: 1 },
            shadowRadius: 6,
            shadowColor: "#00000029",
            shadowOpacity: 1,
            position: "absolute",
            top: -30,
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        />
        <Row height={60} alignItems="center" paddingLeft={16} marginTop={26}>
          <Pressable onPress={() => setOnlyOpen((prev) => !prev)}>
            <Row
              alignItems="center"
              paddingLeft={8}
              paddingTop={8}
              paddingBottom={8}
              paddingRight={8}
              borderRadius={4}
              borderColor={onlyOpen ? "#008F7E" : "#a9d4cf"}
              borderWidth={1}
            >
              <Text
                fontSize={12}
                color={onlyOpen ? "#008F7E" : "#a9d4cf"}
                lineHeight={16}
                marginRight={8}
              >
                Solo locales abiertos
              </Text>
              {onlyOpen ? (
                <Check width={18} height={18} />
              ) : (
                <CheckBlur width={18} height={18} />
              )}
            </Row>
          </Pressable>
        </Row>
      </Box>
      <FlatList
        data={data}
        ListEmptyComponent={<EmptyState />}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            description={item.description}
            img={item.img}
          />
        )}
        keyExtractor={(item) => item.id}
        style={{
          paddingTop: 8,
        }}
      />
    </Box>
  );
};

export default Search;
