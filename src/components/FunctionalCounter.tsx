interface IProps {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

const FunctionalCounter = ({ count, setCount }: IProps) => {
  return (
    <div>
      <h2>Count: {count}</h2>
      <button
        onClick={() => setCount((pre) => pre + 1)}
        className="border p-1 rounded-md"
      >
        Increase
      </button>
    </div>
  );
};

export default FunctionalCounter;
