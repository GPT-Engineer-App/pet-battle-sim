import React, { useState } from "react";
import { Box, Button, Container, Flex, Heading, SimpleGrid, Stack, Text, useToast } from "@chakra-ui/react";
import { FaCat, FaDog, FaFish, FaPlus } from "react-icons/fa";

// Mock data for pets
const petsData = [
  { id: 1, name: "Cat", icon: FaCat },
  { id: 2, name: "Dog", icon: FaDog },
  { id: 3, name: "Fish", icon: FaFish },
];

// Pet component
const Pet = ({ pet, onAdd }) => {
  return (
    <Stack p={4} borderWidth="1px" borderRadius="lg" alignItems="center" justifyContent="center" spacing={2}>
      <Box as={pet.icon} w={10} h={10} />
      <Text>{pet.name}</Text>
      <Button size="sm" leftIcon={<FaPlus />} onClick={() => onAdd(pet)}>
        Add
      </Button>
    </Stack>
  );
};

const Index = () => {
  const [team, setTeam] = useState([]);
  const toast = useToast();

  const handleAddPet = (pet) => {
    if (team.length >= 5) {
      toast({
        title: "Team full",
        description: "You can't add more than 5 pets to your team.",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    setTeam([...team, pet]);
  };

  return (
    <Container maxW="container.xl" py={10}>
      <Heading as="h1" mb={6}>
        Super Auto Pets: React Edition
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5} mb={10}>
        {petsData.map((pet) => (
          <Pet key={pet.id} pet={pet} onAdd={handleAddPet} />
        ))}
      </SimpleGrid>

      <Heading as="h2" size="lg" mb={4}>
        Your Team
      </Heading>
      <Flex gap={4}>
        {team.map((pet, index) => (
          <Box key={index} p={4} borderWidth="1px" borderRadius="lg">
            <Box as={pet.icon} w={10} h={10} mb={2} />
            <Text textAlign="center">{pet.name}</Text>
          </Box>
        ))}
      </Flex>
    </Container>
  );
};

export default Index;
