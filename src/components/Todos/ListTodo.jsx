import React from "react";
import { toast } from "react-toastify";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";
import "./ListTodo.scss";

class ListTodo extends React.Component {
    state = {
        todos: [
            {
                id: Math.random(),
                title: "Learn JavaScript",
            },
            {
                id: Math.random(),
                title: "Learn HTML",
            },
        ],
    };
    handleAddTodo = (todo) => {
        if (!todo.title) {
            toast.error("Missing title");
            return;
        }
        this.setState({
            todos: [...this.state.todos, todo],
        });
        toast.success("Wow so easy!");
    };

    handleDeleteTodo = (index) => {
        if (!index && index !== 0) {
            toast.error("Delete error");
            return;
        }
        this.state.todos.splice(index, 1);
        this.setState({
            todos: [...this.state.todos],
        });
        toast.success("Delete success");
    };
    handleSaveAfterEdit = (todo) => {
        const { todos } = this.state;
        const index = this.state.todos.findIndex((item) => item.id === todo.id);
        if (index >= 0 && todo.title.trim() !== "") {
            todos[index].title = todo.title;
            this.setState({
                todos: todos,
            });
            toast.success("Save success");
            return;
        }
        toast.error("Edit failed");
    };

    render = () => {
        const { todos } = this.state;
        return (
            <div className="list-todo">
                <h1>Simple todos</h1>
                <AddTodo handleAddTodo={this.handleAddTodo} />
                <ul className="todos">
                    {todos &&
                        todos.length > 0 &&
                        todos.map((todo, index) => (
                            <TodoItem
                                todo={todo}
                                index={index}
                                key={todo.id}
                                handleDeleteTodo={this.handleDeleteTodo}
                                handleSaveAfterEdit={this.handleSaveAfterEdit}
                            />
                        ))}
                </ul>
            </div>
        );
    };
}

export default ListTodo;
