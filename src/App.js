const App = () => {
  const categories = [
    {
      id: 1,
      title: "Hats",
    },
    {
      id: 2,
      title: "Jackets",
    },
    {
      id: 3,
      title: "Sneakers",
    },
    {
      id: 4,
      title: "Womens",
    },
    {
      id: 5,
      title: "Mans",
    },
  ];
  return (
    <div className="categories-container">
      {categories.map(({ id, title }) => {
        return (
          <div className="category-container">
            {/* <img src="" alt="" /> */}
            <div key={id} className="category-body-container">
              <h2>{title}</h2>
              <p>Shop now</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default App;
