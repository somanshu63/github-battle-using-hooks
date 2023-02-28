import { HiUsers } from "react-icons/hi";
import { FaFighterJet, FaTrophy } from "react-icons/fa";

function Instructions(props) {
  return (
    <div className="m-24 text-center">
      <h2 className={`text-4xl font-light ${props.isDay ? "" : "light-gray"}`}>
        Instructions
      </h2>
      <div className="flex justify-center my-8">
        <div className="w-80 h-80 flex flex-col justify-start items-center">
          <h3
            className={`text-27 mb-2 font-light ${
              props.isDay ? "" : "light-gray"
            }`}
          >
            Enter two Github users
          </h3>
          <div
            className={`flex justify-center items-center h-56 w-56 ${
              props.isDay ? "bg-gray" : "bg-gray2"
            } admin`}
          >
            <HiUsers className="text-9rem" />
          </div>
        </div>
        <div className="w-80 h-80 flex flex-col justify-start items-center">
          <h3
            className={`text-27 mb-2 font-light ${
              props.isDay ? "" : "light-gray"
            }`}
          >
            Battle
          </h3>
          <div
            className={`flex justify-center items-center h-56 w-56 ${
              props.isDay ? "bg-gray" : "bg-gray2"
            } gray`}
          >
            <FaFighterJet className="text-9rem" />
          </div>
        </div>
        <div className="w-80 h-80 flex flex-col justify-start items-center">
          <h3
            className={`text-27 mb-2 font-light ${
              props.isDay ? "" : "light-gray"
            }`}
          >
            See the winner
          </h3>
          <div
            className={`flex justify-center items-center h-56 w-56 ${
              props.isDay ? "bg-gray" : "bg-gray2"
            } yellow`}
          >
            <FaTrophy className="text-9rem" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Instructions;
