export const ItemCount = ({ count, handleCount }) => {
    return (
      <div className="flex mt-10 w-4/5 bg-gray-200 rounded">
        <button
          onClick={() => handleCount("minus")}
        >
          -
        </button>
        <span
          id="counter"
        >
          {count}
        </span>
        <button
          onClick={() => handleCount("plus")}
        >
          +
        </button>
      </div>
    );
  };
  