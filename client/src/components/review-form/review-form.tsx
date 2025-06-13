import { useState, ChangeEvent, FormEvent, Fragment } from "react";

function ReviewForm() {
    const [rating, setRating] = useState('');
    const [review, setReview] = useState('');

    const handleRatingChange = (evt: ChangeEvent<HTMLInputElement>) => {
        setRating(evt.target.value);
    };

    const handleReviewChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
        setReview(evt.target.value);
    };

    const handleSubmit = (evt: FormEvent) => {
        evt.preventDefault();
    // отправка на сервер или глушилка console.log({ rating, review });
  };
  return (
        <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {[5, 4, 3, 2, 1].map((star) => (
          <Fragment key={star}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={star}
              id={`${star}-stars`}
              type="radio"
              checked={rating === String(star)}
              onChange={handleRatingChange}
            />
            <label
              htmlFor={`${star}-stars`}
              className="reviews__rating-label form__rating-label"
              title={
                star === 5
                  ? "perfect"
                  : star === 4
                  ? "good"
                  : star === 3
                  ? "not bad"
                  : star === 2
                  ? "badly"
                  : "terribly"
              }
            >
                <svg className="form__star-image" width="37" height="33">
                    <use href="#icon-star"></use>
                </svg>
            </label>
            </Fragment>
        ))}
              </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={review}
        onChange={handleReviewChange}
      ></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={review.length < 50 || !rating}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export { ReviewForm };