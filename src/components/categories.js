const categories = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];

function Categories(props) {
  return (
    <div className="flex justify-center items-center mb-4">
      {categories.map((category) => {
        return (
          <button
            onClick={() => {
              props.handleActive(category);
            }}
            className={`font-medium m-1 text-xl ${
              props.active === category ? "active" : ""
            } ${props.isDay ? "" : "light-gray"}`}
            key={category}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
export default Categories;
