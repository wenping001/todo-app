import Item from "./Item";

export default function List({ data, onChange, onClick }) {
  if (data.length === 0) {
    return <h1>empty</h1>;
  }
  return (
    <ul>
      {data.map((item) => (
        <Item key={item.id} {...item} onChange={onChange} onClick={onClick} />
      ))}
    </ul>
  );
}
