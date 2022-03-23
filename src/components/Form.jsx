import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import "atropos/css";
import Atropos from "atropos/react";
import { init } from "ityped";

function Form() {
  //Refs
  const nameRef = useRef("");
  const rollnoRef = useRef("");
  const phonenoRef = useRef("");
  const deptRef = useRef("");
  const interestRef = useRef("");
  const typeRef = useRef("");

  // States
  const [setName, setNameHandler] = useState("");
  const [setRollno, setRollnoHandler] = useState("");
  const [setPhoneno, setPhonenoHandler] = useState("");
  const [setDepartment, setDepartmentHandler] = useState("");
  const [setInterest, setInterestHandler] = useState("");

  useEffect(() => {
    init(typeRef.current, {
      showCursor: true,
      backSpeed: 60,
      backDelay: 2000,
      strings: ["Do register soon!", "Registrations are closing!"],
    });
  }, []);

  // Submit handler
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(setName, setRollno, setPhoneno, setDepartment, setInterest);
  };

  const list = {
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
    hidden: { opacity: 0 },
  };

  const item = {
    visible: {
      opacity: 1,
      transition: {},
    },
    hidden: { opacity: 0 },
  };

  const rocket = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      rotate: 0,
      transition: {
        duration: 2,
        delay: 1.5,
      },
    },
    hidden: { opacity: 0, x: -500, y: 500, rotate: -30 },
  };

  return (
    <motion.div
      className="font-Mono bg-grad w-full  text-white flex justify-center items-center py-20 px-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.form
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        onSubmit={submitHandler}
        className="bg-white shadow-2xl w-full rounded-md text-black max-w-xl relative border-none"
      >
        <motion.div
          className="px-6 pt-4 z-100 sixTen:pt-4 sixTen:px-16"
          initial="hidden"
          animate="visible"
          variants={list}
        >
          <motion.div
            className="absolute -top-5 right-0 sixTen:right-8"
            initial="hidden"
            animate="visible"
            variants={rocket}
          >
            <svg
              width="120"
              height="80"
              viewBox="0 0 120 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.3881 33.1579L99.9995 0L41.4437 39.4736L75.8883 59.9999L99.9995 0L0 18.9473L29.3881 33.1579Z"
                fill="#7383BF"
              />
              <path
                d="M41.4437 39.4736L34.6638 59.9999L29.3881 33.1579L99.9995 0L41.4437 39.4736Z"
                fill="#556080"
              />
              <path
                d="M41.4437 39.4736L34.5547 60L54.9596 47.5279L41.4437 39.4736Z"
                fill="#464F66"
              />
            </svg>
          </motion.div>

          <div className="text-2xl my-9 font-bold text-[#013A63]">
            <span ref={typeRef} className="smooth"></span>
          </div>

          <motion.div
            variants={item}
            className="w-full mb-6 rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200"
          >
            <input
              ref={nameRef}
              value={setName}
              type="text"
              onChange={() => setNameHandler(nameRef.current.value)}
              placeholder="Name"
              className="my-3 w-full border-none bg-transparent outline-none focus:outline-none"
            />
          </motion.div>

          <motion.div
            variants={item}
            className="w-full mb-6 rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200"
          >
            <input
              type="text"
              ref={rollnoRef}
              value={setRollno}
              onChange={() => setRollnoHandler(rollnoRef.current.value)}
              placeholder="Rollno"
              className="my-3 w-full border-none bg-transparent outline-none focus:outline-none"
            />
          </motion.div>

          <motion.div
            variants={item}
            className="w-full mb-6 rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200"
          >
            <input
              ref={phonenoRef}
              value={setPhoneno}
              onChange={() => setPhonenoHandler(phonenoRef.current.value)}
              type="text"
              placeholder="Phone number"
              className="my-3 w-full border-none bg-transparent outline-none focus:outline-none"
            />
          </motion.div>

          <motion.div
            variants={item}
            className="w-full mb-6 rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200"
          >
            <input
              ref={deptRef}
              value={setDepartment}
              onChange={() => setDepartmentHandler(deptRef.current.value)}
              type="text"
              placeholder="Department"
              className="my-3 w-full border-none bg-transparent outline-none focus:outline-none"
            />
          </motion.div>

          <motion.div
            variants={item}
            className="w-full mb-6 rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200"
          >
            <textarea
              ref={interestRef}
              value={setInterest}
              onChange={() => setInterestHandler(interestRef.current.value)}
              type="text"
              placeholder="Interests"
              className="my-3 w-full border-none bg-transparent outline-none focus:outline-none"
              rows={3}
            />
          </motion.div>
          <Atropos
            className="my-atropos"
            activeOffset={40}
            shadowScale={0}
            rotateTouch={true}
          >
            <motion.button
              className="w-full border-transparent rounded-2xl bg-[#176698] py-3 font-bold text-white hover:border-[#176698] border-2 hover:bg-white hover:text-[#176698] transition-colors"
              whileTap={{ scale: 0.95 }}
            >
              Submit
            </motion.button>
          </Atropos>
        </motion.div>

        <div className="w-full z-10 text-sm -mt-5 relative -bottom-1 rounded-md">
          <svg
            className="rounded-b-md"
            // width="677"
            // height="197"
            viewBox="0 0 670 195"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M676 73.1658C555.600 127 111 200 -1 2V196H676V73.1658Z"
              animate={{
                d: [
                  "M676 73.1658C555.600 150 123.5 110 -1 2V196H676V73.1658Z",
                  "M676 73.1658C555.600 100 100 100 -1 2V196H676V73.1658Z",
                  "M676 73.1658C555.600 10 100 200 -1 2V196H676V73.1658Z",
                  "M676 73.1658C555.600 70 120 250 -1 2V196H676V73.1658Z",
                  "M676 73.1658C555.600 100 120.5 200 -1 2V196H676V73.1658Z",
                  "M676 73.1658C555.600 150 101.5 200 -1 2V196H676V73.1658Z",
                  "M676 73.1658C555.600 145 108 200 -1 2V196H676V73.1658Z",
                  "M676 73.1658C555.600 135 139 200 -1 2V196H676V73.1658Z",
                  "M676 73.1658C555.600 200 140 100 -1 2V196H676V73.1658Z",
                  "M676 73.1658C555.600 100 120.5 200 -1 2V196H676V73.1658Z",
                  "M676 73.1658C555.600 150 101.5 200 -1 2V196H676V73.1658Z",
                ],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 20,
                times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
                type: "tween",
                ease: "easeInOut",
              }}
              fill="#176698"
              stroke="#176698"
            />
          </svg>
        </div>
      </motion.form>
    </motion.div>
  );
}

export default Form;
