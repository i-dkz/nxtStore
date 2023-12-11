interface Props {
  stock: number;
}

const Stock = ({ stock }: Props) => {
  return (
    <div className="flex justify-center items-center border rounded-md w-auto h-[35px] px-2">
      {stock} left!
    </div>
  );
};

export default Stock;
