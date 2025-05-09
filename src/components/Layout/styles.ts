import styled from "styled-components";

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 100vh; 
`;

export const MainContent = styled.main`
  flex: 1;
  margin: 40px 60px;

  @media (max-width: 768px) {
    margin: 40px 30px;
  }
`;
