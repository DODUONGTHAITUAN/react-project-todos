import React from "react";

class TodoItem extends React.Component {
    state = {
        editTodo: {},
    };
    handleOnchange = (e) => {
        this.setState({
            editTodo: { ...this.state.editTodo, title: e.target.value },
        });
    };
    handleDelete = (index) => {
        this.props.handleDeleteTodo(index);
    };
    handleEdit = (todo) => {
        this.setState({
            editTodo: todo,
        });
    };
    handleSave = (e) => {
        e.preventDefault();
        this.props.handleSaveAfterEdit(this.state.editTodo);
        this.setState({
            editTodo: {},
        });
    };
    render = () => {
        const { editTodo } = this.state;
        const { todo, index } = this.props;
        return (
            <li className="todo-item">
                {Object.keys(editTodo).length !== 0 &&
                editTodo.id === todo.id ? (
                    <>
                        <input
                            autoFocus
                            type="text"
                            className="todo-editing"
                            value={editTodo.title}
                            onChange={(e) => this.handleOnchange(e)}
                        />
                        <button
                            className="todo-save"
                            onClick={(e) => this.handleSave(e)}
                        >
                            Save
                        </button>
                    </>
                ) : (
                    <>
                        <p className="todo-title">
                            {index + 1} - {todo.title}
                        </p>

                        <button
                            className="todo-edit"
                            onClick={() => this.handleEdit(todo)}
                        >
                            Edit
                        </button>
                    </>
                )}
                <button
                    className="todo-delete"
                    onClick={() => this.handleDelete(index)}
                >
                    Delete
                </button>
            </li>
        );
    };
}

export default TodoItem;
