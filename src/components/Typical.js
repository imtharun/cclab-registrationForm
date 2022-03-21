import React from "react";
import Typical from "react-typical";

class Typed extends React.Component {
  render() {
    return (
      <h1 className="text-2xl my-5 font-bold text-[#013A63] ">
        <Typical
          steps={[
            "Registrations are closing!",
            2000,
            "Do register soon!",
            2000,
          ]}
          loop={Infinity}
          wrapper="p"
        />
      </h1>
    );
  }
}

export default Typed;
