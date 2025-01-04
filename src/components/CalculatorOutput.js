const CalculatorOutput = (props) => {
  return (
    <>
      <div className="mt-6 px-6 py-3 bg-gray-50 rounded-xl">
        {props.result > -1 && (
          <div className="text-green-500 font-semibold">
            Result : <span data-testid="result">{props.result}</span>
          </div>
        )}
        {props.error && (
          <div className="text-red-500 font-semibold">
            Error : <span data-testid="error">{props.error}</span>
          </div>
        )}
      </div>
    </>
  );
};

export default CalculatorOutput;
