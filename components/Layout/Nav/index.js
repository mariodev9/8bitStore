import { ReactNode, useState, useEffect } from "react";
import {
  Box,
  Flex,
  HStack,
  Text,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  VStack,
  Link,
} from "@chakra-ui/react";
import { Logo, MenuIcon } from "../../Icons";

import { motion, useScroll } from "framer-motion";
import NextLink from "next/link";
import { useRouter } from "next/router";

// const Links = ["Shop", "News", "About"];

const NavLink = ({ children, href }) => (
  <NextLink href={href} passHref>
    <Link
      textAlign="center"
      _hover={{ textDecoration: "none", color: "#465e33" }}
    >
      {children}
    </Link>
  </NextLink>
);

const MobileNav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex
        display={{ base: "flex", tablet: "none" }}
        layerStyle={"paddingX"}
        justify={"space-between"}
        align={"center"}
        p={"20px 40px"}
      >
        <Button onClick={onOpen} _hover={{ bg: "brand.100" }}>
          <MenuIcon />
        </Button>
        <Logo />
        <Text>Carrito</Text>
      </Flex>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose} size={"lg"}>
        <DrawerOverlay />
        <DrawerContent bg={"#fff"}>
          <DrawerCloseButton />

          <DrawerBody>
            <VStack
              spacing={5}
              h={"100%"}
              fontWeight={600}
              fontSize={"30px"}
              align={"center"}
              justify={"center"}
            >
              <NavLink href={"/Home"}> Home</NavLink>
              <NavLink href={"/WorldCup"}> World Cup Collection</NavLink>
              <NavLink href={"/Retro"}> Retro Shirts</NavLink>
              <NavLink href={"/PremierLeague"}>
                Premier League Collection
              </NavLink>
            </VStack>
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

const DesktopNav = () => {
  const router = useRouter();

  return (
    <Flex
      display={{ base: "none", tablet: "flex" }}
      layerStyle={"paddingX"}
      justify={"space-between"}
      p={"20px 40px"}
      fontWeight={500}
    >
      <HStack spacing={10} w={"30%"}>
        <NavLink href={"/WorldCup"}> World Cup</NavLink>
        <NavLink href={"/Retro"}>Retro</NavLink>
        <NavLink href={"/PremierLeague"}>Premier</NavLink>
      </HStack>
      <Box cursor={"pointer"} onClick={() => router.push("/Home")}>
        <Logo />
      </Box>

      <HStack justify={"end"} spacing={10} w={"30%"}>
        <NavLink href={"/About"}>About</NavLink>
        <Box>Carrito</Box>
      </HStack>
    </Flex>
  );
};

const variants = {
  visible: { y: 0, opacity: 1 },
  hidden: { y: -100, opacity: 0 },
};

export default function Navbar({ scrollYProgress }) {
  const [hidden, setHidden] = useState(false);

  function update() {
    if (scrollYProgress?.current < scrollYProgress?.prev) {
      setHidden(false);
    } else if (scrollYProgress?.current > scrollYProgress?.prev) {
      setHidden(true);
    }
  }

  useEffect(() => {
    scrollYProgress.onChange(() => update());
  }, [scrollYProgress]);

  return (
    <>
      <motion.div
        variants={variants}
        animate={hidden ? "hidden" : "visible"}
        transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
        style={{
          width: "100%",
          position: "fixed",
          zIndex: 99,
          backgroundColor: "#fff",
        }}
      >
        <MobileNav />
        <DesktopNav />
      </motion.div>
    </>
  );
}
