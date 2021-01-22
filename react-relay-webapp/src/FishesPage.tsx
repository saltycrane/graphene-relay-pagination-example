import {
  Container,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
} from "reactstrap";

import FishesTable from "./FishesTable";
import { withRelayEnvironment } from "./relay-utils";

function FishesPage() {
  return (
    <>
      <Navbar color="light" light>
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
      </Navbar>
      <Container className="py-5">
        <FishesTable />
      </Container>
    </>
  );
}

export default withRelayEnvironment(FishesPage);
