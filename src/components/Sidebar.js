import styled from "styled-components";
import { colors, fonts } from "../styles/variables";
import paths from "../navigation/paths";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <SideBarNavigation>
      <ul>
        <li>
          <NavigationElement to={paths.home}>Hjem</NavigationElement>
        </li>
        <li>
          <NavigationElement to={paths.admins}>
            Adminitratorer
          </NavigationElement>
        </li>
        <li>
          <NavigationElement to={paths.users}>Brukere</NavigationElement>
        </li>
        <li>
          <NavigationElement to={paths.units}>Enheter</NavigationElement>
        </li>
        <li>
          <NavigationElement to={paths.profile}>Profil</NavigationElement>
        </li>
      </ul>
    </SideBarNavigation>
  );
};

const SideBarNavigation = styled.div`
  height: 92.5vh;
  width: 10vw;
  background-color: ${colors.blue};
`;

const NavigationElement = styled(Link)`
  color: ${colors.white};
  /* font-family: ${fonts.mainFont}; */
`;
export default Sidebar;
