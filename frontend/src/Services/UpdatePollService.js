import axios from "axios";

class UpdatePollService{
   updatePoll = async ({id}, optionId,data,token) => {
        const API_URL_UPDATEPOLL = `http://localhost:8081/onlinepolling/user/updatePoll/${id}/${optionId}`;
        const response = await axios.put(API_URL_UPDATEPOLL,data,
          {
              headers: {Authorization: `Bearer ${token}`}
          });
        return response.data
   }

   getPollByID = async ({id},token) => {
        const API_URL_GETPOLLBYID = `http://localhost:8081/onlinepolling/user/getPollByID/${id}`;
        return await axios.get(API_URL_GETPOLLBYID,
          {
              headers: {Authorization: `Bearer ${token}`}
          });
   }
}
export default new UpdatePollService()