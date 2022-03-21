import React from "react";
import Navbar from "./Navbar";
import Form from "./Form";
import { motion } from "framer-motion";

function Main() {
  return (
    <motion.div>
      <Navbar />
      <Form />
    </motion.div>
  );
}

export default Main;
