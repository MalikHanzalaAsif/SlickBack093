import { toast } from "react-toastify";

const toastEmitter = ({
  title,
  type,
  position = "top-right",
  autoClose = 3000,
  hideProgressBar = false,
  closeOnClick = true,
  pauseOnHover = true,
  draggable = true,
  progress,
  theme = "colored",
  customButton = null, // Optional button component or function
  navigate
}) => {
  const options = {
    position,
    autoClose,
    hideProgressBar,
    closeOnClick,
    pauseOnHover,
    draggable,
    progress,
    theme,
  };

  // Render a custom toast content if `customButton` is provided
  const toastContent = customButton ? (
    <div>
      <span>{title}</span>
      <button
        onClick={() => {
          if (typeof customButton === "function") {
            customButton(); // Call a function if provided
          } else {
            navigate("/cart"); // Redirect to cart page by default
          }
        }}
        style={{
          marginLeft: "16px",
          padding: "5px 10px",
          background: "transparent",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        {typeof customButton === "string" ? customButton : "Action"}
      </button>
    </div>
  ) : (
    title
  );

  switch (type) {
    case "info":
      toast.info(toastContent, options);
      break;
    case "warn":
      toast.warn(toastContent, options);
      break;
    case "success":
      toast.success(toastContent, options);
      break;
    case "error":
      toast.error(toastContent, options);
      break;
    default:
      toast(toastContent, options);
      break;
  }
};

export default toastEmitter;
