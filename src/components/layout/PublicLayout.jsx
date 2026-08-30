import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";
import PageTransition from "./PageTransition";

function PublicLayout() {
  return (
    <>
      <Navbar />

      <main>
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>

      <Footer />
    </>
  );
}

export default PublicLayout;