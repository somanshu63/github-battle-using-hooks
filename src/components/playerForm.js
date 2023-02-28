import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

function PlayerForm(props) {
  console.log(props);
  const [username1, setUsername1] = useState();
  const [username2, setUsername2] = useState();
  return (
    <div>
      <h2
        className={`text-3xl mb-8 text-center font-light ${
          props.isDay ? "" : "light-gray"
        }`}
      >
        Players
      </h2>
      <div className="flex ">
        <div className="w-1/2 mr-8 ml-8">
          <h3
            className={`text-xl mb-2 font-light ${
              props.isDay ? "" : "light-gray"
            }`}
          >
            Player One
          </h3>
          <div className=" flex items-center ">
            {props.user1 ? (
              <div
                className={`flex w-full p-2 rounded-md ${
                  props.isDay ? "bg-gray" : "bg-gray2"
                } items-center justify-between`}
              >
                <div className="flex items-center">
                  <img
                    src={props.user1.avatar_url}
                    className={`w-16 h-16 radius mx-4`}
                    alt={props.user1.name}
                  ></img>
                  <address className="text-2xl font-semibold active">
                    {props.user1.name}
                  </address>
                </div>
                <button
                  onClick={() => {
                    props.setUser1("");
                  }}
                  className=" active"
                >
                  <AiFillCloseCircle className="text-2xl" />
                </button>
              </div>
            ) : (
              <form
                className="w-full"
                onSubmit={(event) => {
                  event.preventDefault();
                  props.fetchUserDetails(username1, 1);
                  setUsername1("");
                }}
              >
                <input
                  placeholder="Github username"
                  onChange={(event) => {
                    setUsername1(event.target.value);
                  }}
                  className={`rounded-sm py-1 w-3/5 px-2 font-extralight ${
                    props.isDay
                      ? "input-bg-day input-placeholder-day "
                      : "input-bg input-placeholder"
                  }`}
                  value={username1}
                  type="text"
                  id="name user1"
                ></input>
                <button
                  className={`w-2/6 ml-4 py-0.5 tracking-widest uppercase text-lg ${
                    props.isDay
                      ? "btn-bg-day btn-color-day"
                      : "btn-bg btn-color"
                  }`}
                  type="submit"
                >
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
        <div className="w-1/2">
          <h3
            className={`text-xl mb-2 font-light ${
              props.isDay ? "" : "light-gray"
            }`}
          >
            Player Two
          </h3>
          <div className="flex items-center">
            {props.user2 ? (
              <div
                className={`flex w-full p-2 rounded-md ${
                  props.isDay ? "bg-gray" : "bg-gray2"
                } items-center justify-between`}
              >
                <div className="flex items-center">
                  <img
                    src={props.user2.avatar_url}
                    className={`w-16 h-16 radius mx-4`}
                    alt={props.user2.name}
                  ></img>
                  <address className="text-2xl font-semibold active">
                    {props.user2.name}
                  </address>
                </div>
                <button
                  onClick={() => {
                    props.setUser2("");
                  }}
                  className=" active"
                >
                  <AiFillCloseCircle className="text-2xl" />
                </button>
              </div>
            ) : (
              <form
                className="w-full"
                onSubmit={(event) => {
                  event.preventDefault();
                  props.fetchUserDetails(username2, 2);
                  setUsername2("");
                }}
              >
                <input
                  placeholder="Github username"
                  onChange={(event) => {
                    setUsername2(event.target.value);
                  }}
                  className={`rounded-sm py-1 w-3/5 px-2 font-extralight ${
                    props.isDay
                      ? "input-bg-day input-placeholder-day "
                      : "input-bg input-placeholder"
                  }`}
                  type="text"
                  value={username2}
                  id="name user2"
                ></input>
                <button
                  className={`w-2/6 ml-4 py-0.5 tracking-widest uppercase text-lg ${
                    props.isDay
                      ? "btn-bg-day btn-color-day"
                      : "btn-bg btn-color"
                  }`}
                  type="submit"
                >
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      <div className="flex justify-center m-8">
        {props.user1 && props.user2 ? (
          <button
            onClick={() => {
              props.setBattle(true);
            }}
            className={`w-1/6 ml-4 py-0.5 tracking-widest uppercase text-lg btn-bg light-gray`}
            type="submit"
          >
            Battle
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
export default PlayerForm;
