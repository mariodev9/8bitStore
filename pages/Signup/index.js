import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  HStack,
  Avatar,
  AvatarBadge,
  IconButton,
  Center,
} from "@chakra-ui/react";
import { SmallCloseIcon } from "@chakra-ui/icons";
import { Register } from "../../firebase/client";

export default function About() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"} bg="gray.200">
      <Stack
        spacing={4}
        w={"full"}
        maxW={"md"}
        bg="white"
        rounded={"xl"}
        boxShadow={"lg"}
        p={6}
        my={12}
      >
        <Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
          Signup
        </Heading>
        <form
          onSubmit={handleSubmit((data) => {
            Register(data);
          })}
        >
          <FormControl id="userName">
            <FormLabel>User Icon</FormLabel>
            <Stack direction={["column", "row"]} spacing={6}>
              <Center>
                <Avatar size="xl" src="">
                  <AvatarBadge
                    as={IconButton}
                    size="sm"
                    rounded="full"
                    top="-10px"
                    colorScheme="red"
                    aria-label="remove Image"
                    icon={<SmallCloseIcon />}
                    onClick={() => console.log("eliminar image")}
                  />
                </Avatar>
              </Center>
              <Center w="full">
                <Button
                  w="full"
                  border="2px"
                  borderColor="#617245"
                  _hover={{
                    bg: "gray.200",
                  }}
                >
                  Change Icon
                </Button>
              </Center>
            </Stack>
          </FormControl>
          <FormControl id="userName" isRequired>
            <FormLabel>User name</FormLabel>
            <Input
              placeholder="UserName"
              _placeholder={{ color: "gray.500" }}
              type="text"
              {...register("username")}
            />
          </FormControl>
          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input
              placeholder="your-email@example.com"
              _placeholder={{ color: "gray.500" }}
              type="email"
              {...register("email")}
            />
          </FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            placeholder="password"
            _placeholder={{ color: "gray.500" }}
            type="password"
            {...register("password")}
          />
          <input type="submit" />
          <Stack spacing={6} direction={["column", "row"]}>
            <Button
              bg={"gray.400"}
              color={"white"}
              w="full"
              _hover={{
                bg: "gray.500",
              }}
            >
              Back
            </Button>
            <Button
              bg={"#617245"}
              color={"white"}
              w="full"
              _hover={{
                bg: "#53623B",
              }}
              onClick={handleSubmit((data) => {
                Register(data);
              })}
            >
              Signup
            </Button>
          </Stack>
        </form>
      </Stack>
    </Flex>
  );
}
