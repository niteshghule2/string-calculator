const CalculatorOutput = (props) => {
  return (
    <>
      <div className="mt-6 px-6 py-3 bg-gray-50 rounded-xl">
        {props.result && (
          <div className="text-green-500 font-semibold">
            Result : {props.result}
          </div>
        )}
        {props.error && (
          <div className="text-red-500 font-semibold">
            Error : {props.error}
          </div>
        )}
      </div>
    </>
  );
};

export default CalculatorOutput;
