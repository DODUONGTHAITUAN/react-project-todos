import React from "react";

class AddTodo extends React.Component {
    state = {
        todo: "",
    };
    handleOnChange = (e) => {
        this.setState({ todo: e.target.value });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleAddTodo({
            id: Math.random(),
            title: this.state.todo.trim(),
        });
        this.setState({
            todo: "",
        });
    };
    render = () => {
        const { todo } = this.state;
        return (
            <div className="form-group">
                <input
                    type="text"
                    value={todo}
                    onChange={(e) => this.handleOnChange(e)}
                    onKeyUp={(e) => e.keyCode === 13 && this.handleSubmit(e)}
                />
                <button
                    type="submit"
                    onClick={(e) => this.handleSubmit(e)}
                    className="todo-add"
                >
                    Add
                </button>
            </div>
        );
    };
}
export default AddTodo;
