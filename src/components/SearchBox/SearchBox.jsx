import css from './SearchBox.module.css'

export default function SearchBar({ search, handleChange }) {
    return (
        <div className={css.searchContainer}>
        <p className={css.inputTitle}>Find contacts by name</p>
        <input 
          className={css.inputValue}
      type="text"
      value={search}
      onChange={handleChange}
            />
        </div>
  );
}