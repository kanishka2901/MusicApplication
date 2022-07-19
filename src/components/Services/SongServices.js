import axios from "axios";
const Songs_REST_API_URL="http://localhost:8080/";
class SongService{
    getAllMusic()
    {
        axios.get(Songs_REST_API_URL);
    }
}
export default new SongService();