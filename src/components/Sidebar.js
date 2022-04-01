import styled from "styled-components";
import { colors, fonts } from "../styles/variables";
import { paths } from "../navigation/paths";
import { NavLink } from "react-router-dom";
import { ReactComponent as Home } from "../assets/icons/Home.svg";
import { ReactComponent as Admins } from "../assets/icons/Admins.svg";
import { ReactComponent as Users } from "../assets/icons/Users.svg";
import { ReactComponent as Units } from "../assets/icons/Units.svg";
import { ReactComponent as Profile } from "../assets/icons/Profile.svg";

const Sidebar = () => {
  return (
    <SideBarNavigation>
      <NavigationList>
        <NavigationEl>
          <IconHome />
          <LinkContainer>
            <NavigationLink
              activeStyle={{ color: `${colors.greenLight}` }}
              exact
              to={paths.home}
            >
              <LinkText>Hjem</LinkText>
            </NavigationLink>
          </LinkContainer>
        </NavigationEl>
        <NavigationEl>
          <IconAdmins />
          <LinkContainer>
            <NavigationLink
              activeStyle={{ color: `${colors.greenLight}` }}
              to={paths.admins}
            >
              <LinkText>Adminitratorer</LinkText>
            </NavigationLink>
          </LinkContainer>
        </NavigationEl>
        <NavigationEl>
          <IconUsers />
          <LinkContainer>
            <NavigationLink
              activeStyle={{ color: `${colors.greenLight}` }}
              to={paths.users}
            >
              <LinkText>Brukere</LinkText>
            </NavigationLink>
          </LinkContainer>
        </NavigationEl>
        <NavigationEl>
          <IconUnits />
          <LinkContainer>
            <NavigationLink
              activeStyle={{ color: `${colors.greenLight}` }}
              to={paths.units}
            >
              <LinkText>Enheter</LinkText>
            </NavigationLink>
          </LinkContainer>
        </NavigationEl>
        <NavigationEl>
          <IconProfile />
          <LinkContainer>
            <NavigationLink
              activeStyle={{ color: `${colors.greenLight}` }}
              to={paths.profile}
            >
              <LinkText>Profil</LinkText>
            </NavigationLink>
          </LinkContainer>
        </NavigationEl>
      </NavigationList>
    </SideBarNavigation>
  );
};

const SideBarNavigation = styled.nav`
  height: 92.5vh;
  width: 17.5vw;
  background-color: ${colors.blue};
`;

const NavigationList = styled.ul`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
`;

const NavigationEl = styled.li`
  padding: 1rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: ${colors.greyLight};
  }
`;

const IconHome = styled(Home)`
  width: 3rem;
`;
const IconAdmins = styled(Admins)`
  width: 3rem;
`;

const IconUsers = styled(Users)`
  width: 3rem;
`;

const IconUnits = styled(Units)`
  width: 3rem;
`;

const IconProfile = styled(Profile)`
  width: 3rem;
`;

const LinkContainer = styled.div`
  margin-left: 2rem;
  display: flex;
  justify-content: flex-start;
`;
const NavigationLink = styled(NavLink)`
  text-decoration: none;
  font-family: "Roboto";
  font-size: 0.85rem;
  font-weight: 100;
  color: ${colors.white};
`;

const LinkText = styled.p``;
export default Sidebar;
