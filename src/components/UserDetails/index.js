import { Component } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import './index.css'

class UserDetails extends Component {
    render() {
        const {userDetails, onDeleteUser, onEditUser} = this.props
        const {email, department} = userDetails
        const onClickDelete = () => {
            onDeleteUser(userDetails.user_id)
        }

        const onClickEdit = () => {
            onEditUser(userDetails.user_id)
        }
        

        return (
            <>  
            <div className="details-container">
                <p className="id mr-3">{userDetails.user_id}</p>
                <div>
                
                    <h1 className="name">{userDetails.first_name} {userDetails.last_name}</h1>
                    <p className="email">{email}</p>
                    <p className="dept">{department}</p>
                </div>
                </div>
                <div className="function-button-container">
                    <button type="button" className="function-button" onClick={onClickEdit}><MdEdit /></button>
                    <button type="button" className="function-button" onClick={onClickDelete}><MdDelete /></button>
                </div>
            </>
        )
    }
}

export default UserDetails