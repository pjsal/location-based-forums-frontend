import axios from 'axios';

// User login 
const validateUser = (user) => {
    return axios.get(`${process.env.REACT_APP_BASE_URL}users/api/users/${user.userName}/${user.password}`);  
}


// Export all methods
export { validateUser };