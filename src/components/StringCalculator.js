import { useState } from "react";
import CalculatorOutput from "./CalculatorOutput";

const StringCalculator = () => {
  const [inputNumbers, setInputNumbers] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const onInputNumber = (e) => {
    e.preventDefault();
    setInputNumbers(e.target.value);
    setResult("");
    setError("");
  };
  const submitForm = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center bg-gray-100">
        <div className="p-6 bg-white rounded-lg shadow  w-full md:max-w-[420px]">
          <h1 className="font-bold text-xl text-center">String Calculator</h1>
          <form
            className="mt-6 flex flex-col items-center justify-center"
            onSubmit={submitForm}
          >
            <div>
              <label for="input-numbers">Enter numbers</label>
              <input
                id="input-numbers"
                className="mt-2 border rounded mb-4 px-6 py-2 w-full"
                type="text"
                name="numbers"
                placeholder="e.g. 1,2 or //;\n1;2"
                value={inputNumbers}
                onInput={onInputNumber}
              />
            </div>
            <button
              disabled={!inputNumbers}
              className="mx-auto bg-blue-500 hover:bg-blue-700 px-6 py-2 rounded-full text-white text-base font-bold shadow disabled:bg-gray-400 disabled:cursor-not-allowed"
              type="submit"
            >
              Calculate
            </button>
          </form>
          {(result || error) && (
            <CalculatorOutput result={result} error={error} />
          )}
        </div>
      </div>
    </>
  );
};
export default StringCalculator;
