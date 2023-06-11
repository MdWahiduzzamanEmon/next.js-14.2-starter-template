import { toast } from "react-toastify";
const cToastify = (props) => {
  const { type, message } = props;
  toast[type](message, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
};

export default cToastify;
