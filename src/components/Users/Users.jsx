import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import "./User.scss";

class Users extends React.Component {
    state = {
        users: [],
    };
    handleViewDetailUser = (user) => {
        setTimeout(() => {
            this.props.history.push(`/users/${user.id}`);
        }, 1000);
    };
    handleGetUsers = async (page) => {
        const res = await axios.get(`https://reqres.in/api/users?page=${page}`);
        res.data?.data &&
            this.setState({
                users: res.data.data,
            });
    };
    componentDidMount = async () => {
        this.handleGetUsers(1);
    };

    render = () => {
        const { users } = this.state;
        return (
            <>
                <div className="users">
                    {users &&
                        users.length > 0 &&
                        users.map((user, index) => (
                            <div key={user.id} className="user-item">
                                <span>{`${index + 1} - ${user.first_name} ${
                                    user.last_name
                                }`}</span>
                                <button
                                    type="button"
                                    onClick={() =>
                                        this.handleViewDetailUser(user)
                                    }
                                >
                                    Detail user
                                </button>
                            </div>
                        ))}
                </div>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <button
                        style={{ marginRight: "10px" }}
                        onClick={() => this.handleGetUsers(1)}
                    >
                        Page 1
                    </button>
                    <button onClick={() => this.handleGetUsers(2)}>
                        Page 2
                    </button>
                </div>
            </>
        );
    };
}

export default withRouter(Users);
