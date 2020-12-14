import axios from 'axios';

// User login 
const validateUser = (user) => {
    return axios.get(`${process.env.REACT_APP_BASE_URL}users/api/users/${user.userName}/${user.password}`);  
}

// Get All Forums
// NEED TO FIGURE OUT A WAY TO GET JUST THE ONES IN RANGE
const getAllForums = () => {
    return axios.get(`${process.env.REACT_APP_BASE_URL}forums/api/forums`);  
}

// Create new post 
const createNewPost = (forumID, post) => {
    return axios.post(`${process.env.REACT_APP_BASE_URL}forums/api/forums/${forumID}/posts`, post);  
}


// Export all methods
export { validateUser, getAllForums, createNewPost };