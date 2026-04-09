'use client';

import { Avatar, Logo, LogoIcon, LogoText, Nav, NavRight, SessionButton, UserName } from './styled';
import { useAuth } from '@/context/AuthContext';
import { usePathname } from 'next/navigation';


export default function Navbar() {
  const pathname = usePathname();
  const { user, logout, loading } = useAuth();

  if (pathname === '/') return null;
  if (loading) return null;
  return (
    <Nav>
      <Logo href="/dashboard">
        <LogoIcon>🧠</LogoIcon>
        <div>
          <LogoText>Mental Health Tracker App</LogoText>
        </div>
      </Logo>

      {user && (
        <NavRight>
          <UserName>{user.name}</UserName>
          {user?.picture && <Avatar src={user.picture} alt={user.name} />}
          <SessionButton onClick={logout}>Sign out</SessionButton>
        </NavRight>
      )}
    </Nav>
  );
}