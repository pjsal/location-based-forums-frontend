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

// Create new forum
const createNewForum = (forum) => {
    return axios.post(`${process.env.REACT_APP_BASE_URL}forums/api/forums`, forum);  
}

// Create new post 
const createNewPost = (forumId, post) => {
    return axios.post(`${process.env.REACT_APP_BASE_URL}forums/api/forums/${forumId}/posts`, post);  
}

// Add user to forum 
const addUserToForum = (forumId, userId) => {
    return axios.put(`${process.env.REACT_APP_BASE_URL}forums/api/forums/${forumId}/users/${userId}`);  
}


// Export all methods
export { validateUser, getAllForums, createNewPost, createNewForum, addUserToForum };