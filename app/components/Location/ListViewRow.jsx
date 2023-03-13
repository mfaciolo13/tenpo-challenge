import React from "react";
import PropTypes from "prop-types";
import { Box, Text } from "styles";

const ListViewRow = ({ title, description }) => {
  return (
    <Box paddingLeft={8} paddingRight={8}>
      <Text fontSize={16} color="#333" lineHeight={20} marginBottom={4}>
        {title}
      </Text>
      <Text fontSize={12} lineHeight={16} color="#ADADAD">
        {description}
      </Text>
    </Box>
  );
};

ListViewRow.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default ListViewRow;
