import './SearchBox.css';

const SearchBox = ({ value, onChange }) => (
  <div className="search-box">
    <label htmlFor="search">Find contacts by name</label>
    <input
      id="search"
      type="text"
      value={value}
      onChange={onChange}
      placeholder="" // Плейсхолдер пустий
    />
  </div>
);

export default SearchBox;