import Sidebar from "./Sidebar";
import styled from "styled-components";

const Layout = ({ children }) => {
  return (
    <MainViewWrapper>
      <Sidebar />
      {children}
    </MainViewWrapper>
  );
};

const MainViewWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export default Layout;
