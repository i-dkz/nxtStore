import StarRating from "./StarRating";

const reviews = [
  {
    title: "so good!",
    rating: 5,
    user: "jason405",
    review: "i loved this product so much!",
  },
  {
    title: "i'd buy another one",
    rating: 4,
    user: "BigDog99",
    review: "it got the job done, i'm happy",
  },
  {
    title: "wow!",
    rating: 5,
    user: "ginadarling456",
    review: "it arrived right when expected, great product!",
  },
  {
    title: "not bad",
    rating: 3.5,
    user: "dudeguy34",
    review: "it has most of the things i need, but the battery lid fell off",
  },
];

const Review = () => {
  return (
    <>
      {reviews.map((review) => (
        <div className="flex flex-col gap-1 mb-10">
          <h3 className="font-bold text-base">{review.title}</h3>
          <div className="flex gap-3">
              <StarRating rating={review.rating} />
              {review.user}
          </div>
          {review.review}
        </div>
      ))}
    </>
  );
};

export default Review;
