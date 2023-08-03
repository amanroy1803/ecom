import React from "react";
import { useSearch } from "../../context/search";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa"; // Import the search icon from react-icons library
import "./Searchinput.css"; // Import the CSS for SearchInput

const SearchInput = () => {
  const [values, setValues] = useSearch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        `/api/v1/product/search/${values.keyword}`
      );
      setValues({ ...values, results: data });
      navigate("/search");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className='search-form' role='search' onSubmit={handleSubmit}>
      <input
        className='form-control search-input'
        type='search'
        placeholder='Search Products...'
        aria-label='Search'
        value={values.keyword}
        onChange={(e) => setValues({ ...values, keyword: e.target.value })}
      />
      <button type='submit' className='search-btn'>
        <FaSearch />
      </button>
    </form>
  );
};

export default SearchInput;
