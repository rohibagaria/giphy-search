import {
  Grid,
  SearchBar,
  SearchContext,
  SearchContextManager,

} from "@giphy/react-components";
import React, { useContext, useState } from "react";


const SearchExperience = () => (
  <SearchContextManager
    options={{ sort: 'relevant', lang: 'en', limit: 25, type: 'gifs' }}
    shouldDefaultToTrending={false}
    apiKey={'Eln3EKKZSseYJSPKdttpzjUcZZM8QaNP'}
  >
    <GridDemo/>
  </SearchContextManager>
);
function GridDemo({ keyword }) {
  const [width, _] = useState(window.innerWidth);
  const { fetchGifs, searchKey } = useContext(SearchContext);
  return (
    <>
      <SearchBar placeholder="Type to search gifs!" />
      <Grid
        fetchGifs={fetchGifs}
        key={searchKey}
        noLink={true}
        width={width}
        columns={4}
      />
    </>
  );
}

function App() {
  return (
    <>
      <img src="./logo.png" width="200" alt="Giphy Logo" />
      Powered by GIPHY
      <SearchExperience />
    </>
  );
}
export default App;