import Rating from "@mui/material/Rating";
import "./styles/userReviews.css";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";

export default function UserReviews() {
  return (
    <section
      id="userReviews"
      className="flex w-full justify-center items-center mt-8"
    >
      <div className="reviewContent flex flex-col m-8 ml-24">
        <h2 className="font font-semibold text-2xl mb-6">John Doe</h2>
        <div className="reviewStars mb-2">
          <Rating name="read-only" value={5} readOnly />
        </div>
        <p className="reviewText max-w-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          repudiandae deserunt aperiam nihil enim reiciendis a debitis natus
          tempore mollitia odio, fugiat ex iste, corporis, ut ratione temporibus
          nostrum magnam!
        </p>
        <div className="reviewScrollButtons mt-3">
          <ArrowCircleLeftOutlinedIcon className=" cursor-pointer"/>
          <ArrowCircleRightOutlinedIcon className="ml-4 cursor-pointer" />
        </div>
      </div>
      <div className="reviewImageBox">
        <img
          src="/img/reviewImage.png"
          alt="review image"
          className="reviewImage w-[70vw] object-contain h-[80%]"
        />
      </div>
    </section>
  );
}