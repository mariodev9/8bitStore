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
import { sessionChange, Login } from "../../firebase/client";

export default function index() {
  const [error, setError] = useState("");
  const [dev, setDev] = useState(undefined);
  const router = useRouter();
  const { register, handleSubmit } = useForm();

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
            Login
          </Heading>
          <form>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                placeholder="your-email@example.com"
                _placeholder={{ color: "gray.500" }}
                type="email"
                {...register("email")}
              />
              <Box height="40px" marginBottom="1">
                <Text color="red.600">{error}</Text>
              </Box>
            </FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              placeholder="password"
              _placeholder={{ color: "gray.500" }}
              type="password"
              autoComplete="on"
              {...register("password")}
            />
            <Box height="40px" marginBottom="1">
              <Text color="red.600">{error}</Text>
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
                Visit
              </Button>
              <Button
                bg={"#617245"}
                color={"white"}
                w="full"
                _hover={{
                  bg: "#53623B",
                }}
                onClick={handleSubmit((data) => {
                  Login(data, setError);
                })}
              >
                Login
              </Button>
            </Stack>
          </form>
        </Stack>
      </Flex>
    </>
  );
}
