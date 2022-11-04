import { useReducer, useRef } from "react";

function reducer(
    todos: any,
    {
        type,
        payload: { value, id },
    }: {
        type: string;
        payload: {
            value?: any;
            id?: any;
        };
    }
) {
    switch (type) {
        case "add":
            return [...todos, { value, done: false, id: Date.now() }];
        case "toggle":
            return todos.map((todo: { id: any; done: boolean }) => {
                if (todo.id === id) return { ...todo, done: !todo.done };
                return todo;
            });
    }
}
function TodoList() {
    const val = useRef<any>();
    const [todos, dispatch] = useReducer(reducer, []);
    function handleClick(e: any, id: any) {
        if (e.detail === 2) {
            dispatch({ type: "toggle", payload: { id } });
        }
    }
    return (
        <>
            <h2>TodoList</h2>
            <input
                type="text"
                ref={val}
                onKeyUp={(e) => {
                    if (e.key === "Enter") {
                        dispatch({
                            type: "add",
                            payload: { value: val.current.value },
                        });
                        val.current.value = "";
                    }
                }}
            />
            {todos?.map(
                ({
                    value,
                    done,
                    id,
                }: {
                    value: any;
                    done: boolean;
                    id: any;
                }) => {
                    return (
                        <p
                            key={id}
                            style={{
                                textDecoration: done ? "line-through" : "none",
                                cursor: "pointer",
                            }}
                            onClick={(e) => handleClick(e, id)}
                        >
                            {value}
                        </p>
                    );
                }
            )}
        </>
    );
}

export default TodoList;
