import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';

interface Props {
    rating: number;
}

const StarRating = ({ rating }: Props) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (rating >= i + 1) {
      stars.push(<FaStar key={i}  />);
    } else if (rating >= i + 0.5) {
      stars.push(<FaStarHalfAlt key={i}  />);
    } else {
      stars.push(<FaRegStar key={i}  />);
    }
  }

  return <div className="flex items-center">{stars}</div>;
};

export default StarRating;
