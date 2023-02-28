import { useEffect, useState } from "react";
import Categories from "./categories";
import Loader from "./loader";
import Repos from "./repos";

function Popular(props) {
  const [repos, setRepos] = useState();
  const [active, setActive] = useState("All");
  const [loader, setLoader] = useState(false);
  document.title = "Popular Repos";
  useEffect(() => {
    fetch(
      `https://api.github.com/search/repositories?q=stars:%3E1+language:${active}&sort=stars&order=desc&type=Repositories`
    )
      .then((data) => data.json())
      .then((data) => {
        setRepos(data && data.items);
        setLoader(false);
      });
  }, [active]);
  let handleActive = (active) => {
    setLoader(true);
    setActive(active);
  };
  return (
    <div>
      <Categories
        handleActive={handleActive}
        active={active}
        isDay={props.isDay}
      />
      {loader ? <Loader /> : <Repos repos={repos} isDay={props.isDay} />}
    </div>
  );
}
export default Popular;
