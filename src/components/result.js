function Result(props) {
  const user1 = props.user1;
  const user2 = props.user2;
  const score1 = user1.followers * 20 + user1.public_repos;
  const score2 = user2.followers * 20 + user2.public_repos;
  return (
    <div>
      <div>
        <div className="flex flex-wrap justify-center">
          <div className="flex justify-between">
            <div
              key={user1.name}
              className={`w-80 m-16 p-8 ${
                props.isDay ? "bg-gray" : "bg-gray2"
              }`}
            >
              <p
                className={`text-4xl font-light ${
                  props.isDay ? "" : "light-gray"
                } text-center p-4 `}
              >
                {score1 > score2
                  ? "Winner"
                  : score1 === score2
                  ? "tie"
                  : "Loser"}
              </p>
              <figure className="text-center flex justify-center">
                <img
                  className="w-32"
                  src={user1.avatar_url}
                  alt={user1.name}
                ></img>
              </figure>
              <p
                className={`${
                  props.isDay ? "" : "light-gray"
                } p-2 text-center text-base font-medium `}
              >
                score: {score1}
              </p>
              <address
                className={`${
                  props.isDay ? "" : "light-gray"
                } text-2xl font-semibold text-center text-cap red name-title active `}
              >
                {user1.name}
              </address>
              <address
                className={`${
                  props.isDay ? "" : "light-gray"
                } p-2 text-xl font-semibold name `}
              >
                <i className="i-5 text-2xl admin i fa-solid mr-4 fa-user "></i>
                {user1.name}
              </address>
              <p className={`${props.isDay ? "" : "light-gray"} p-2 text-xl `}>
                <i class="i-6 text-purple-500 fa-solid mr-4 fa-compass"></i>
                {user1.location}
              </p>
              <p className={`${props.isDay ? "" : "light-gray"} p-2 text-xl `}>
                <i class="i-7 text-orange-900 fa-solid mr-4 fa-briefcase"></i>
                {user1.company}
              </p>
              <p className={`${props.isDay ? "" : "light-gray"} p-2 text-xl `}>
                <i class="text-blue-400 i-8 fa-solid mr-4 fa-users"></i>
                {user1.followers} followers
              </p>
              <p className={`${props.isDay ? "" : "light-gray"} p-2 text-xl `}>
                <i class="text--500 i-9 fa-solid mr-4 fa-users"></i>
                {user1.following} following
              </p>
              <p className={`${props.isDay ? "" : "light-gray"} p-2 text-xl `}>
                <i class="i-0 fa-solid mr-4 fa-code"></i>
                {user1.public_repos} repositeries
              </p>
            </div>
            <div
              key={user2.name}
              className={`w-80 m-16 p-8 ${
                props.isDay ? "bg-gray" : "bg-gray2"
              }`}
            >
              <p
                className={`${
                  props.isDay ? "" : "light-gray"
                } text-4xl font-light text-center p-4 `}
              >
                {score2 > score1
                  ? "Winner"
                  : score1 === score2
                  ? "tie"
                  : "Loser"}
              </p>
              <figure className="text-center flex justify-center">
                <img
                  className="w-32"
                  src={user2.avatar_url}
                  alt={user2.name}
                ></img>
              </figure>
              <p
                className={`${
                  props.isDay ? "" : "light-gray"
                } p-2 text-center text-base font-medium `}
              >
                score: {score2}
              </p>
              <address
                className={`${
                  props.isDay ? "" : "light-gray"
                } text-2xl font-semibold text-center text-cap red name-title active `}
              >
                {user2.name}
              </address>
              <address
                className={`${
                  props.isDay ? "" : "light-gray"
                } p-2 text-xl font-semibold name `}
              >
                <i className="i-5 text-2xl admin i fa-solid mr-4 fa-user "></i>
                {user2.name}
              </address>
              {user2.location ? (
                <p
                  className={`${props.isDay ? "" : "light-gray"} p-2 text-xl `}
                >
                  <i class="i-6 text-purple-500 fa-solid mr-4 fa-compass"></i>
                  {user2.location}
                </p>
              ) : (
                ""
              )}
              {user2.company ? (
                <p
                  className={`${props.isDay ? "" : "light-gray"} p-2 text-xl `}
                >
                  <i class="i-7 text-orange-900 fa-solid mr-4 fa-briefcase"></i>
                  {user2.company}
                </p>
              ) : (
                ""
              )}
              <p className={`${props.isDay ? "" : "light-gray"} p-2 text-xl `}>
                <i class="text-blue-400 i-8 fa-solid mr-4 fa-users"></i>
                {user2.followers} followers
              </p>
              <p className={`${props.isDay ? "" : "light-gray"} p-2 text-xl `}>
                <i class="text--500 i-9 fa-solid mr-4 fa-users"></i>
                {user2.following} following
              </p>
              <p className={`${props.isDay ? "" : "light-gray"} p-2 text-xl `}>
                <i class="i-0 fa-solid mr-4 fa-code"></i>
                {user2.public_repos} repositeries
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center m-8">
        <button
          onClick={() => {
            props.setBattle(false);
            props.setUser1("");
            props.setUser2("");
          }}
          className={`w-1/6 ml-4 py-0.5 tracking-widest uppercase text-lg btn-bg light-gray`}
          type="submit"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
export default Result;
