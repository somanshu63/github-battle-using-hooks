import { WiDaySunny, WiMoonWaxingCrescent5 } from "react-icons/wi";
import { NavLink } from "react-router-dom";
function Header(props) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex justify-start items-center">
        {/* popular button */}
        <NavLink to="/">
          <button
            onClick={() => {
              props.toggleIsActive("popular");
            }}
            className={`text-lg font-bold ${
              !props.isDay ? "light-gray" : "text-black"
            } capitalize m-2 ${props.isActive === "popular" ? "active" : ""}`}
          >
            popular
          </button>
        </NavLink>
        {/* battle button */}
        <NavLink to="/battle">
          <button
            onClick={() => {
              props.toggleIsActive("battle");
            }}
            className={`text-lg font-bold ${
              !props.isDay ? "light-gray" : "text-black"
            } capitalize m-2 ${props.isActive === "battle" ? "active" : ""}`}
          >
            battle
          </button>
        </NavLink>
      </div>

      {/* day/night button */}
      <button
        onClick={() => {
          props.toggleIsDay();
        }}
        className={`text-4xl capitalize m-3 ${
          !props.isDay ? "light-gray" : "text-black"
        }`}
      >
        {props.isDay ? <WiMoonWaxingCrescent5 /> : <WiDaySunny />}
      </button>
    </div>
  );
}
export default Header;
