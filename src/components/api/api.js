import axios from 'axios';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com/'





export const allContactsGet = async () => {
    const response = await axios.get(`contacts`)
    console.log(response);
    return response.data
}

export const addContacts = async (contactData) => {
    const response = await axios({
        method: 'POST',
        url: `contacts`,
        data: contactData
    })
    console.log(response);
    return response.data
}

export const removeContacts = async (id) => {
    const response = await axios.delete(`contacts/${id}`);
    return response.data
}


