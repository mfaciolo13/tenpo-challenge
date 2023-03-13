import React from "react";
import { useNavigation } from "@react-navigation/native";
import PropTypes from "prop-types";
import { Modal, Pressable } from "react-native";
import styled from "styled-components/native";

import { Box, Text, Row } from "styles";

import Cancel from "assets/cancel.svg";

const LocationInfoModal = ({ modalVisible, setModalVisible }) => {
  const navigation = useNavigation();

  const AddButton = styled.Pressable`
    height: 56px;
    align-items: center
    justify-content: center;
    border-radius: 8px;
    background-color: #00BAA4;
    margin-left: 8px;
    margin-right: 8px;
`;

  const TextArea = styled.TextInput`
    border-color: #e8e8e8;
    border-width: 1px;
    width: 100%;
    padding-top: 16px;
    padding-bottom: 16px;
    padding-left: 16px;
    padding-right: 16px;
    border-radius: 16px;
    height: 122px;
    margin-bottom: 36px;
    margin-top: 16px;
  `;

  return (
    <Box>
      <Modal
        animationType="fade"
        transparent
        visible={modalVisible}
        onRequestClose={setModalVisible}
      >
        <Box
          marginTop={22}
          justifyContent="flex-end"
          alignItems="center"
          flex={1}
        >
          <Box
            bg="#FFFFFF"
            paddingTop={24}
            paddingBottom={33}
            paddingLeft={16}
            paddingRight={16}
            width="100%"
            height="55%"
          >
            <Box alignItems="flex-start" marginBottom={16} marginTop={8}>
              <Row justifyContent="space-between" width="100%">
                <Box>
                  <Text
                    fontSize={16}
                    fontFamily="OpenSans_700Bold"
                    marginBottom={8}
                    lineHeight={22}
                  >
                    Agregar información de entrega
                  </Text>
                  <Text color="#ADADAD" lineHeight={20}>
                    Depto, Oficina, Piso, Block,
                  </Text>
                </Box>
                <Pressable onPress={setModalVisible}>
                  <Cancel fill="#ADADAD" />
                </Pressable>
              </Row>

              <TextArea maxLength={20} multiline numberOfLines={4} />
            </Box>
            <AddButton
              onPress={() => {
                navigation.navigate("Home");

                setModalVisible();
              }}
            >
              <Text
                textAlign="center"
                color="#FFFFFF"
                fontFamily="OpenSans_700Bold"
              >
                AGREGAR DIRECCIÓN
              </Text>
            </AddButton>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

LocationInfoModal.propTypes = {
  modalVisible: PropTypes.bool,
  setModalVisible: PropTypes.func,
};

export default LocationInfoModal;
