'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MainContainer, Description, WelcomeText, SessionButton, TitleAppName } from './styled'

export default function Home() {
  return (
    <MainContainer>
      <div>
        <WelcomeText>Welcome to</WelcomeText>
        <TitleAppName>
          Mental Health Tracker App
        </TitleAppName>
      </div>
      <Description>Your feelings matter. Track them with care.</Description>
      <SessionButton>
        <Link href="/login">Sign in with</Link>
        <Image src="https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png" alt="Google Icon" width={20} height={20} />
      </SessionButton>
    </MainContainer>
  );
}
