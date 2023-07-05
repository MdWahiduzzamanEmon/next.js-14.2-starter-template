import { toast } from "react-toastify";
interface IToastify {
  type: "success" | "error" | "info" | "warn";
  message: string;
}

const cToastify = (props: IToastify) => {
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
