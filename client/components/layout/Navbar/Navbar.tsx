'use client';

import Link from 'next/link';
import { Avatar, Logo, LogoIcon, LogoText, Nav, NavRight, SessionButton, UserName } from './styled';
import { useAuth } from '@/context/AuthContext';

export default function Navbar() {
  const { user, logout, loading } = useAuth();

  if (loading) return null;
  return (
    <Nav>
      <Logo href="/">
        <LogoIcon>🧠</LogoIcon>
        <div>
          <LogoText>Mental Health Tracker App</LogoText>
        </div>
      </Logo>

      {user ? (
        <NavRight>
          <UserName>{user.name}</UserName>
          {user?.picture && <Avatar src={user.picture} alt={user.name} />}
          <SessionButton onClick={logout}>Sign out</SessionButton>
        </NavRight>
      ) : (
        <NavRight>
          <SessionButton>
            <Link href="/login">Sign in</Link>
          </SessionButton>
        </NavRight>
      )}
    </Nav>
  );
}