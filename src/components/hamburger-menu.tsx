"use client";
import { Link } from "@/lib/types";
import Hamburger from "hamburger-react";
import React from "react";
import clsx from "clsx";
import NextLink from "next/link";
import { useActiveSectionContext } from "@/containers/active-section";
import { AnimatePresence, motion } from "framer-motion";

type HamburgerMenuProps = {
  links: Link[];
};

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ links }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  const menuTrigger = {
    visible: { scale: 1, opacity: 0.7, y: 0 },
    tap: { scale: 0.85 },
    hover: { scale: 1.2 },
  };

  const menuList = {
    start: { scale: 0.6, opacity: 0.7, y: -20 },
    visible: { scale: 1, opacity: 0.9, y: 0 },
  };

  return (
    <motion.div className="md:hidden fixed bottom-0 z-[999] w-full :bottom-0 p-1 rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-black/[0..3] backdrop-blur-[0.5rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75">
    <ul className="flex flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500">
      {links.map((link) => (
        <motion.li
          className="flex items-center justify-center relative"
          key={link.hash}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <NextLink
            className={clsx(
              "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",
              {
                "text-gray-950 dark:text-gray-200":
                  activeSection === link.hash,
              }
            )}
            href={link.hash}
            onClick={() => {
              setActiveSection(link.hash);
              setTimeOfLastClick(Date.now());
            }}
          >
            {link.nameEng}
            {link.hash === activeSection && (
              <motion.span
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                layoutId="activeSection"
              ></motion.span>
            )}
          </NextLink>
        </motion.li>
      ))}
    </ul>
  </motion.div>
  );
};

export default HamburgerMenu;
