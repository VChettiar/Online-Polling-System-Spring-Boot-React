import axios from "axios";

const API_URL_SHOWPOLLLIST = "http://localhost:8081/onlinepolling/user/getPoll";

class PollListService {
    showPoll = async (token) => {
        try {
            const response = await axios.get(API_URL_SHOWPOLLLIST, {
                headers: { Authorization: `Bearer ${token}` } // Added space after Bearer
            });           
            return response.data;
        } catch (error) {
            console.error("Error fetching poll list:", error);
            throw error; // Rethrow the error for further handling if needed
        }
    }
}

export default new PollListService();
