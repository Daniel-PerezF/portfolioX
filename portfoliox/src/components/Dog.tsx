import React, { useState } from "react";

const Dog = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div>
      <img
        src="/dog-svgrepo-com.svg"
        alt=""
        className="w-24 h-24 cursor-pointer"
        style={{ filter: isClicked ? "" : "none" }}
        onClick={handleClick}
      />
    </div>
  );
};

export default Dog;
