import React from "react";
import { useRouter } from "next/router";
const Review = () => {
  const router = useRouter();
  const { productId, reviewId } = router.query;

  return (
    <div>
      같은 폴더구조상안에서 query id를 가져온다 ? {productId} {reviewId}
    </div>
  );
};

export default Review;
