import React, { Suspense } from "react";
import Loader from "./Loader";
const Navbar = React.lazy(() => import("./Navbar"));
const Form = React.lazy(() => import("./Form"));

function Main() {
  return (
    <Suspense fallback={<Loader />}>
      <Navbar />
      <Form />
    </Suspense>
  );
}

export default Main;
