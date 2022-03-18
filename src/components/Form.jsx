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
        className="bg-white w-full text-black px-6 pt-4 pb-10  rounded-2xl max-w-xl sixTen:pt-4 sixTen:pb-10  sixTen:px-16 relative"
      >
        <div className="absolute -top-12 -right-7 z-10">
          {/* <svg>
            <path
              d="M58.7763 66.3158L199.999 0L82.8875 78.9474L151.777 120L199.999 0L0 37.8947L58.7763 66.3158Z"
              fill="#7383BF"
            />
            <path
              d="M82.8886 78.9474L69.3277 120L58.7773 66.3158L200 0L82.8886 78.9474Z"
              fill="#556080"
            />
            <path
              d="M82.8872 78.9475L69.1094 120L109.919 95.0559L82.8872 78.9475Z"
              fill="#464F66"
            />
          </svg> */}
        </div>
        <h1 className="text-xl my-5 font-bold bg-green-500">Register !</h1>

        <div className="w-full mb-6 rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200">
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
        <button className="w-full border-2 border-transparent mb-6 rounded-2xl bg-[#176698] py-3 font-bold text-white hover:border-[#e5e7eb] hover:border-2 hover:bg-white hover:text-[#176698] transition-colors">
          Submit
        </button>
        <div className="absolute bottom-0 z-10">
          {/* <svg>
            <path
              d="M676 73.1658C555.591 127.759 101.5 98.0251 1 2V196H676V73.1658Z"
              fill="#176698"
              stroke="#176698"
            />
          </svg> */}
        </div>
      </form>
    </div>
  );
}

export default Form;
