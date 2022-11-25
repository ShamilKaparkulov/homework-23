import { useDispatch, useSelector } from "react-redux";
import { complaitedTodo, removeTodo } from "../store/todoSlice";
import "./TodoItem.css";

function TodoItem() {
  const dispatch = useDispatch();

  const { todos, completed } = useSelector((store) => store.todo);

  return (
    <>
      {todos.map((item) => (
        <ul key={item.id}>
          {!completed && (
            <li>
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => dispatch(complaitedTodo(item.id))}
              />
              <span>{item.name}</span>
              <button
                onClick={() =>
                  dispatch(
                    removeTodo({ id: item.id, completed: item.completed })
                  )
                }
              >
                DELETE
              </button>
            </li>
          )}
        </ul>
      ))}
    </>
  );
}

export default TodoItem;
