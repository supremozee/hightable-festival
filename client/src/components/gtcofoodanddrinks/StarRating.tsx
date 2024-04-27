import { AiFillStar } from 'react-icons/ai';

const StarRating = ({ count, value, inactiveColor = '#ddd', size = 24, activeColor = '#f00' }: {count:any, value?:any, inactiveColor?:any, size?:any, activeColor?:any}) => {
  const stars = Array.from({ length: count }, () => <AiFillStar key={count} />);

  return (
    <>
      {stars.map((s, index) => {
        let style = inactiveColor;
        if (index < value) {
          style = activeColor;
        }
        return (
          <span key={index} style={{ color: style, width: size, height: size, fontSize: size }}>
            {s}
          </span>
        );
      })}
    </>
  );
};

export default StarRating;
