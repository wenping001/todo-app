import React from "react";
export default function InputForm({ handleChange, data, onClick }) {
  return (
    <div>
      <input
        type="text"
        placeholder="add detail"
        value={data}
        onChange={(e) => {
          handleChange(e.target.value);
        }}
      />
      <button className="add" onClick={onClick}>
        Add
      </button>
    </div>
  );
}
