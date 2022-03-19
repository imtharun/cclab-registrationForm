import React, { useState, useRef } from "react";

function Form() {
  //Refs
  const nameRef = useRef("");
  const rollnoRef = useRef("");
  const phonenoRef = useRef("");
  const deptRef = useRef("");
  const interestRef = useRef("");

  // States
  const [setName, setNameHandler] = useState("");
  const [setRollno, setRollnoHandler] = useState("");
  const [setPhoneno, setPhonenoHandler] = useState("");
  const [setDepartment, setDepartmentHandler] = useState("");
  const [setInterest, setInterestHandler] = useState("");

  // Submit handler
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(setName, setRollno, setPhoneno, setDepartment, setInterest);
  };

  return (
    <div className="font-Mons bg-grad w-full text-white flex justify-center items-center py-20 px-5">
      <form
        onSubmit={submitHandler}
        className="bg-white w-full text-black px-6 pt-4 pb-10  max-w-xl sixTen:pt-4 sixTen:pb-10  sixTen:px-16 relative  border-none"
      >
        <div className="absolute -top-5 right-0 z-10 sixTen:right-8">
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
        </div>
        <h1 className="text-xl my-5 font-bold">Register !</h1>

        <div className="w-full mb-6 rounded-md bg-gray-50 px-4 ring-2 ring-gray-200">
          <input
            ref={nameRef}
            value={setName}
            type="text"
            onChange={() => setNameHandler(nameRef.current.value)}
            placeholder="Name"
            className="my-3 w-full border-none bg-transparent outline-none focus:outline-none"
          />
        </div>

        <div className="w-full mb-6 rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200">
          <input
            type="text"
            ref={rollnoRef}
            value={setRollno}
            onChange={() => setRollnoHandler(rollnoRef.current.value)}
            placeholder="Rollno"
            className="my-3 w-full border-none bg-transparent outline-none focus:outline-none"
          />
        </div>

        <div className="w-full mb-6 rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200">
          <input
            ref={phonenoRef}
            value={setPhoneno}
            onChange={() => setPhonenoHandler(phonenoRef.current.value)}
            type="text"
            placeholder="Phone number"
            className="my-3 w-full border-none bg-transparent outline-none focus:outline-none"
          />
        </div>

        <div className="w-full mb-6 rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200">
          <input
            ref={deptRef}
            value={setDepartment}
            onChange={() => setDepartmentHandler(deptRef.current.value)}
            type="text"
            placeholder="Department"
            className="my-3 w-full border-none bg-transparent outline-none focus:outline-none"
          />
        </div>

        <div className="w-full mb-6 rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200">
          <textarea
            ref={interestRef}
            value={setInterest}
            onChange={() => setInterestHandler(interestRef.current.value)}
            type="text"
            placeholder="Interest"
            className="my-3 w-full border-none bg-transparent outline-none focus:outline-none"
          />
        </div>
        <button className="w-full border-2 border-transparent mb-6 rounded-2xl bg-[#176698] py-3 font-bold text-white hover:border-[#176698] hover:border-2 hover:bg-white hover:text-[# #e5e7eb] transition-colors">
          Submit
        </button>
        <div className="absolute bottom-0 left-0 w-full -z-2">
          <svg
            // width="677"
            // height="197"
            viewBox="0 0 677 197"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M676 73.1658C555.591 127.759 101.5 98.0251 1 2V196H676V73.1658Z"
              fill="#176698"
              stroke="#176698"
            />
          </svg>
        </div>
      </form>
    </div>
  );
}

export default Form;
