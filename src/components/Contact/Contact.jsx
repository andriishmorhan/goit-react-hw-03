import css from './Contact.module.css'

export default function Contact({ id, name, number, onDelete }) {
  const handleClick = () => {
    onDelete(id);
  };
  return (
    <li key={id} className={css.contactList}>
      <p>Name: {name}</p>
      <p>Number: {number}</p>
      <button className={css.listBtn} onClick={handleClick}>Delete</button>
    </li>
  );
}


