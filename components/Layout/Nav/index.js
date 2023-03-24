import { ReactNode, useState, useEffect } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  Stack,
  Input,
} from "@chakra-ui/react";
import Logo from "../../Icons/Logo";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { getShirts, logOut, sessionChange } from "../../../firebase/client";
import { UseDebounce } from "../../../hooks/UseDebounce";

const Links = ["Shop", "News", "About"];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: "gray.200",
      color: "brand.100",
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function Navbar({ data }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [user, setUser] = useState(undefined);
  const [search, setSearch] = useState("");

  useEffect(() => {
    sessionChange(setUser);
    //Traer todas las camisetas para hacer el hook de autocompletado en la busqueda
    // const d = data.filter((el) => el.toLowerCase().includes(text));
    // setResults(d);
  }, []);

  return (
    <>
      <Flex
        layerStyle={"paddingX"}
        justify={"space-between"}
        p={"20px 40px"}
        fontWeight={500}
      >
        <HStack spacing={10} w={"30%"}>
          <Box>World Cup</Box>
          <Box>Retro</Box>
          <Box>Premier</Box>
        </HStack>

        <Logo />

        <HStack justify={"end"} spacing={10} w={"30%"}>
          <Box>About</Box>
          <Box>Carrito</Box>
        </HStack>
      </Flex>
    </>
  );
}
