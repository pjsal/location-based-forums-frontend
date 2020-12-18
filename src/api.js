import axios from 'axios';

// User login 
const validateUser = (user) => {
    return axios.get(`${process.env.REACT_APP_BASE_URL}users/api/users/${user.userName}/${user.password}`);  
}

// Create new user
const createNewUser = (user) => {
    // console.log('New User:', user)
    return axios.post(`${process.env.REACT_APP_BASE_URL}users/api/users`, user);  
}

// Get All Forums
// NEED TO FIGURE OUT A WAY TO GET JUST THE ONES IN RANGE
const getAllForums = () => {
    console.log(`${process.env.REACT_APP_BASE_URL}forums/api/forums`)
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
export { validateUser, createNewUser, getAllForums, createNewPost, createNewForum, addUserToForum };