import InputForm from "./InputForm";
import List from "./List";
export default function Active({ text, data, onClick, onChange, onCheck }) {
  return (
    <>
      <InputForm data={text} onClick={onClick} handleChange={onChange} />
      <List data={data} onChange={onCheck} />
    </>
  );
}
