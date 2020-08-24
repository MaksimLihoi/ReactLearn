import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        text: "Some text"
    }

    unableEditMode = () => {
        this.setState({
            editMode: true
        });
    }

    disableEditMode = () => {
        this.setState({
            editMode: false
        });
    }

    render() {
        return (
            <div>
                {
                    this.state.editMode ?
                        <div>
                            <input autoFocus={true} onBlur={this.disableEditMode} value={this.props.status}/>
                        </div>
                        :

                        <div>
                            <span onDoubleClick={this.unableEditMode}>{this.props.status}</span>
                        </div>
                }
            </div>);
    }

};

export default ProfileStatus;