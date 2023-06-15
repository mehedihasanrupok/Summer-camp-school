import axios from 'axios';

export const saveUser = user => {
    axios.post('http://localhost:5000/users', {
        email: user.email,
        name: user.displayName,
        image: user.photoURL,
    })
        .then(data => console.log(data));
};

export const makeAdmin = async user => {
    const response = await axios.patch(`http://localhost:5000/users/admin/${user._id}`);

    return response.data;
}

export const makeInstructor = async user => {
    const response = await axios.patch(`http://localhost:5000/users/instructor/${user._id}`);

    return response.data;
}