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
          <NavigationLink
            activeStyle={{
              color: `${colors.greenLight}`,
              transition: "all 0.1s linear",
            }}
            to={"/home/main"}
            exact
          >
            <IconHome />
            <span>Hjem</span>
          </NavigationLink>
        </NavigationEl>
        <NavigationEl>
          <NavigationLink
            activeStyle={{
              color: `${colors.greenLight}`,
              transition: "all 0.1s linear",
            }}
           to="/home/administratorer"
          >
            <IconAdmins />
            <span>Adminitratorer</span>
          </NavigationLink>
        </NavigationEl>
        <NavigationEl>
          <NavigationLink
            activeStyle={{
              color: `${colors.greenLight}`,
              transition: "all 0.1s linear",
            }}
            to={'/home/brukere'}
          >
            <IconUsers />
            <span>Brukere</span>
          </NavigationLink>
        </NavigationEl>
        <NavigationEl>
          <NavigationLink
            activeStyle={{
              color: `${colors.greenLight}`,
              transition: "all 0.1s linear",
            }}
            to={'/home/enheter'}
          >
            <IconUnits />
            <span>Enheter</span>
          </NavigationLink>
        </NavigationEl>
        <NavigationEl>
          <NavigationLink
            activeStyle={{
              color: `${colors.greenLight}`,
              transition: "all 0.1s linear",
            }}
            to={'/home/profil'}
          >
            <IconProfile />
            <span>Profil</span>
          </NavigationLink>
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
  transition: all 0.2s linear;
  &:hover {
    background-color: ${colors.greyLight};
  }
`;

const IconHome = styled(Home)`
  width: 3rem;
  margin: 0 2rem 0 0.75rem;
`;
const IconAdmins = styled(Admins)`
  width: 3rem;
  margin: 0 2rem 0 0.75rem;
`;

const IconUsers = styled(Users)`
  width: 3rem;
  margin: 0 2rem 0 0.75rem;
`;

const IconUnits = styled(Units)`
  width: 3rem;
  margin: 0 2rem 0 0.75rem;
`;

const IconProfile = styled(Profile)`
  width: 3rem;
  margin: 0 2rem 0 0.75rem;
`;

const NavigationLink = styled(NavLink)`
  text-decoration: none;
  font-family: "Roboto";
  font-size: 0.85rem;
  font-weight: 100;
  color: ${colors.white};
  padding: 1rem 0 1rem 0;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export default Sidebar;
