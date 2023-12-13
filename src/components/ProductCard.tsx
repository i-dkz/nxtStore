interface Props {
  title: string;
  description: string;
  thumbnail: string;
  price: number;
}

const Card = ({ title, description, thumbnail, price }: Props) => {
  return (
    <div className="flex flex-col gap-2 w-[380px] h-[400px] rounded-md border overflow-hidden">
      <img
        src={thumbnail}
        className="h-[200px] object-cover border-b"
        alt={title}
      />

      <div className="flex flex-col gap-3 p-4">
        <h1 className="text-xl font-bold">{title}</h1>
        <p>{description}</p>
        <p>${price}</p>
      </div>
    </div>
  );
};

export default Card;
