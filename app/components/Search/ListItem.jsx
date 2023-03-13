import React from "react";
import PropTypes from "prop-types";

import { Box, Row, Image, Text } from "styles";

const ListItem = ({ title, description, img }) => (
  <Box>
    <Row
      paddingLeft={16}
      paddingRight={16}
      paddingTop={16}
      paddingBottom={16}
      alignItems="center"
    >
      <Image source={img} width={40} height={40} marginRight={14} />
      <Box>
        <Text fontSize={16} lineHeight={20}>
          {title}
        </Text>
        <Text color="#ADADAD" fontSize={12} lineHeight={16}>
          {description}
        </Text>
      </Box>
    </Row>
    <Box borderBottomColor="#E8E8E8" borderBottomWidth={1} />
  </Box>
);

ListItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.node,
};

export default ListItem;
