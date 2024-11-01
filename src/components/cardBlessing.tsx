interface CardProps {
  name: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ name, description }) => {
  return (
    <div className="w-80 bg-gradient-to-t from-gray-200 to-sky-200 shadow-lg rounded-lg overflow-hidden mb-4 transition-transform duration-300 hover:scale-105 hover:shadow-xl max-h-fit">
      <div className="p-5">
        <p className="text-left text-gray-500 text-sm leading-relaxed break-words pr-2 indent-4 "> {description}</p>
        <div className="flex items-end justify-end mt-2 ">
          <p className="text-sm text-gray-700 break-words pr-2">{`From : ${name}`}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
