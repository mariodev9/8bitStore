import React from "react";
import { motion } from "framer-motion";

export default function Logo({ width, height }) {
  const circle = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0 },
  };

  const container = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <>
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.1 }}
      >
        <motion.svg viewBox="0 0 99 99">
          <defs>
            <clipPath id="mask">
              <motion.circle
                cx="49.5"
                cy="49.5"
                r="49.5"
                initial="hidden"
                animate="visible"
                transition={{ duration: 1.4 }}
                variants={circle}
              />
            </clipPath>
          </defs>
        </motion.svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="99"
          height="99"
          viewBox="0 0 99 99"
          fill="#617245"
          className="player"
        >
          <motion.g
            variants={container}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1 }}
          >
            <path d="M67 31V27H63V31H67Z" fill="#B27A4C" />
            <path d="M43 59V71H47H51V67H47V51H43V55V59Z" fill="#7E5034" />
            <path d="M51 27V31H55H59V27H55H51Z" fill="#B27A4C" />
            <path d="M55 31H51V35H55V31Z" fill="#B27A4C" />
            <path d="M75 43V39H71H67V43H71H75Z" fill="#755640" />
            <path d="M51 39V43H55H59H63V39H51Z" fill="#755640" />
            <path d="M67 39V31H63V27H59V31H55V35H51V39H63H67Z" fill="#C08C5E" />
            <path d="M67 47V43H63V51H67V47Z" fill="#C79870" />
            <path d="M71 43H67V47H71V43Z" fill="black" />
            <path d="M55 43V47H59V43H55Z" fill="black" />
            <path
              d="M47 31V35V39V47V51V67H51V71H59V67H55V63H51V51V47H55V43H51V39V35V31H47Z"
              fill="#9C653E"
            />
            <path d="M63 43H59V47V55H67V51H63V43Z" fill="#8F5C39" />
            <path d="M67 43V39H63V43H67Z" fill="#B27A4C" />
            <path d="M67 67H71V59V55H67V59V63V67Z" fill="#B27A4C" />
            <path d="M71 47H67V51V55H71V47Z" fill="#B27A4C" />
            <path d="M67 55H59V59H67V55Z" fill="#753A41" />
            <path d="M59 67H67V63H59V67Z" fill="#AF5F69" />
            <path d="M59 67V71H63H67V67H59Z" fill="#C08C5E" />
            <path d="M63 23V19H59V23H63Z" fill="#505050" />
            <path d="M51 23H55V19H51V23Z" fill="#505050" />
            <path d="M63 27H67V23H63V27Z" fill="#4B4B4B" />
            <path d="M47 31H51V27H47V31Z" fill="#505050" />
            <path d="M47 19V23H51V19H47Z" fill="#454545" />
            <path d="M51 27V23H47V27H51Z" fill="#505050" />
            <path d="M51 27H55V23H51V27Z" fill="#676767" />
            <path d="M55 27H59V23H55V27Z" fill="#505050" />
            <path d="M63 27V23H59V27H63Z" fill="#676767" />
            <path d="M59 23V19H55V23H59Z" fill="#676767" />
            <path
              d="M43 47H47V39H43V35H39V39H35V47H39V43H43V47Z"
              fill="#2E2E2E"
            />
            <path d="M39 31H35V35H39V31Z" fill="#2E2E2E" />
            <path d="M39 27H35V31H39V27Z" fill="#2E2E2E" />
            <path d="M35 35V39H39V35H35Z" fill="#505050" />
            <path d="M39 35H43V31H39V35Z" fill="#505050" />
            <path d="M47 39V35H43V39H47Z" fill="#505050" />
            <path d="M39 23V27H43V23H39Z" fill="#505050" />
            <path d="M39 27V31H43V27H39Z" fill="#676767" />
            <path d="M47 27V23H43V27H47Z" fill="#3F3F3F" />
            <path d="M47 31V27H43V31H47Z" fill="#505050" />
            <path d="M47 35V31H43V35H47Z" fill="#2E2E2E" />
            <path d="M39 47H43V43H39V47Z" fill="#676767" />
            <path d="M47 51V47H43V51H47Z" fill="#7E5034" />
            <path d="M43 47H39V51H43V47Z" fill="#B27A4C" />
            <path d="M35 55H39V51H35V55Z" fill="#B27A4C" />
            <path d="M39 59H43V55H39V59Z" fill="#B27A4C" />
            <path d="M35 47V51H39V47H35Z" fill="#9C653E" />
            <path d="M43 51H39V55H43V51Z" fill="#9C653E" />
            <path d="M51 63H55V67H59V63V59V55H55V51H51V63Z" fill="#B27A4C" />
            <path d="M59 47H55H51V51H55V55H59V47Z" fill="#C08C5E" />
            <path d="M59 71H51V75H63V71H59Z" fill="#7E5034" />
            <path d="M51 71H47V75H51V71Z" fill="#9C653E" />
            <path d="M47 71H43V75H47V71Z" fill="#193657" />
            <path d="M43 71V59H39V63V67V71V75H43V71Z" fill="#0E0E0E" />
            <path d="M39 75V79H43V75H39Z" fill="#193657" />
            <path d="M35 79V83H39V79H35Z" fill="#193657" />
            <path d="M35 83H31V87H35V83Z" fill="#193657" />
            <path d="M27 71H23V75H27V71Z" fill="#363636" />
            <path d="M27 63H23V67H27V63Z" fill="#363636" />
            <path d="M23 59H27V55H23V59Z" fill="#2E2E2E" />
            <path d="M27 51H23V55H27V51Z" fill="#0E0E0E" />
            <path d="M27 47H23V51H27V47Z" fill="#676767" />
            <path
              d="M35 31H31V35V39V43V59H35V55V51V47V39V35V31Z"
              fill="#0E0E0E"
            />
            <path d="M31 39H27V43H31V39Z" fill="#1C1C1C" />
            <path d="M27 47V51V55V59H31V43H27V47Z" fill="#202020" />
            <path d="M39 59V55H35V59H39Z" fill="#202020" />
            <path d="M35 59V63H39V59H35Z" fill="#121212" />
            <path d="M31 59V63H35V59H31Z" fill="#141414" />
            <path d="M31 67H35V63H31V67Z" fill="#0B0B0B" />
            <path d="M39 67V63H35V67H39Z" fill="#2E2E2E" />
            <path d="M31 71H35V67H31V71Z" fill="#232323" />
            <path d="M35 75V79H39V75H35Z" fill="#232323" />
            <path d="M39 75V71H35V75H39Z" fill="#141414" />
            <path d="M31 75H35V71H31V75Z" fill="#232323" />
            <path d="M27 71V75H31V71H27Z" fill="#232323" />
            <path d="M27 75V79H31V75H27Z" fill="#363636" />
            <path d="M27 67V71H31V67H27Z" fill="#363636" />
            <path d="M27 63V67H31V63H27Z" fill="#232323" />
            <path d="M27 59V63H31V59H27Z" fill="#141414" />
            <path d="M39 71V67H35V71H39Z" fill="#232323" />
            <path d="M67 39H71V31H67V39Z" fill="#B27A4C" />
            <path d="M35 87H31V99H35V87Z" fill="#1F4774" />
            <path d="M31 99V87H27V99H31Z" fill="#7B2130" />
            <path d="M63 75H51V79H63V75Z" fill="#9C653E" />
            <path d="M71 83V87H75V83H71Z" fill="#26578D" />
            <path d="M67 79H63V83H67V79Z" fill="#26578D" />
            <path d="M63 75V79H67V75H63Z" fill="#193657" />
            <path d="M67 79V83H71V79H67Z" fill="#A62D3B" />
            <path d="M63 79H51V83H55V95H59V83H63V79Z" fill="#3371B6" />
            <path d="M55 99H59V95H55V99Z" fill="#28609E" />
            <path d="M59 99H63V95H59V99Z" fill="#9F2C39" />
            <path d="M51 95V99H55V95H51Z" fill="#9F2C39" />
            <path d="M43 95V99H47V95H43Z" fill="#9F2C39" />
            <path d="M43 79V83V91V95H47V79H43Z" fill="#BF3544" />
            <path d="M35 87V99H39V95V91V87H35Z" fill="#9F2C39" />
            <path d="M39 83H35V87H39V83Z" fill="#7B2130" />
            <path d="M39 79V83H43V79H39Z" fill="#7B2130" />
            <path d="M39 83V87V91H43V83H39Z" fill="#3371B6" />
            <path d="M43 91H39V95H43V91Z" fill="#1F4774" />
            <path d="M39 99H43V95H39V99Z" fill="#193657" />
            <path d="M47 75H43V79H47V75Z" fill="#1F4774" />
            <path d="M51 75H47V79V95H51V83V79V75Z" fill="#28609E" />
            <path d="M55 83H51V95H55V83Z" fill="#BF3544" />
            <path d="M63 83H59V95H63V91V87V83Z" fill="#BF3544" />
            <path d="M47 99H51V95H47V99Z" fill="#1F4774" />
            <path d="M67 87H63V91H67V87Z" fill="#A18F3C" />
            <path d="M67 83H63V87H67V83Z" fill="#3371B6" />
            <path d="M63 91V95H67V91H63Z" fill="#3371B6" />
            <path d="M63 95V99H67V95H63Z" fill="#28609E" />
            <path d="M71 99V95H67V99H71Z" fill="#741F2B" />
            <path d="M67 91V95H71V91H67Z" fill="#741F2B" />
            <path d="M67 87V91H71V87H67Z" fill="#741F2B" />
            <path d="M71 83H67V87H71V83Z" fill="#892534" />
            <path d="M75 87H71V91H75V87Z" fill="#323E64" />
            <path d="M75 95V91H71V95H75Z" fill="#323E64" />
            <path d="M71 99H75V95H71V99Z" fill="#323E64" />
            <path d="M67 59H59V63H67V59Z" fill="white" />
          </motion.g>
        </svg>
      </motion.div>
      <style jsx>{`
        .player {
          clip-path: url(#mask);
          background-color: #617245;
        }
      `}</style>
    </>
  );
}
