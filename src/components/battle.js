import { useEffect, useState } from "react";
import Instructions from "./instructions";
import PlayerForm from "./playerForm";
import Result from "./result";

function Battle(props) {
  document.title = "Battle";
  useEffect(() => {});
  const [user1, setUser1] = useState();
  const [user2, setUser2] = useState();
  const [battle, setBattle] = useState(false);
  let fetchUserDetails = (username, userCount) => {
    fetch(`https://api.github.com/users/${username}`)
      .then((data) => data.json())
      .then((data) => {
        if (userCount === 1) {
          setUser1(data);
        } else {
          setUser2(data);
        }
      });
  };
  return (
    <section>
      {battle ? (
        <Result
          isDay={props.isDay}
          user1={user1}
          user2={user2}
          setUser1={setUser1}
          setUser2={setUser2}
          setBattle={setBattle}
        />
      ) : (
        <>
          <Instructions isDay={props.isDay} />
          <PlayerForm
            isDay={props.isDay}
            user1={user1}
            user2={user2}
            fetchUserDetails={fetchUserDetails}
            setUser1={setUser1}
            setUser2={setUser2}
            setBattle={setBattle}
          />
        </>
      )}
    </section>
  );
}
export default Battle;
