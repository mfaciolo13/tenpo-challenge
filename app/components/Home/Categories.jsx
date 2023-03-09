import React from "react";
import { Box, Image, Row, Text } from "../styles";

const Categories = () => {
  const categories = [
    {
      name: "HAMBURGUESAS",
      img: require("assets/categories/burger.png"),
      left: "11%",
      bottom: "35%",
    },
    {
      name: "ITALIANA",
      img: require("assets/categories/pasta.png"),
      left: "25%",
      bottom: "35%",
    },
    {
      name: "PIZZAS",
      img: require("assets/categories/pizza.png"),
      left: "32%",
      bottom: "35%",
    },
  ];

  return (
    <Row paddingTop={16}>
      {categories.map((category) => (
        <Box key={category.name}>
          <Text
            fontSize={14}
            letterSpacing="1.4px"
            lineHeight={22}
            color="#FFFFFF"
            fontFamily="OpenSans_700Bold"
            position="absolute"
            textAlign="center"
            left={category.left}
            bottom={category.bottom}
          >
            {category.name}
          </Text>
          <Image source={category.img} width={152} height={65} blurRadius={1} />
        </Box>
      ))}
    </Row>
  );
};

export default Categories;
