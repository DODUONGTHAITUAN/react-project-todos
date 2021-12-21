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
    componentDidMount = async () => {
        const res = await axios.get("https://reqres.in/api/users?page");
        res.data?.data &&
            this.setState({
                users: res.data.data,
            });
    };
    render = () => {
        const { users } = this.state;
        return (
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
                                onClick={() => this.handleViewDetailUser(user)}
                            >
                                Detail user
                            </button>
                        </div>
                    ))}
            </div>
        );
    };
}

export default withRouter(Users);
