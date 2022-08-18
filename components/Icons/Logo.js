import React from "react";
import { motion } from "framer-motion";

export default function Logo({ width, height }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 120 120"
      fill="none"
    >
      <motion.rect
        width="120"
        height="120"
        rx="60"
        fill="#617245"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ ease: "easeInOut", duration: 1 }}
      />
      <motion.g
        initial={{ opacity: 0, y: 100, scale: 0 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ ease: "easeInOut", duration: 1, delay: 0.5 }}
      >
        <path d="M78 32V28H74V32H78Z" fill="#B27A4C" />
        <path d="M54 60V72H58H62V68H58V52H54V56V60Z" fill="#7E5034" />
        <path d="M62 28V32H66H70V28H66H62Z" fill="#B27A4C" />
        <path d="M66 32H62V36H66V32Z" fill="#B27A4C" />
        <path d="M86 44V40H82H78V44H82H86Z" fill="#755640" />
        <path d="M62 40V44H66H70H74V40H62Z" fill="#755640" />
        <path d="M78 40V32H74V28H70V32H66V36H62V40H74H78Z" fill="#C08C5E" />
        <path d="M78 48V44H74V52H78V48Z" fill="#C79870" />
        <path d="M82 44H78V48H82V44Z" fill="black" />
        <path d="M66 44V48H70V44H66Z" fill="black" />
        <path
          d="M58 32V36V40V48V52V68H62V72H70V68H66V64H62V52V48H66V44H62V40V36V32H58Z"
          fill="#9C653E"
        />
        <path d="M74 44H70V48V56H78V52H74V44Z" fill="#8F5C39" />
        <path d="M78 44V40H74V44H78Z" fill="#B27A4C" />
        <path d="M78 68H82V60V56H78V60V64V68Z" fill="#B27A4C" />
        <path d="M82 48H78V52V56H82V48Z" fill="#B27A4C" />
        <path d="M78 56H70V60H78V56Z" fill="#753A41" />
        <path d="M70 68H78V64H70V68Z" fill="#AF5F69" />
        <path d="M70 68V72H74H78V68H70Z" fill="#C08C5E" />
        <path d="M74 24V20H70V24H74Z" fill="#505050" />
        <path d="M62 24H66V20H62V24Z" fill="#505050" />
        <path d="M74 28H78V24H74V28Z" fill="#4B4B4B" />
        <path d="M58 32H62V28H58V32Z" fill="#505050" />
        <path d="M58 20V24H62V20H58Z" fill="#454545" />
        <path d="M62 28V24H58V28H62Z" fill="#505050" />
        <path d="M62 28H66V24H62V28Z" fill="#676767" />
        <path d="M66 28H70V24H66V28Z" fill="#505050" />
        <path d="M74 28V24H70V28H74Z" fill="#676767" />
        <path d="M70 24V20H66V24H70Z" fill="#676767" />
        <path d="M54 48H58V40H54V36H50V40H46V48H50V44H54V48Z" fill="#2E2E2E" />
        <path d="M50 32H46V36H50V32Z" fill="#2E2E2E" />
        <path d="M50 28H46V32H50V28Z" fill="#2E2E2E" />
        <path d="M46 36V40H50V36H46Z" fill="#505050" />
        <path d="M50 36H54V32H50V36Z" fill="#505050" />
        <path d="M58 40V36H54V40H58Z" fill="#505050" />
        <path d="M50 24V28H54V24H50Z" fill="#505050" />
        <path d="M50 28V32H54V28H50Z" fill="#676767" />
        <path d="M58 28V24H54V28H58Z" fill="#3F3F3F" />
        <path d="M58 32V28H54V32H58Z" fill="#505050" />
        <path d="M58 36V32H54V36H58Z" fill="#2E2E2E" />
        <path d="M50 48H54V44H50V48Z" fill="#676767" />
        <path d="M58 52V48H54V52H58Z" fill="#7E5034" />
        <path d="M54 48H50V52H54V48Z" fill="#B27A4C" />
        <path d="M46 56H50V52H46V56Z" fill="#B27A4C" />
        <path d="M50 60H54V56H50V60Z" fill="#B27A4C" />
        <path d="M46 48V52H50V48H46Z" fill="#9C653E" />
        <path d="M54 52H50V56H54V52Z" fill="#9C653E" />
        <path d="M62 64H66V68H70V64V60V56H66V52H62V64Z" fill="#B27A4C" />
        <path d="M70 48H66H62V52H66V56H70V48Z" fill="#C08C5E" />
        <path d="M70 72H62V76H74V72H70Z" fill="#7E5034" />
        <path d="M62 72H58V76H62V72Z" fill="#9C653E" />
        <path d="M58 72H54V76H58V72Z" fill="#193657" />
        <path d="M54 72V60H50V64V68V72V76H54V72Z" fill="#0E0E0E" />
        <path d="M50 76V80H54V76H50Z" fill="#193657" />
        <path d="M46 80V84H50V80H46Z" fill="#193657" />
        <path d="M46 84H42V88H46V84Z" fill="#193657" />
        <path d="M38 72H34V76H38V72Z" fill="#363636" />
        <path d="M38 64H34V68H38V64Z" fill="#363636" />
        <path d="M34 60H38V56H34V60Z" fill="#2E2E2E" />
        <path d="M38 52H34V56H38V52Z" fill="#0E0E0E" />
        <path d="M38 48H34V52H38V48Z" fill="#676767" />
        <path d="M46 32H42V36V40V44V60H46V56V52V48V40V36V32Z" fill="#0E0E0E" />
        <path d="M42 40H38V44H42V40Z" fill="#1C1C1C" />
        <path d="M38 48V52V56V60H42V44H38V48Z" fill="#202020" />
        <path d="M50 60V56H46V60H50Z" fill="#202020" />
        <path d="M46 60V64H50V60H46Z" fill="#121212" />
        <path d="M42 60V64H46V60H42Z" fill="#141414" />
        <path d="M42 68H46V64H42V68Z" fill="#0B0B0B" />
        <path d="M50 68V64H46V68H50Z" fill="#2E2E2E" />
        <path d="M42 72H46V68H42V72Z" fill="#232323" />
        <path d="M46 76V80H50V76H46Z" fill="#232323" />
        <path d="M50 76V72H46V76H50Z" fill="#141414" />
        <path d="M42 76H46V72H42V76Z" fill="#232323" />
        <path d="M38 72V76H42V72H38Z" fill="#232323" />
        <path d="M38 76V80H42V76H38Z" fill="#363636" />
        <path d="M38 68V72H42V68H38Z" fill="#363636" />
        <path d="M38 64V68H42V64H38Z" fill="#232323" />
        <path d="M38 60V64H42V60H38Z" fill="#141414" />
        <path d="M50 72V68H46V72H50Z" fill="#232323" />
        <path d="M78 40H82V32H78V40Z" fill="#B27A4C" />
        <path d="M46 88H42V100H46V88Z" fill="#1F4774" />
        <path d="M42 100V88H38V100H42Z" fill="#7B2130" />
        <path d="M74 76H62V80H74V76Z" fill="#9C653E" />
        <path d="M82 84V88H86V84H82Z" fill="#26578D" />
        <path d="M78 80H74V84H78V80Z" fill="#26578D" />
        <path d="M74 76V80H78V76H74Z" fill="#193657" />
        <path d="M78 80V84H82V80H78Z" fill="#A62D3B" />
        <path d="M74 80H62V84H66V96H70V84H74V80Z" fill="#3371B6" />
        <path d="M66 100H70V96H66V100Z" fill="#28609E" />
        <path d="M70 100H74V96H70V100Z" fill="#9F2C39" />
        <path d="M62 96V100H66V96H62Z" fill="#9F2C39" />
        <path d="M54 96V100H58V96H54Z" fill="#9F2C39" />
        <path d="M54 80V84V92V96H58V80H54Z" fill="#BF3544" />
        <path d="M46 88V100H50V96V92V88H46Z" fill="#9F2C39" />
        <path d="M50 84H46V88H50V84Z" fill="#7B2130" />
        <path d="M50 80V84H54V80H50Z" fill="#7B2130" />
        <path d="M50 84V88V92H54V84H50Z" fill="#3371B6" />
        <path d="M54 92H50V96H54V92Z" fill="#1F4774" />
        <path d="M50 100H54V96H50V100Z" fill="#193657" />
        <path d="M58 76H54V80H58V76Z" fill="#1F4774" />
        <path d="M62 76H58V80V96H62V84V80V76Z" fill="#28609E" />
        <path d="M66 84H62V96H66V84Z" fill="#BF3544" />
        <path d="M74 84H70V96H74V92V88V84Z" fill="#BF3544" />
        <path d="M58 100H62V96H58V100Z" fill="#1F4774" />
        <path d="M78 88H74V92H78V88Z" fill="#A18F3C" />
        <path d="M78 84H74V88H78V84Z" fill="#3371B6" />
        <path d="M74 92V96H78V92H74Z" fill="#3371B6" />
        <path d="M74 96V100H78V96H74Z" fill="#28609E" />
        <path d="M82 100V96H78V100H82Z" fill="#741F2B" />
        <path d="M78 92V96H82V92H78Z" fill="#741F2B" />
        <path d="M78 88V92H82V88H78Z" fill="#741F2B" />
        <path d="M82 84H78V88H82V84Z" fill="#892534" />
        <path d="M86 88H82V92H86V88Z" fill="#323E64" />
        <path d="M86 96V92H82V96H86Z" fill="#323E64" />
        <path d="M82 100H86V96H82V100Z" fill="#323E64" />
        <path d="M78 60H70V64H78V60Z" fill="white" />
      </motion.g>
    </svg>
  );
}
