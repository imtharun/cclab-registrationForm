import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import "atropos/css";
import Atropos from "atropos/react";
import { init } from "ityped";
import TextareaAutosize from "react-textarea-autosize";

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

  const [isName, setIsName] = useState(false);
  const [isRollno, setIsRollno] = useState(false);
  const [isPhoneno, setIsPhoneno] = useState(false);

  useEffect(() => {
    init(typeRef.current, {
      showCursor: true,
      backSpeed: 60,
      backDelay: 2000,
      strings: ["Do register soon!", "Registrations are closing!"],
    });
  }, []);

  useEffect(() => {
    if (!setName.match("^[a-zA-Z_ .]*$")) {
      setIsName(true);
    } else {
      setIsName(false);
    }
  }, [setName]);

  useEffect(() => {
    if (!setPhoneno.match(/^(\+\d{1,3}[- ]?)?\d{10}$/)) {
      if (setPhoneno === "") {
        setIsPhoneno(false);
        return;
      }
      setIsPhoneno(true);
    } else {
      setIsPhoneno(false);
    }
  }, [setPhoneno]);

  useEffect(() => {
    console.log("Inside useEffect");
    console.log(
      "First regex : " + !setRollno.match("[2][1][A-Z||a-z][0-9]{3}")
    );
    console.log(
      "Second regex: " + !setRollno.match("[2][1][A-Z||a-z]{2}[0-9]{2}")
    );
    if (
      !setRollno.match("[2][1][A-Z||a-z][0-9]{3}$") &&
      !setRollno.match("[2][1][A-Z||a-z]{2}[0-9]{2}$")
    ) {
      if (setRollno === "") {
        setIsRollno(false);
        return;
      }
      setIsRollno(true);
    } else {
      setIsRollno(false);
    }
  }, [setRollno]);

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
      className="font-Mono bg-grad w-full  flex justify-center items-center py-20 px-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.form
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        onSubmit={submitHandler}
        className="bg-white shadow-2xl  w-full rounded-xl text-black max-w-xl relative border-none"
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

          <div className="text-2xl h-10 my-11 sixTen:my-9 font-bold text-[#013A63] transition-all ease-in-out duration-300">
            <span ref={typeRef} className="smooth"></span>
          </div>

          <motion.div className="relative mb-4" variants={item}>
            <input
              ref={nameRef}
              value={setName}
              type="text"
              onChange={() => setNameHandler(nameRef.current.value)}
              placeholder="Name"
              required
              className={`bg-transparent relative font-medium outline-none focus:outline-none w-full mb-6 rounded-2xl bg-gray-50 p-3 ring-2 ${
                isName ? "ring-red-500" : "ring-gray-200"
              } border-2 border-transparent`}
            />
            {isName && (
              <span className="text-red-500 font-medium absolute right-2 top-[3.8rem] ">
                Invalid Name
              </span>
            )}
          </motion.div>

          <motion.div className="relative mb-4" variants={item}>
            <input
              type="text"
              ref={rollnoRef}
              value={setRollno}
              onChange={() => setRollnoHandler(rollnoRef.current.value)}
              placeholder="Rollno"
              required
              className={`bg-transparent relative font-medium outline-none focus:outline-none w-full mb-6 rounded-2xl bg-gray-50 p-3 ring-2 ${
                isRollno ? "ring-red-500" : "ring-gray-200"
              } border-2 border-transparent`}
            />
            {isRollno && (
              <span className="text-red-500 font-medium absolute right-2 top-[3.8rem] ">
                Invalid Rollno
              </span>
            )}
          </motion.div>

          <motion.div variants={item} className="relative mb-4">
            <input
              ref={phonenoRef}
              value={setPhoneno}
              onChange={() => setPhonenoHandler(phonenoRef.current.value)}
              type="text"
              required
              placeholder="Phone number"
              className={`bg-transparent relative font-medium outline-none focus:outline-none w-full mb-6 rounded-2xl bg-gray-50 p-3 ring-2 ${
                isPhoneno ? "ring-red-500" : "ring-gray-200"
              } border-2 border-transparent`}
            />
            {isPhoneno && (
              <span className="text-red-500 font-medium absolute right-2 top-[3.8rem] ">
                Invalid Phone Number
              </span>
            )}
          </motion.div>

          <motion.div variants={item} className="relative mb-4">
            <input
              ref={deptRef}
              value={setDepartment}
              onChange={() => setDepartmentHandler(deptRef.current.value)}
              type="text"
              required
              placeholder="Department (Ex. IT, CSE)"
              className="font-medium bg-transparent outline-none focus:outline-none w-full relative mb-6 p-3 rounded-2xl bg-gray-50 border-2 border-transparent ring-2 ring-gray-200"
            />
          </motion.div>

          <motion.div variants={item} className="relative mb-4">
            <TextareaAutosize
              ref={interestRef}
              onChange={() => {
                setInterestHandler(interestRef.current.value);
              }}
              minRows={3}
              placeholder="Interests"
              maxRows={12}
              className="relative rounded-2xl bg-gray-50 p-3 ring-2 ring-gray-200 w-full font-medium bg-transparent outline-none focus:outline-none resize-none border-2 border-transparent"
              required
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

//  <textarea
//   ref={interestRef}
//   value={setInterest}
//   onChange={() => setInterestHandler(interestRef.current.value)}
//   type="text"
//   placeholder="Interests"
//   className="my-3 w-full font-medium border-none bg-transparent outline-none focus:outline-none min-h-fit"
//   rows={3}
// />
