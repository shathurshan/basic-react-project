import React from "react";

class AddContact extends React.Component {
    state = {
        name: "",
        email: "",
    }

    add = (e) => {
        e.preventDefault();
        if (this.state.name === "" && this.state.email === "") {
            alert("ALL THE FIELDS ARE MENDOTRY");
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({ name: "", email: "" });
    }


    render() {
        return (
            <div>
                <h2>
                    Add Contact
                </h2>
                <form onSubmit={this.add}>
                    <div>
                        <label> Name: </label>
                        <input type="text" name="name" placeholder="Name" value={this.state.name}
                            onChange={(e) => this.setState({ name: e.target.value })} />
                    </div>
                    <br />
                    <div>
                        <label> Email: </label>
                        <input type="text" name="email" placeholder="Email-Id" value={this.state.email}
                            onChange={(e) => this.setState({ email: e.target.value })} />
                    </div>
                    <br />
                    <button style={{ color: "blue" }}>
                        Add
                    </button>
                </form>
            </div>
        );
    }
}

export default AddContact;