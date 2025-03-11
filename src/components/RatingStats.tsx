import React from "react";
import { Progress } from "@material-tailwind/react";
import Rating from "@mui/material/Rating";
import { RatingStatType } from "../types/Auth";

interface RatingStatsPropType {
  productRating?: RatingStatType;
  farmerRating?: RatingStatType;
}

const RatingStats: React.FC<RatingStatsPropType> = ({
  productRating,
  farmerRating,
}) => {
  const ratingData = productRating || farmerRating;

  if (!ratingData || !ratingData.voteCount) {
    return <div>Loading...</div>;
  }

  const { rating, voteCount } = ratingData;
  const totalCount =
    (voteCount.five || 0) +
    (voteCount.four || 0) +
    (voteCount.three || 0) +
    (voteCount.two || 0) +
    (voteCount.one || 0);

  const getPercentage = (count: number) =>
    totalCount > 0 ? (count / totalCount) * 100 : 0;

  return (
    <div>
      <h1 className="text-lg font-bold">
        {productRating ? "Product" : "Farmer"}'s Rating
      </h1>
      <div className="flex items-center mt-1 gap-2">
        <Rating value={rating} precision={0.1} readOnly />
        <h3>{rating.toFixed(1)} out of 5</h3>
      </div>
      <p className="mt-3 text-sm text-gray-800">{totalCount} votes overall</p>
      <div className="flex flex-col gap-2 mt-4">
        {([5, 4, 3, 2, 1] as const).map((star) => (
          <div key={star} className="flex items-center gap-3">
            <h1 className="text-sm whitespace-nowrap">{star} stars</h1>
            <Progress value={getPercentage(voteCount[["five", "four", "three", "two", "one"][5 - star] as keyof typeof voteCount] || 0)} size="lg" color="amber" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} />
            <h1 className="text-sm">{voteCount[["five", "four", "three", "two", "one"][5 - star] as keyof typeof voteCount] || 0}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RatingStats;
