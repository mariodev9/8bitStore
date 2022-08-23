import React from "react";
import Logo from "../../Icons/Logo";
import Link from "next/link";
import Menu from "../../Icons/Menu";
import User from "../../Icons/User";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  useDisclosure,
} from "@chakra-ui/react";

export default function Nav() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        Open
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      {/* <div className="container">
        <div
          className="d-lg-none menu-icon"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasResponsive"
          aria-controls="offcanvasResponsive"
        >
          <Menu />
        </div>

        <div
          className="offcanvas-lg offcanvas-end"
          tabIndex="-1"
          id="offcanvasResponsive"
          aria-labelledby="offcanvasResponsiveLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasResponsiveLabel">
              Menu
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              data-bs-target="#offcanvasResponsive"
              aria-label="Close"
            ></button>
          </div>
          <div className="d-flex justify-content-between p-3">
            <div className="d-none d-lg-block d-md-none">
              <Logo height={60} width={60} />
            </div>
            <div className="offcanvas-body d-flex justify-content-lg-end justify-content-sm-center">
              <ul className="list-group list-group-horizontal-lg align-items-center">
                <li className="list-group-item ">
                  <Link href="/">
                    <a>Catalogue</a>
                  </Link>
                </li>
                <li className="list-group-item ">
                  <Link href="/About">
                    <a>About</a>
                  </Link>
                </li>

                <li className="list-group-item ">
                  <div className="dropdown show">
                    <a
                      className="dropdown-toggle"
                      href="#"
                      role="button"
                      id="dropdownMenuLink"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <User />
                    </a>

                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuLink"
                    >
                      <a className="dropdown-item" href="#">
                        Wish List
                      </a>
                      <a className="dropdown-item" href="#">
                        Profile
                      </a>
                      <a className="dropdown-item" href="#">
                        Log out
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div> */}
      <style jsx>{`
        .list-group-item {
          border: none;
        }

        a {
          font-family: "Bebas Neue", cursive;
          text-decoration: none;
          color: #333;
        }

        .menu-icon {
          cursor: pointer;
          margin-top: 10px;
        }
      `}</style>
    </>
  );
}
