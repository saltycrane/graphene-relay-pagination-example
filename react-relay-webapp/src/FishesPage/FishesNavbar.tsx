import {
  Container,
  Nav,
  NavItem,
  NavLink,
  Navbar as ReactstrapNavbar,
  NavbarBrand,
} from "reactstrap";

export default function FishesNavbar() {
  return (
    <ReactstrapNavbar color="light" light>
      <Container>
        <NavbarBrand tag="span">
          Graphene Relay Artsy Pagination Example
        </NavbarBrand>
        <Nav navbar>
          <NavItem>
            <NavLink href="https://github.com/saltycrane/graphene-relay-pagination-example/tree/artsy-example">
              GitHub
            </NavLink>
          </NavItem>
        </Nav>
      </Container>
    </ReactstrapNavbar>
  );
}
