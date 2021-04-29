import { Suspense } from "react";
import { RelayEnvironmentProvider } from "react-relay";
import { Container, Spinner } from "reactstrap";

import { environment } from "../relay";
import FishesMainContent from "./FishesMainContent";
import FishesNavbar from "./FishesNavbar";

function FishesPage() {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <FishesNavbar />
      <Container className="py-4">
        <Suspense
          fallback={
            <div>
              <Spinner color="secondary" size="sm" /> Loading...
            </div>
          }
        >
          <FishesMainContent />
        </Suspense>
      </Container>
    </RelayEnvironmentProvider>
  );
}

export default FishesPage;
