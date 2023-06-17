import axios from 'axios';

export const saveUser = user => {
    axios.post('https://summer-school-server-rho.vercel.app/users', {
        email: user.email,
        name: user.displayName,
        image: user.photoURL,
    })
        .then(data => console.log(data));
};

export const makeAdmin = async user => {
    const response = await axios.patch(`https://summer-school-server-rho.vercel.app/users/admin/${user._id}`);

    return response.data;
}

export const makeInstructor = async user => {
    const response = await axios.patch(`https://summer-school-server-rho.vercel.app/users/instructor/${user._id}`);

    return response.data;
}