import axios from "axios";
import React from "react";
import { withRouter } from "react-router-dom";
import { toast } from "react-toastify";

class DetailUser extends React.Component {
    state = {
        user: {},
    };
    handleBackUser = () => {
        this.props.history.push("/users");
    };
    componentDidMount = async () => {
        if (this.props.match.params?.id) {
            try {
                const id = this.props.match.params.id;
                const res = await axios.get(
                    `https://reqres.in/api/users/${id}`
                );
                this.setState({
                    user: res.data.data,
                });
            } catch {
                toast.error("Fetch data failed");
            }
        }
    };
    render = () => {
        const { user } = this.state;
        return (
            <div>
                {Object.keys(user).length !== 0 && (
                    <>
                        <h4>
                            Full name: {`${user.first_name} ${user.last_name}`}
                        </h4>
                        <p>Email: {user.email}</p>
                        <img src={user.avatar} alt="avatar" />
                        <button
                            style={{ display: "block", margin: "0 auto" }}
                            type="button"
                            onClick={() => this.handleBackUser()}
                        >
                            Back
                        </button>
                    </>
                )}
            </div>
        );
    };
}

export default withRouter(DetailUser);
