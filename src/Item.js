import { useLocation } from "react-router-dom";
export default function Item({ id, done, content, onChange, onClick }) {
  const { pathname } = useLocation();
  return (
    <li>
      <div>
        <input
          type="checkbox"
          checked={done}
          onChange={() => {
            onChange(id);
          }}
        />
        <span className={done ? "delete-line" : ""}>{content}</span>
      </div>

      {pathname === "/completed" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="gray"
          onClick={() => onClick(id)}>
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      ) : (
        // <button onClick={() => onClick(id)}>delete</button>
        ""
      )}
    </li>
  );
}
