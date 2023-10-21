import { useState } from "react";
import "./index.css";

export default function App() {
  const [binary, setBinary] = useState("");
  const [decimal, setDecimal] = useState(0);
  const [answer, setAnswer] = useState(0);

  const onChangeBinary = (e: any) => {
    const inputValue = e.target.value;
    if (/^[01]*$/.test(inputValue)) {
      setBinary(inputValue);
    }
  };

  const onChangeDecimal = (e: any) => {
    const inputValue = e.target.value;
    if (/^[0-9]*$/.test(inputValue)) {
      setDecimal(inputValue);
    }
  };

  const convertBinToDec = () => {
    const decimalValue = parseInt(binary, 2);
    setAnswer(decimalValue.toString());
  };

  const convertDecToBin = () => {
    const binaryValue = Number(decimal).toString(2);
    setAnswer(binaryValue);
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <p className="font-bold text-2xl text-start mb-5">
        Binary to Decimal Converter
      </p>
      <div className="box-border p-10 border border-black w-3/6">
        <h1 className="text-center p-5 border border-black text-3xl font-bold">
          {answer}
        </h1>
        <div className="flex justify-between mt-5 w-full">
          <div className="flex flex-col w-2/5">
            <input
              className="border border-black p-2 "
              placeholder="Binary here"
              value={binary}
              onChange={onChangeBinary}
            />
            <button
              className="bg-blue-500 hover:bg-blue-600 transition-all text-white py-2 px-4 mt-5 text-sm"
              onClick={convertBinToDec}
            >
              Convert Binary
            </button>
          </div>
          <div className="flex flex-col w-2/5">
            <input
              className="border border-black p-2"
              placeholder="Decimal here"
              value={decimal}
              onChange={onChangeDecimal}
            />
            <button
              className="bg-blue-500 hover:bg-blue-600 transition-all text-white py-2 px-4 mt-5 text-sm"
              onClick={convertDecToBin}
            >
              Convert Decimal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
