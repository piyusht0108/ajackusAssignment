import {Component} from 'react'
import {ThreeCircles} from 'react-loader-spinner'
import UserDetails from './components/UserDetails'
import './App.css';

class App extends Component {
  state = {searchInput: '',firstName: '', lastName: '', email: '', department: '', userId: '', errorMsg: '', userDetailsList: [], toEdit: false, isLoading: true}

  componentDidMount() {
    this.fetchUsers()
  }

  fetchUsers = async () => {
    const apiUrl = 'https://my-json-server.typicode.com/piyusht0108/userManagementDashboard/users';
    const  response = await fetch(apiUrl);
    if (response.ok === true) {
      const data = await response.json()
      this.setState({userDetailsList: [...data], isLoading: false})
    }
  }

  onAddUser = async (event) => {
    event.preventDefault()
    const {firstName, lastName, email, department, userId, userDetailsList} = this.state
    const apiUrl = 'https://my-json-server.typicode.com/piyusht0108/userManagementDashboard/users'
    const userDetails = {
      user_id: userId,
      first_name: firstName,
      last_name: lastName,
      email,
      department
    }
    const filteredList = userDetailsList.filter(eachItem => eachItem.user_id.toString() === userId)
    console.log(filteredList)
    if (filteredList.length === 0) {
      this.setState(prevState => ({userDetailsList: [...prevState.userDetailsList, userDetails], firstName: '', lastName: '', userId: '', email: '', department: '', errorMsg: ''}))
    } else {
      this.setState({errorMsg: 'User ID Aleady Exists'})
    }
    
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === false) {
      const errorMsg = data.error_msg
      this.setState({errorMsg})
    }
    
  }

  editUser = async (event) => {
    event.preventDefault()
    const {firstName, lastName, email, department, userId,userDetailsList} = this.state
    const userDetails = {
      user_id: userId,
      first_name: firstName,
      last_name: lastName,
      email,
      department
    }
    
    const apiUrl = `https://my-json-server.typicode.com/piyusht0108/userManagementDashboard/users`
    const options = {
      method: 'PUT',
      body: JSON.stringify(userDetails),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    console.log(data)
    const filteredList = userDetailsList.filter(eachItem => eachItem.user_id !== userId)
    this.setState({userDetailsList: [...filteredList, userDetails], firstName: '', lastName: '', email: '', department: '', userId: '', toEdit: false})

  }

  onDeleteUser = async (id) => {
    const {userDetailsList} = this.state
    const filteredList = userDetailsList.filter(eachItem => eachItem.user_id !== id)
    this.setState({userDetailsList: [...filteredList]})
    const apiUrl = `https://my-json-server.typicode.com/piyusht0108/userManagementDashboard/users/${id}`
    const options = {method: 'DELETE'}
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    console.log(data)
  }

  onEditUser = (id) => {
    const {userDetailsList} = this.state
    const filteredData = userDetailsList.filter(eachItem => eachItem.user_id === id)
    const userData = filteredData[0]
    this.setState({userId: userData.user_id, firstName: userData.first_name, lastName: userData.last_name, email: userData.email, department: userData.department, toEdit: true})
  }

  onChangeUserId = (event) => {
    this.setState({userId: event.target.value})
  }

  onChangeFirstName = (event) => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = (event) => {
    this.setState({lastName: event.target.value})
  }

  onChangeEmail = (event) => {
    this.setState({email: event.target.value})
  }

  onChangeDepartment = (event) => {
    this.setState({department: event.target.value})
  }

  onChangeSearchInput = (event) => {
    this.setState({searchInput: event.target.value})
  }


  render() {
    const {firstName, lastName, email, department, userId, userDetailsList, toEdit, isLoading, searchInput, errorMsg} = this.state
    const onSubmitForm = (event) => {
      if (toEdit === true) {
        this.editUser(event)
      } else {
        this.onAddUser(event)
      }
    }

    const filteredList = userDetailsList.filter(eachItem => {
      if (eachItem.first_name.toLowerCase().includes(searchInput.toLocaleLowerCase()) || eachItem.last_name.toLowerCase().includes(searchInput.toLocaleLowerCase())) {
        return eachItem
      }
      return null
    })

    const submitButton = toEdit ? 'Update Changes': 'Add User'
    return (
      <div className="page-container">
        <h1 className='page-heading'>User Management Dashboard</h1>
        <form className='form-container' onSubmit={onSubmitForm}>
          <div className='field-container'>
          <label className='label' htmlFor='ID'>User ID :</label>
          <input type="text" id="ID" className='input' placeholder="User ID" value={userId} onChange={this.onChangeUserId}  disabled={toEdit} required />
          </div>
          <div className='name-container'>
            <div className='field-container'>
            <label className='label' htmlFor='firstName'>First Name :</label>
            <input type="text" id="firstName" className='input' value={firstName} onChange={this.onChangeFirstName} placeholder="First Name" required />
            </div>
            <div className='field-container'>
            <label className='label' htmlFor='lastName'>Last Name :</label>
            <input type="text" id="lastName" className='input' value={lastName} onChange={this.onChangeLastName} placeholder="Last Name" required />
            </div>
          </div>
          <div className='name-container'>
          <div className='field-container'>
          <label className='label' htmlFor='email'>Email :</label>
            <input type="text" id="email" className='input'  value={email} onChange={this.onChangeEmail} placeholder="Email" required />
            </div>
            <div className='field-container'>
            <label className='label' htmlFor='dept'>Department :</label>
            <input type="text" id="dept" className='input' value={department} onChange={this.onChangeDepartment} placeholder="Department" required />
            </div>
          </div>
            <button className='btn btn-primary' type="submit">{submitButton}</button>
            {errorMsg.length > 0 ? (
              <p className='text-center text-danger'>{errorMsg}</p>
            ) : null}
        </form>
        <div className='d-flex flex-row justify-content-end mt-3 search-container'>
          <input type="search" className='input' value={searchInput} onChange={this.onChangeSearchInput} placeholder="Search" />
          <button type="button" className='btn btn-secondary mb-2 ml-2'>Search</button>
        </div>
        {isLoading ? (<div className='d-flex justify-content-center mt-3'>
          <ThreeCircles
            visible={true}
            height="70"
            width="70"
            color="#4fa94d"
            ariaLabel="three-circles-loading"
          />

        </div>): (<ul className='user-details-list'>
          {filteredList.map(eachItem => (
            <li className='user-details-list-item' key={eachItem.user_id}>
              <UserDetails userDetails={eachItem} onDeleteUser={this.onDeleteUser} onEditUser={this.onEditUser} />
            </li>
          )) }
        </ul>)}
        
      </div>
    )
  }
}


export default App;
