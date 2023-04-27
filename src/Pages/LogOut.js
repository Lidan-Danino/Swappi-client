import { API_URL } from "../services/constants";

function LogOut({ history }) {
  fetch(`${API_URL}/auth/logout`)
    .then((res) => res.json())
    .then((res) => {
      history.push("/");
    })
    .catch((err) => console.log(err));
}

export default LogOut;
