import React, { useMemo } from "react";
import PropTypes from "prop-types";

import { getRandomColorByString } from "utils/getRandomColorByString";
import Avatar from "./styles/Avatar";
import Text from "./styles/Text";

const CustomAvatar = ({
  bg,
  width,
  height,
  name,
  text,
  fontFamily,
  fontSize,
  color,
  lineHeight,
  position,
  top,
  bottom,
  left,
  right,
}) => {
  const computedInitials = useMemo(() => {
    if (!name) return;

    const clientName = name?.split(" ");
    const firstInitial = clientName[0].slice(0, 1);
    const secondInitial = clientName[1] ? clientName[1].slice(0, 1) : "";

    return `${firstInitial}${secondInitial}`.toUpperCase();
  }, [name]);

  return (
    <Avatar
      width={width}
      height={height}
      bg={bg || getRandomColorByString(name)}
      position={position}
      top={top}
      bottom={bottom}
      left={left}
      right={right}
    >
      <Text
        color={color}
        textAlign="center"
        fontFamily={fontFamily}
        fontSize={fontSize}
        lineHeight={lineHeight}
      >
        {text || computedInitials}
      </Text>
    </Avatar>
  );
};

CustomAvatar.propTypes = {
  bg: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  name: PropTypes.string,
  text: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.number,
  color: PropTypes.string,
  lineHeight: PropTypes.number,
  position: PropTypes.string,
  top: PropTypes.number,
  bottom: PropTypes.number,
  left: PropTypes.number,
  right: PropTypes.number,
};

CustomAvatar.defaultProps = {
  width: 40,
  height: 40,
  fontFamily: "OpenSans_600SemiBold",
};

export default CustomAvatar;
