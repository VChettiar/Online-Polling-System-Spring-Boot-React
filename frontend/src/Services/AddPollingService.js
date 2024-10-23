import axios from "axios";

const API_URL_ADDPOLLING = "http://localhost:8081/onlinepolling/admin/createpolling";

class AddPollingService{
    createPoll = async(data, token) => {
        const response = await axios.post(API_URL_ADDPOLLING, data,
                {
                    headers: {Authorization: `Bearer ${token}`}
                })
        return response.data;
    }
}
export default new AddPollingService()