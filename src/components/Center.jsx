import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import MicNoneIcon from "@mui/icons-material/MicNone";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";

const Center = () => {
  return (
    <div className="cen-container">
      <div className="img-container">
        <img
          src="https://www.google.com/logos/doodles/2022/celebrating-maria-telkes-6753651837109453-6752733080598062-cst.gif"
          alt="img"
        />
      </div>

      <div className="search">
        <span className="icon">
          <SearchIcon />
        </span>
        <span>
          <input type="text" />
        </span>
        <span className="icon">
          <MicNoneIcon />
        </span>
        <span className="icon">
          <PhotoCameraIcon />
        </span>
      </div>

      <div className="buttons">
        <input
          className="but"
          value="I'm Feeling Lucky"
          aria-label="I'm Feeling Lucky"
          name="btnI"
          type="submit"
        />
        <input
          className="but"
          value="Google Search"
          aria-label="Google Search"
          name="btn2"
          type="submit"
        />
      </div>

      <div className="g-links">
        <div id="SIvCob">
          Google offered in:{" "}
          <a href="https://www.google.com/setprefs?sig=0_kb8RKehJRZUTo-_R0R0xQ_5gO60%3D&amp;hl=hi&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwjc5NrKpfT7AhUHhVYBHcV0A0IQ2ZgBCBQ">
            हिन्दी
          </a>{" "}
          <a href="https://www.google.com/setprefs?sig=0_kb8RKehJRZUTo-_R0R0xQ_5gO60%3D&amp;hl=bn&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwjc5NrKpfT7AhUHhVYBHcV0A0IQ2ZgBCBU">
            বাংলা
          </a>{" "}
          <a href="https://www.google.com/setprefs?sig=0_kb8RKehJRZUTo-_R0R0xQ_5gO60%3D&amp;hl=te&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwjc5NrKpfT7AhUHhVYBHcV0A0IQ2ZgBCBY">
            తెలుగు
          </a>{" "}
          <a href="https://www.google.com/setprefs?sig=0_kb8RKehJRZUTo-_R0R0xQ_5gO60%3D&amp;hl=mr&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwjc5NrKpfT7AhUHhVYBHcV0A0IQ2ZgBCBc">
            मराठी
          </a>{" "}
          <a href="https://www.google.com/setprefs?sig=0_kb8RKehJRZUTo-_R0R0xQ_5gO60%3D&amp;hl=ta&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwjc5NrKpfT7AhUHhVYBHcV0A0IQ2ZgBCBg">
            தமிழ்
          </a>{" "}
          <a href="https://www.google.com/setprefs?sig=0_kb8RKehJRZUTo-_R0R0xQ_5gO60%3D&amp;hl=gu&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwjc5NrKpfT7AhUHhVYBHcV0A0IQ2ZgBCBk">
            ગુજરાતી
          </a>{" "}
          <a href="https://www.google.com/setprefs?sig=0_kb8RKehJRZUTo-_R0R0xQ_5gO60%3D&amp;hl=kn&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwjc5NrKpfT7AhUHhVYBHcV0A0IQ2ZgBCBo">
            ಕನ್ನಡ
          </a>{" "}
          <a href="https://www.google.com/setprefs?sig=0_kb8RKehJRZUTo-_R0R0xQ_5gO60%3D&amp;hl=ml&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwjc5NrKpfT7AhUHhVYBHcV0A0IQ2ZgBCBs">
            മലയാളം
          </a>{" "}
          <a href="https://www.google.com/setprefs?sig=0_kb8RKehJRZUTo-_R0R0xQ_5gO60%3D&amp;hl=pa&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwjc5NrKpfT7AhUHhVYBHcV0A0IQ2ZgBCBw">
            ਪੰਜਾਬੀ
          </a>{" "}
        </div>
      </div>
    </div>
  );
};

export default Center;
