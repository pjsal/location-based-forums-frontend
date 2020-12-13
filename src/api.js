import axios from 'axios';

// User login 
const validateUser = (user) => {
    console.log(`http://localhost:5000/users/api/users/${user.userName}/${user.password}`)
    return axios.get(`http://localhost:5000/users/api/users/${user.userName}/${user.password}`);  
}


// Export all methods
export { validateUser };