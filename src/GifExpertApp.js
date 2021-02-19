import React, { useState } from "react";
import PropTypes from "prop-types";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState([
     "One Punc"//,
    // "Samurai X",
    // "Dragon Ball",
  ]);

  //   const handleAdd = () => {
  //     setCategories([...categories, "HunterXHunter"]);
  //   };
  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {
          categories.map( category => (
             <GifGrid 
             key={category} 
             category={category}
             />
          ))
        }
      </ol>
    </>
  );
};
GifExpertApp.propTypes = {
  //setCategories: PropTypes.func.isRequired,
};
export default GifExpertApp;
