function Repos(props) {
  return (
    <div className="flex flex-wrap">
      {props.repos &&
        props.repos.map((repo, i) => {
          return (
            <div
              key={i}
              className={`w-72 bg-gray py-12 px-8 ${
                props.isDay ? "" : "bg-gray2"
              } m-one`}
            >
              <ul>
                <p
                  className={`fs-36 fw-300 text-center ${
                    props.isDay ? "" : "light-gray"
                  } padding-1 text-4xl font-light`}
                >
                  #{i + 1}
                </p>
                <figure className="text-center w-36 mx-auto">
                  <img
                    className="my-6"
                    src={repo.owner.avatar_url}
                    alt={repo.owner.login}
                  ></img>
                </figure>
                <address
                  className={`text-2xl mb-4 text-center ${
                    props.isDay ? "" : "light-gray"
                  } active font-bold `}
                >
                  {repo.owner.login}
                </address>
                <address
                  className={`py-1 text-xl ${
                    props.isDay ? "" : "light-gray"
                  } font-semibold `}
                >
                  <i className="admin fa-solid mr-5 fa-user"></i>
                  {repo.owner.login}
                </address>
                <p
                  className={`py-1 text-xl ${
                    props.isDay ? "" : "light-gray"
                  } font-normal  `}
                >
                  <i className="yellow fa-solid mr-3 fa-star -ml-0.5"></i>{" "}
                  {repo.stargazers_count} stars
                </p>
                <p
                  className={`py-1 text-xl ${
                    props.isDay ? "" : "light-gray"
                  } font-normal  `}
                >
                  <i className="lightBlue fa-solid mr-4 fa-code-fork"></i>{" "}
                  {repo.forks} forks
                </p>
                <p
                  className={`py-1 text-xl ${
                    props.isDay ? "" : "light-gray"
                  } font-normal  `}
                >
                  <i className="lightRed fa-solid mr-5 fa-triangle-exclamation"></i>
                  {repo.open_issues} open issues
                </p>
              </ul>
            </div>
          );
        })}
    </div>
  );
}
export default Repos;
