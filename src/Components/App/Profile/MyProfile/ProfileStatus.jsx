import React from 'react';
class ProfileStatus extends React.Component {
    state = {
        editMode:false,
        status:this.props.status,
    }
    
    activateEditMode = () => {
        this.setState({
            editMode:true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode:false
        })
        this.props.setStatus(this.state.status)
    }
    onStatusChange = (e) => {
        this.setState({
            status:e.currentTarget.value
        })
    }
    keyDown = (e) => {
        if (e.key === 'Enter') {
            this.deactivateEditMode()
        }
    }
    componentDidUpdate(prevProps,prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status:this.props.status
            })
        }
    }
    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div onClick={this.activateEditMode} style={{color: 'white'}}>{this.props.status || 'set status'}</div>
                }
                {this.state.editMode &&
                <input onChange={this.onStatusChange} autoFocus={true} onKeyDown={this.keyDown} onBlur={this.deactivateEditMode}  value={this.state.status}/>
                }
            </div>
        );
    }
}

export default ProfileStatus;