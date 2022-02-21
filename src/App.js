import React, { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import UsersList from "./components/UsersList/UsersList";

function App() {
  const [finalData, setFinalData] = useState([]);

  const handleSearch = (value) => {
    console.log(value);
    try {
      // const URL = `https://api.github.com/users/${e.target.value}`;
      const URL = `https://api.github.com/search/users?q=${value}+in:login?client_id=e25d1dbedde5215999ef&client_secret=ee080580b7c4f19688ccaef6844c3fe88bb811d`;

      Promise.all([fetch(URL).then((res) => res.json())]).then((data) => {
        if (data) {
          setData(data);
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  const setData = (data) => {
    data && setFinalData(data);
  };

  return (
    <div className="App">
      <header className="App-header">
        <section>
          <h1>Simple GithubUserFinder</h1>
        </section>
      </header>
      <SearchBar handleSearch={handleSearch} />
      {finalData[0] && finalData[0].message && (
        <h2 style={{ color: "white" }}>Too many requests!!!</h2>
      )}
      {finalData[0] && <UsersList finalData={finalData} />}
    </div>
  );
}

export default App;
