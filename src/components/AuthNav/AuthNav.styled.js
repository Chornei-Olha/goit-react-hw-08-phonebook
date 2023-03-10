import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AuthNavigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavigationLink = styled(NavLink)`
  font-size: 20px;

  &.active {
    color: 	seagreen;
  }

  & + & {
    margin-left: 12px;
  }
`;
