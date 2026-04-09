import styled from "styled-components";
import Link from "next/link";

const Nav = styled.nav`
  background: ${({ theme }) => theme.colors.primary};
  padding: 0 24px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
`;

const LogoIcon = styled.span`
  font-size: 26px;
`;

const LogoText = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primaryLight};
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

const NavRight = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.primaryLight};
`;

const UserName = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 600;
`;

const SessionButton = styled.button`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  border: none;
  cursor: pointer;
  padding: 6px 12px;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  transition: background 0.2s;
  background-color: ${({ theme }) => theme.colors.primaryLight};

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.text};
  }
`;

export {
  Nav,
  Logo,
  LogoIcon,
  LogoText,
  NavRight,
  Avatar,
  UserName,
  SessionButton,
};
