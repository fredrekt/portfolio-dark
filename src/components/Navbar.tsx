import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import HamburgerMenu from "react-hamburger-menu"
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalButton,
  SIZE,
  ROLE,
} from "baseui/modal"
import { KIND as ButtonKind } from "baseui/button"
import { StyledLink } from "baseui/link"
import { MoonIcon } from "./Icons"
import type { Theme } from "../types/theme"

interface NavbarProps {
  onClick: () => void
  color: Theme
}

const links = [
  { to: "/about", label: "About" },
  { to: "/works", label: "Work" },
  { to: "/resume", label: "Resume" },
  { to: "/blogs", label: "Blog" },
  { to: "/contact", label: "Contact" },
]

const Navbar = ({ onClick, color }: NavbarProps) => {
  const [collapse, setCollapse] = useState(false)
  const [modal, setModal] = useState(
    () => typeof window !== "undefined" && window.localStorage.getItem("consent") === null
  )

  const isDark = color === "dark"
  const ink = isDark ? "text-white" : "text-black"
  const activeBorder = isDark ? "border-white" : "border-black"

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("consent", String(modal))
    }
  }, [modal])

  useEffect(() => {
    if (typeof document === "undefined") return
    const bg = isDark ? "#000" : "#fff"
    document.documentElement.style.background = bg
    document.body.style.background = bg
  }, [isDark])

  const closeModal = () => setModal(false)

  return (
    <>
      <header className={`relative font-sans ${ink}`}>
        <div className="flex items-center justify-between px-4 py-10">
          <Link to="/" className={`font-display text-[2rem] font-normal leading-none ${ink}`}>
            Spicy Developer
          </Link>
          <button
            type="button"
            className="md:hidden"
            aria-label={collapse ? "Close menu" : "Open menu"}
            aria-expanded={collapse}
            onClick={() => setCollapse(open => !open)}
          >
            <HamburgerMenu
              isOpen={collapse}
              menuClicked={() => undefined}
              width={24}
              height={18}
              strokeWidth={2}
              rotate={0}
              color={isDark ? "white" : "black"}
              borderRadius={0}
              animationDuration={0.5}
            />
          </button>
          <nav
            className={`${
              collapse ? "flex" : "hidden"
            } absolute left-0 right-0 top-[5.5rem] z-20 flex-col items-end gap-6 px-4 pb-8 md:static md:flex md:flex-row md:items-center md:gap-8 md:pb-0 ${
              collapse ? (isDark ? "bg-black" : "bg-white") : ""
            }`}
          >
            {links.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`border-b-2 border-transparent text-sm font-bold uppercase tracking-[0.3em] ${ink}`}
                activeClassName={activeBorder}
                onClick={() => setCollapse(false)}
              >
                {link.label}
              </Link>
            ))}
            <button
              type="button"
              onClick={onClick}
              className={`inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.3em] ${ink}`}
            >
              {isDark ? "Light Mode" : "Dark Mode"}
              <MoonIcon />
            </button>
          </nav>
        </div>
      </header>

      <Modal
        onClose={closeModal}
        closeable
        isOpen={modal}
        animate
        autoFocus
        size={SIZE.default}
        role={ROLE.dialog}
      >
        <ModalHeader>Cookies Policy</ModalHeader>
        <ModalBody>
          This website uses cookies to improve your website experience.&nbsp;
          <StyledLink href="/policy">Learn more here.</StyledLink>
        </ModalBody>
        <ModalFooter>
          <ModalButton onClick={closeModal} kind={ButtonKind.tertiary}>
            Cancel
          </ModalButton>
          <ModalButton onClick={closeModal}>Okay</ModalButton>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default Navbar
