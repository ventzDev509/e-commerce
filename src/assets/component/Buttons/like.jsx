import { useState } from "react";
import { BsFillHeartFill } from "react-icons/bs";
import "./css/like.css";
import { BsHeart } from "react-icons/bs";
// heartIcon.addEventListener("click", () => {
//     heartIcon.classNameList.toggle("liked");
//     if (heartIcon.classList.contains("liked")) {
//       likesAmount++;
//     } else {
//       likesAmount--;
//     }

//     likesAmountLabel.innerHTML = likesAmount;
//   });

function Like() {
  const [like, setLike] = useState(false);
  const Like = () => {
    setLike(!like)
  };
  return (
    <>
      <div className="like-button">
        <div className="heart-bg" onClick={Like}>
            <BsHeart className="like_heart"/>
          {/* <div className={like?"heart-icon liked":"heart-icon"} ></div> */}
        </div>
      </div>
    </>
  );
}

export default Like;
