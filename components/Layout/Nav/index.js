import { ReactNode, useState, useEffect } from "react";
import {
  Box,
  Flex,
  HStack,
  Text,
  Link,
  IconButton,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  VStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";
import { Logo, MenuIcon } from "../../Icons";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { getShirts, logOut, sessionChange } from "../../../firebase/client";
import { UseDebounce } from "../../../hooks/UseDebounce";
import { motion, useScroll } from "framer-motion";

// const Links = ["Shop", "News", "About"];

// const NavLink = ({ children }) => (
//   <Link
//     px={2}
//     py={1}
//     rounded={"md"}
//     _hover={{
//       textDecoration: "none",
//       bg: "gray.200",
//       color: "brand.100",
//     }}
//     href={"#"}
//   >
//     {children}
//   </Link>
// );

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
        <Button onClick={onOpen}>
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
              {/* <Accordion allowToggle>
                <AccordionItem>
                  <h2>
                    <AccordionButton
                      fontWeight={600}
                      fontSize={"30px"}
                      p={"5px 20px"}
                      _hover={{
                        bg: "yellow.100",
                      }}
                      borderRadius={"25px"}
                    >
                      <Text>Productos</Text>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} fontSize={"25px"} textAlign={"center"}>
                    <Box>
                      <Link href="/Collares">Collares</Link>
                    </Box>
                    <Box>
                      <Link href="/Cadenas">Cadenas</Link>
                    </Box>
                    <Box>
                      <Link href="/Pulseras">Pulseras</Link>
                    </Box>
                    <Box>
                      <Link href="/Billeteras">Billeteras</Link>
                    </Box>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion> */}
            </VStack>
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

const DesktopNav = () => (
  <Flex
    display={{ base: "none", tablet: "flex" }}
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
);

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
