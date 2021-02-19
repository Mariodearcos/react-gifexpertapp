import React, { useState } from "react";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputvalue] = useState("One Punch");

  const handleInputChange = (e) => {
    setInputvalue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategories((cats) => [inputValue, ...cats]);
      setInputvalue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
};
