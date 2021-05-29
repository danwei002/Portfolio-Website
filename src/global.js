import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.35s linear;
  }

  .navbar-item {
    color: ${({ theme }) => theme.navbar.textColor};
  }

  .hr-theme {
    background-color: ${({ theme }) => theme.text};
  }

  .project-tile {
    background-color: ${({ theme }) => theme.projects.tileColor};
  }

  .project-tile h1 {
      color: ${({ theme }) => theme.projects.h1Color};
  }

  .project-tile p {
      color: ${({ theme }) => theme.projects.pColor};;
  }

  .project-tile span {
      color: ${({ theme }) => theme.projects.footerColor};
  }

  .project-tile:hover {
      transition: all 0.27s ease-in-out;
      box-shadow: 0px 4px 8px rgba(38, 38, 38, 0.2);
      top: -7px;
      border: 1px solid ${({ theme }) => theme.projects.borderColor};
  }

  .contact-container {
    border-color: ${({ theme }) => theme.contact.borderColor};
    background-color: ${({ theme }) => theme.contact.bgColor};
  }

  .contact-content {
    color: ${({ theme }) => theme.contact.textColor};
  }

  .footer-icon {
    color: ${({ theme }) => theme.footer.iconColor};
  }
`