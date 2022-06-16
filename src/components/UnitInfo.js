import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import {
  Button,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Badge,
  Box,
  Switch,
  useToast,
  createStandaloneToast,
} from "@chakra-ui/react";

const UnitInfo = ({ units, statusPutApi }) => {
  const toast = createStandaloneToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const changeStatusHandler = () => {
    statusPutApi(!units.Active);

    onClose();
    toast({
      backgroundColor: "red",
      title: "Status endret",
      description: "Du har nå endret status for enheten",
      status: "success",
      duration: 15000,
      isClosable: true,
      variant: "subtle",
    });
  };
  return (
    <>
      <InfoText>
        <Span>Eier:</Span> {units.Owner}
      </InfoText>
      <InfoText>
        <Span>Gatenavn:</Span> {units.StreetName}
      </InfoText>
      <InfoText>
        <Span>Nummer:</Span> {units.StreetNumber}
      </InfoText>
      <InfoText>
        <Span>Enhet_ID:</Span> {units.Id}
      </InfoText>
      <StatusContainer>
        <InfoText>
          <Span>Status:</Span>
        </InfoText>
        {units.Active ? (
          <Badge colorScheme="green">i drift</Badge>
        ) : (
          <Badge colorScheme="red">ikke i drift</Badge>
        )}
      </StatusContainer>
      <Switch
        onChange={onOpen}
        isChecked={units.Active ? true : false}
        colorScheme="green"
        size="md"
      >
        Endre status på drift av enhet
      </Switch>
      <Modal
        closeOnOverlayClick={false}
        motionPreset="slideInBottom"
        isCentered
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Er du sikker at du vil bytte status?</ModalHeader>
          <ModalCloseButton />
          <ModalFooter>
            <Button
              colorScheme="teal"
              variant="solid"
              mr={3}
              onClick={changeStatusHandler}
            >
              Ja
            </Button>
            <Button variant="ghost" colorScheme="teal" mr={3} onClick={onClose}>
              Nei
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

const InfoText = styled(Text)`
  margin-right: 2rem;
`;
const Span = styled.span`
  font-weight: 600;
  display: inline;
`;
const StatusContainer = styled.div`
  display: flex;
  align-items: center;
`;

export default UnitInfo;
