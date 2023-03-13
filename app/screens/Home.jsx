import React from "react";
import { Pressable, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Box, Container, Image, Row, Text } from "styles";

import Hand from "assets/hand.svg";
import Dots from "assets/dots.svg";
import Search from "assets/search.svg";

import Card from "components/Card";
import Categories from "components/Home/Categories";
import Restaurants from "components/Home/Restaurants";
import DeliveryAddressButton from "components/DeliveryAddressButton";

const Home = ({ route }) => {
  const { address } = route.params;
  const navigation = useNavigation();

  return (
    <Container bg="white" flex={1}>
      <Row
        bg="#F2F2F2"
        justifyContent="space-between"
        paddingLeft={16}
        paddingRight={16}
      >
        <Image source={require("assets/avatar.png")} width={40} height={40} />
        <Pressable
          onPress={() => {
            navigation.navigate("Search");
          }}
        >
          <Search width={24} height={24} />
        </Pressable>
      </Row>
      <Box paddingLeft={16} paddingRight={16} bg="#F2F2F2">
        <Row justifyContent="space-between" marginTop={16}>
          <Box marginTop={16}>
            <Text
              fontSize={42}
              fontWeight={800}
              color="#333333"
              fontFamily="Roboto_900Black"
              lineHeight={39}
            >
              Tenpo
            </Text>
            <Text
              fontSize={42}
              fontWeight={800}
              color="#00BAA4"
              fontFamily="Roboto_900Black"
              lineHeight={39}
            >
              Eats
            </Text>
            <Text
              fontSize={12}
              fontWeight={900}
              color="#333333"
              fontFamily="OpenSans_700Bold"
              letterSpacing="2.4px"
              lineHeight={18}
            >
              DELIVER APP
            </Text>
          </Box>
          <Row>
            <Hand width={118} height={181} />
            <Row alignItems="flex-end" marginBottom={40}>
              <Dots width={28} height={6} />
            </Row>
          </Row>
        </Row>
      </Box>
      <Box
        bg="#D4F9F5"
        width="100%"
        height="110px"
        alignItems="center"
        justifyContent="center"
        borderRadius={30}
        position="relative"
        bottom={24}
      >
        <Pressable onPress={() => navigation.navigate("Location")}>
          <DeliveryAddressButton address={address} />
        </Pressable>
      </Box>
      <Box
        bg="white"
        borderRadius={30}
        position="relative"
        bottom={64}
        flex={1}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <Box marginLeft={16} marginTop={38}>
            <Box marginBottom={58}>
              <Text
                fontSize={18}
                color="#333333"
                fontFamily="OpenSans_700Bold"
                lineHeight={26}
              >
                RESTAURANTES
              </Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <Restaurants />
              </ScrollView>
            </Box>
            <Box marginBottom={58}>
              <Text fontSize={18} color="#333333" fontFamily="OpenSans_700Bold">
                CATEGORÍAS
              </Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <Categories />
              </ScrollView>
            </Box>
            <Box paddingBottom={58} flex={1}>
              <Text
                fontSize={18}
                color="#333333"
                fontFamily="OpenSans_700Bold"
                marginBottom={8}
              >
                TUS FAVORITOS
              </Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <Card />
              </ScrollView>
            </Box>
          </Box>
        </ScrollView>
      </Box>
    </Container>
  );
};

export default Home;
