import axios from "axios";
const BASE_URL = "http://localhost:5000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZGNlOTM2ZTliYjE1ODllZmI1ZDQ5YSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1ODc0MDI3NiwiZXhwIjoxNjU4OTk5NDc2fQ.4zLiSvxKwxMc31mQn6Wf-vPxy6qfuCwyXylzGUecXXo"

export const publicRequest = axios.create({
    baseURL:BASE_URL,
});
export const userRequest = axios.create({
    baseURL:BASE_URL,
    header:{token: `Baerer ${TOKEN}`}
});