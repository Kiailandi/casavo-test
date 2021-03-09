import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

const CustomLink = styled(Link)`
   padding: 5px;
`;

const NavWrapper = styled.div`
    display: flex;
    flex-direction: row;

`;

const NavLink = ({ page, selected }) => {
  const title = page.charAt(0).toUpperCase() + page.slice(1).split(':')[0];

  return (
    <CustomLink to={`/${page}`} selected={selected}>
      {title}
    </CustomLink>
  );
};

const NavBar = () => {
  const page = useParams().page || 'home';

  return (
    <NavWrapper>
      <NavLink page='home' selected={page === 'home'} />
      <NavLink page='create' selected={page === 'create'} />
      <NavLink page='edit:id' selected={page === 'edit'} />
    </NavWrapper>
  );
};

export default NavBar;