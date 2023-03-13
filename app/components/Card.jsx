import React from "react";
import { Box, Image, Row, Text } from "./styles";
import styled from "styled-components/native";

import Star from "assets/restaurants/star.svg";

const Card = () => {
  const CardContainer = styled.View`
    background: #fff;
    border-radius: 16px;
    margin-top: 16px;
    width: 248px;
    height: 152px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.16);
  `;

  const favorites = [
    {
      name: "Combo hamburguesa Bigmac",
      rating: "3.5",
      time: "10-50 min.",
      restaurant: "Mcdonalds",
      mainImg: require("assets/favorites/big-mac.png"),
      smallImg: require("assets/restaurants/mc.png"),
    },
    {
      name: "Pizza Mediana 3 Ingredientes",
      rating: "3.5",
      time: "10-50 min.",
      restaurant: "MELT pizzas",
      mainImg: require("assets/favorites/pizza.png"),
      smallImg: require("assets/restaurants/melt.png"),
    },
  ];

  return (
    <Row>
      {favorites.map((favorite) => (
        <CardContainer
          marginBottom={16}
          marginLeft={1}
          marginRight={8}
          key={favorite.restaurant}
        >
          <Image height={96} source={favorite.mainImg} resizeMode="stretch" />
          <Row alignSelf="center" paddingTop={8} paddingBottom={16}>
            <Box>
              <Text
                fontSize={12}
                lineHeight={16}
                color="#333333"
                marginBottom={4}
              >
                {favorite.name}
              </Text>
              <Text
                fontSize={12}
                lineHeight={16}
                color="#00BAA4"
                fontFamily="OpenSans_700Bold"
              >
                {favorite.restaurant}
              </Text>
            </Box>
            <Box>
              <Row alignSelf="flex-end" marginBottom={4}>
                <Star width={11} height={11} alignSelf="center" />
                <Text
                  fontSize={12}
                  lineHeight={16}
                  color="#333333"
                  marginLeft={2}
                  alignSelf="center"
                >
                  {favorite.rating}
                </Text>
              </Row>
              <Text fontSize={12} lineHeight={16} color="#333333">
                {favorite.time}
              </Text>
            </Box>
          </Row>
        </CardContainer>
      ))}
    </Row>
  );
};

export default Card;
