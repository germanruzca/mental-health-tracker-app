import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.primaryLight};
`;

const WelcomeText = styled.span`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.primaryDark};
`;

const TitleAppName = styled.h1`
  font-size: 40px;
  color: ${({ theme }) => theme.colors.primary};
`;

const Description = styled.div`
  margin-bottom: 32px;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.textMuted};
`;

const SessionButton = styled.div`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  padding: 6px 12px;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  transition: background 0.2s;
  background-color: ${({ theme }) => theme.colors.primaryLight};
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primaryLighter};
  }
`;

export { MainContainer, WelcomeText, TitleAppName, Description, SessionButton };
