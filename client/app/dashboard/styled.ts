import styled from "styled-components";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 24px;
`;

const Header = styled.div`
  margin-bottom: 32px;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 4px;
`;

const Subtitle = styled.p`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.textMuted};
`;

const RangeSelector = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
`;

const RangeButton = styled.button<{ $isActive: boolean }>`
  padding: 8px 20px;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  border: 1px solid
    ${({ theme, $isActive }) =>
      $isActive ? theme.colors.primary : theme.colors.secondary};
  background: ${({ theme, $isActive }) =>
    $isActive ? theme.colors.primary : theme.colors.secondary};
  color: ${({ theme, $isActive }) =>
    $isActive ? theme.colors.secondary : theme.colors.textMuted};
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme, $isActive }) =>
      $isActive ? theme.colors.secondary : theme.colors.primary};
  }
`;

const AvgTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 16px;
`;

const AvgContainer = styled.div`
  display: flex;
  gap: 24px;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 16px;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  justify-content: center;
`;

const AvgItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AvgValue = styled.span`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
`;

const AvgLabel = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textMuted};
`;

export {
  Container,
  Header,
  Title,
  Subtitle,
  RangeSelector,
  RangeButton,
  AvgTitle,
  AvgContainer,
  AvgItem,
  AvgValue,
  AvgLabel,
};
