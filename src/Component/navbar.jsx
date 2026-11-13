
import React, { useState } from "react";

const menuItems = [
  {
    name: "HOME",
    link: "/",
    children: [
      { name: "Main Demo", link: "/" },
      { name: "Online Course", link: "/online-course" },
      { name: "University 01", link: "/university-01" },
      { name: "E-Learning", link: "/e-learning" },
      { name: "Distance Learning", link: "/distance-learning" },
      { name: "Personal Demo", link: "/personal-demo" },
      { name: "Online Training", link: "/online-training" },
      { name: "Online Learning", link: "/online-learning" },
      { name: "Kitchen Coach", link: "/kitchen-coach" },
      { name: "University 02", link: "/university-02" },
      { name: "Kindergarten 01", link: "/kindergarten-01" },
      { name: "Freelancing Course", link: "/freelancing-course" },
      { name: "Gym Coach", link: "/gym-coach" },
      { name: "Courses Archive", link: "/courses-archive" },
      { name: "Courses Hub", link: "/courses-hub" },
    ],
  },

  {
    name: "ABOUT",
    link: "/about",
    children: [
      { name: "About One", link: "/about" },
      { name: "About Two", link: "/about-two" },
    ],
  },

  {
    name: "COURSES",
    link: "/courses",
    children: [
      { name: "Courses One", link: "/courses" },
      { name: "Courses Two", link: "/courses-two" },
      { name: "Courses Three", link: "/courses-three" },
      { name: "Courses Four", link: "/courses-four" },
      { name: "Courses Five", link: "/courses-five" },
      { name: "Courses Single", link: "/course-single" },
    ],
  },

  {
    name: "PAGES",
    link: "#",
    children: [
      {
        name: "Team",
        children: [
          { name: "Team One", link: "/team" },
          { name: "Team Two", link: "/team-two" },
          { name: "Team Single", link: "/team-single" },
        ],
      },
      {
        name: "Event",
        children: [
          { name: "Event One", link: "/event" },
          { name: "Event Two", link: "/event-two" },
          { name: "Event Three", link: "/event-three" },
        ],
      },
      {
        name: "Gallery",
        children: [
          { name: "Gallery One", link: "/gallery" },
          { name: "Gallery Two", link: "/gallery-two" },
          { name: "Gallery Three", link: "/gallery-three" },
        ],
      },
      {
        name: "Shop",
        children: [
          { name: "Shop", link: "/shop" },
          { name: "Shop Single", link: "/shop-single" },
          { name: "Cart", link: "/cart" },
          { name: "Checkout", link: "/checkout" },
        ],
      },
      {
        name: "Others",
        children: [
          { name: "FAQ", link: "/faq" },
          { name: "404 Page", link: "/404" },
          { name: "Login", link: "/login" },
          { name: "Register", link: "/register" },
        ],
      },
    ],
  },

  {
    name: "BLOG",
    link: "/blog",
    children: [
      { name: "Blog", link: "/blog" },
      {
        name: "Blog Sidebar",
        children: [
          { name: "Blog Left Sidebar", link: "/blog-left" },
          { name: "Blog Right Sidebar", link: "/blog-right" },
        ],
      },
      {
        name: "Single Post",
        children: [
          { name: "Post Left Sidebar", link: "/post-left" },
          { name: "Post Right Sidebar", link: "/post-right" },
          { name: "Full Width Post", link: "/post-full" },
        ],
      },
    ],
  },

  {
    name: "CONTACT",
    link: "/contact",
    children: [
      { name: "Contact One", link: "/contact" },
      { name: "Contact Two", link: "/contact-two" },
      { name: "Contact Three", link: "/contact-three" },
      { name: "Contact Four", link: "/contact-four" },
    ],
  },
];

// Menu Item Component

function MenuItem({ item, closeMenu }) {
  const [open, setOpen] = useState(false);

  const hasChildren = !!item.children;

  return (
    <li
      className="nav-item"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className="nav-link-wrap">

        <a
          href={hasChildren ? "#" : item.link}
          className="nav-link"
          onClick={(e) => {
            if (hasChildren) {
              e.preventDefault();
              setOpen((prev) => !prev);
            } else {
              closeMenu();
            }
          }}
        >
          {item.name}
        </a>

        {hasChildren && (
          <button
            type="button"
            className="dropdown-toggle"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={`Toggle ${item.name}`}
          >
            {open ? "−" : "+"}
          </button>
        )}

      </div>

      {hasChildren && (
        <ul className={`dropdown-menu ${open ? "show" : ""}`}>
          {item.children.map((child, index) => (
            <MenuItem
              key={index}
              item={child}
              closeMenu={closeMenu}
            />
          ))}
        </ul>
      )}

    </li>
  );
}

// Main Navbar

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="educavo-header">

      <nav className="educavo-navbar">

        {/* Mobile Toggle */}

        <button
          className="mobile-toggle"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation Menu */}

        <ul className={`main-menu ${menuOpen ? "active" : ""}`}>

          {menuItems.map((item, index) => (
            <MenuItem
              key={index}
              item={item}
              closeMenu={closeMenu}
            />
          ))}

        </ul>

      </nav>

    </header>
  );
}

export default Navbar;
