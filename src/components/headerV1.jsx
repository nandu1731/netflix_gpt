import React from "react";
import { useNavigate } from "react-router-dom";

const HeaderV1 = () => {
  const navigate = useNavigate();
  return (
    <div className="w-8 h-7">
      <img
        src="https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2023.ico"
        alt="netflix_logo"
      />
    </div>
  );
};

export default HeaderV1;
