import React, { useMemo } from "react";
import PropTypes from "prop-types";

import { getRandomColorByString } from "utils/getRandomColorByString";
import Avatar from "./styles/Avatar";
import Text from "./styles/Text";

const CustomAvatar = ({ width, height, name }) => {
  const computedInitials = useMemo(() => {
    const clientName = name.split(" ");
    const firstInitial = clientName[0].slice(0, 1);
    const secondInitial = clientName[1] ? clientName[1].slice(0, 1) : "";

    return `${firstInitial}${secondInitial}`.toUpperCase();
  }, [name]);

  return (
    <Avatar width={width} height={height} bg={getRandomColorByString(name)}>
      <Text>{computedInitials}</Text>
    </Avatar>
  );
};

CustomAvatar.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  name: PropTypes.string.isRequired,
};

CustomAvatar.defaultProps = {
  width: 40,
  height: 40,
};

export default CustomAvatar;
