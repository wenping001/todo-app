import List from "./List";

export default function Completed({ data, onClick, onDeleteAll, onCheck }) {
  return (
    <>
      <List
        data={data}
        onClick={onClick}
        onDeleteAll={onDeleteAll}
        onChange={onCheck}
      />
      {data.length !== 0 ? (
        <button className="delete-all" onClick={onDeleteAll}>
          delete all
        </button>
      ) : (
        ""
      )}
    </>
  );
}
