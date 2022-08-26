import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
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
  Text,
  Box,
} from "@chakra-ui/react";
import { SmallCloseIcon } from "@chakra-ui/icons";
import { Register, sessionChange } from "../../firebase/client";
import { Head } from "next/document";

export default function Signup() {
  const [error, setError] = useState("");
  const [dev, setDev] = useState(undefined);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    sessionChange(setDev);
  }, []);

  useEffect(() => {
    dev && router.replace("/Home");
  }, [dev]);

  return (
    <>
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
            // pasarse un setError para mostrar lso errores de firebase
            onSubmit={handleSubmit((data) => {
              Register(data, setError);
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
                {...register("username", { required: "This is required" })}
              />
              <Box height="40px" marginBottom="1">
                <Text color="red.600">{errors.username?.message}</Text>
              </Box>
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                placeholder="your-email@example.com"
                _placeholder={{ color: "gray.500" }}
                type="email"
                {...register("email", { required: "This is required" })}
              />
              <Box height="40px" marginBottom="1">
                <Text color="red.600">{error}</Text>
                <Text color="red.600">{errors.email?.message}</Text>
              </Box>
            </FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              placeholder="password"
              _placeholder={{ color: "gray.500" }}
              type="password"
              autoComplete="on"
              {...register("password", {
                required: "This is required",
                minLength: {
                  value: 6,
                  message: "min Length is 6",
                },
              })}
            />
            <Box height="40px" marginBottom="1">
              <Text color="red.600">{errors.password?.message}</Text>
            </Box>
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
                  Register(data, setError);
                })}
              >
                Signup
              </Button>
            </Stack>
          </form>
        </Stack>
      </Flex>
    </>
  );
}
