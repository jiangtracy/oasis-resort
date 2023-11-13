import styled from "styled-components";

const StyledSideBar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4 rem;
  border-right: 1px solid var(--color-grey-100);
  /* span all the way */
  grid-row: 1 / -1;
`;

function Sidebar() {
  return <StyledSideBar>SIDEBAR</StyledSideBar>;
}

export default Sidebar;
