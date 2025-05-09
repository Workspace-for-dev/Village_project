import { useState } from "react";
import {
  BurgerMenuContainer,
  BurgerButton,
  CloseButton,
  ModalOverlay,
  ModalContent,
  MenuList,
  MenuItem,
  MenuItemLabel,
  MenuItemArrow,
} from "./styles";
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const menuItems = [
  {
    label: "Schönwalde entdecken",
    path: "/",
    subcategories: [],
  },
  {
    label: "Bildung & Gemeinschaft",
    path: "/education",
    subcategories: ["Schule", "Jugendclub"],
  },
  {
    label: "Gemeinde & Verwaltung",
    path: "/municipality",
    subcategories: ["Bürgerbüro", "Formulare"],
  },
  {
    label: "Handel & Dienstleistungen",
    // label: "Handwerkgewerbe & Dienstleistungen",
    path: "/tradeServices",
    subcategories: ["Lebensmittel", "Imkerei"],
  },
  {
    label: "Natur & Freizeit",
    path: "/leisure",
    subcategories: ["Wandern", "See"],
  },
  {
    label: "Verkehr & Infrastruktur",
    path: "/transport",
    subcategories: ["Bus", "Straßen"],
  },
  {
    label: "Bauland",
    path: "/bauLand",
    subcategories: [],
  },
];

function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const location = useLocation();

  const toggleExpand = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <BurgerMenuContainer>
      {isOpen ? (
        <CloseButton onClick={() => setIsOpen(false)}>
          <FaTimes />
        </CloseButton>
      ) : (
        <BurgerButton onClick={() => setIsOpen(true)}>
          <FaBars />
        </BurgerButton>
      )}

      {isOpen && (
        <ModalOverlay onClick={() => setIsOpen(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <MenuList>
              {menuItems.map((item, index) => {
                const isActive = location.pathname === item.path;
                const hasSub = item.subcategories.length > 0;

                return (
                  //     <MenuItem key={item.label} $active={isActive}>
                  //     <MenuItemLabel $active={isActive} as={Link} to={item.path}>
                  //       {item.label}
                  //     </MenuItemLabel>
                  //     {hasSub && (
                  //       <MenuItemArrow $active={isActive} onClick={(e) => {
                  //         e.stopPropagation();
                  //         toggleExpand(index);
                  //       }}>
                  //         {expandedIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                  //       </MenuItemArrow>
                  //     )}
                  //   </MenuItem>

                  <MenuItem key={item.label} $active={isActive}>
                    <MenuItemLabel
                      to={item.path}
                      $active={isActive}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </MenuItemLabel>

                    {hasSub && (
                      <MenuItemArrow
                        $active={isActive}
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleExpand(index);
                        }}
                      >
                        {expandedIndex === index ? (
                          <FaChevronUp />
                        ) : (
                          <FaChevronDown />
                        )}
                      </MenuItemArrow>
                    )}
                  </MenuItem>
                );
              })}
            </MenuList>
          </ModalContent>
        </ModalOverlay>
      )}
    </BurgerMenuContainer>
  );
}

export default BurgerMenu;
