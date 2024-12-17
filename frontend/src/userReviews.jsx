import { useState } from "react";
import Rating from "@mui/material/Rating";
import "./styles/userReviews.css";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";

export default function UserReviews() {
  // Sample reviews data
  const reviews = [
    {
      name: "Jane Smith",
      rating: 4,
      text: "Amazing product! The quality is excellent, and it arrived right on time. Highly recommended for everyone! ❤",
      image: "/img/reviewImage2.jpg",
    },
    {
      name: "John Doe",
      rating: 5,
      text: "Very good product, premium quality, highly recommended!",
      image: "/img/reviewImage.png",
    },
    {
      name: "Robert Brown",
      rating: 5,
      text: "Great product. The product met my expectations, and I really liked the pricing too. 👏",
      image: "/img/reviewImage3.jpg",
    },
    {
      name: "Jonas Kahnwald",
      rating: 5,
      text: "Its beyond my expectations great quality and also warm for season! highly recommended! 😍",
      image: "/img/reviewImage4.png",
    },
  ];

  // State to track the current review
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transition, setTransition] = useState(""); // For smooth transitions

  // Function to handle the left arrow click
  function handlePrevious() {
    setTransition("slide-out-right");
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
      );
      setTransition("slide-in-left");
    }, 300); // Animation duration
  }

  // Function to handle the right arrow click
  function handleNext() {
    setTransition("slide-out-left");
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
      );
      setTransition("slide-in-right");
    }, 300); // Animation duration
  }

  return (
    <section
      id="userReviews"
      className="flex w-full justify-center items-center mt-8"
    >
      <div className={`reviewContent flex flex-col m-8 ml-24 ${transition}`} data-aos="fade-up">
        <h2 className="font font-semibold text-2xl mb-6">
          {reviews[currentIndex].name}
        </h2>
        <div className="reviewStars mb-2">
          <Rating name="read-only" value={reviews[currentIndex].rating} readOnly />
        </div>
        <p className="reviewText max-w-xl">{reviews[currentIndex].text}</p>
        <div className="reviewScrollButtons mt-3">
          <ArrowCircleLeftOutlinedIcon
            className="cursor-pointer"
            onClick={handlePrevious}
          />
          <ArrowCircleRightOutlinedIcon
            className="ml-4 cursor-pointer"
            onClick={handleNext}
          />
        </div>
      </div>
      <div className={`reviewImageBox ${transition}`} data-aos="fade-up">
        <img
          src={reviews[currentIndex].image}
          alt="review image"
          className="reviewImage w-[70vw] object-contain h-[80%]"
        />
      </div>
    </section>
  );
}
