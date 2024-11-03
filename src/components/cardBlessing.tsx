interface CardProps {
  name: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ name, description }) => {
  return (
    <div className="w-80 bg-sky-100 shadow-lg rounded-lg overflow-hidden mb-2 transition-transform duration-300 hover:scale-105 hover:shadow-xl max-h-fit">
      <div className="p-4">
        <p className="text-left text-gray-500 text-sm leading-relaxed break-words pr-2 indent-4 "> {description}</p>
        <div className="flex items-end justify-end mt-2 ">
          <p className="text-sm text-gray-700 break-words pr-2">{`From : ${name}`}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
