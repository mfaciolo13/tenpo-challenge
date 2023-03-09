import React from "react";

import Star from "assets/restaurants/star.svg";

import { Box, Image, Row, Text } from "styles";
import CustomAvatar from "components/CustomAvatar";

const Restaurants = () => {
  const restaurants = [
    {
      name: "Mcdonalds",
      discount: "50% DCTO",
      rating: "3.5",
      time: "10-50 min.",
      img: require("assets/restaurants/mc.png"),
    },
    {
      name: "MELT pizzas",
      discount: "30% DCTO",
      rating: "4.5",
      time: "10-60 min.",
      img: require("assets/restaurants/melt.png"),
    },
    {
      name: "YOKONO",
      discount: "20% DCTO",
      rating: "3.5",
      time: "10-50 min.",
      img: require("assets/restaurants/yokono.png"),
    },
    {
      name: "Lasagna Pizza",
      discount: "10% DCTO",
      rating: "3.5",
      time: "10-50 min.",
      img: require("assets/restaurants/papa.png"),
    },
  ];

  return (
    <Row paddingTop={16}>
      {restaurants.map((restaurant) => (
        <Box paddingRight={8} key={restaurant.name}>
          <CustomAvatar
            text={restaurant.discount}
            bg="#00BAA4"
            width={30}
            height={30}
            fontSize={7}
            fontFamily="OpenSans_500Medium"
            color="#FFFFFF"
            lineHeight={8}
            position="absolute"
            top={-6}
            right={6}
          />
          {restaurant.name === "YOKONO" ? (
            <Box
              paddingTop={5}
              paddingBottom={5}
              paddingRight={8}
              paddingLeft={8}
              bg="#1f1a17"
              borderRadius={16}
            >
              <Image source={restaurant.img} width={83} height={94} />
            </Box>
          ) : (
            <Image source={restaurant.img} width={104} height={104} />
          )}
          <Box>
            <Text
              fontSize={14}
              lineHeight={20}
              fontFamily="OpenSans_500Medium"
              color="#333333"
              textAlign="center"
              marginTop={4}
            >
              {restaurant.name}
            </Text>
            <Row alignItems="center" justifyContent="center">
              <Star width={11} height={11} />
              <Text
                marginLeft={2}
                fontFamily="OpenSans_400Regular"
                color="#333333"
                fontSize={12}
                lineHeight={16}
              >
                {restaurant.rating}
                {"  "}
                {restaurant.time}
              </Text>
            </Row>
          </Box>
        </Box>
      ))}
    </Row>
  );
};

export default Restaurants;
