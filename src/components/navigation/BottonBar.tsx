import Button from "../ui/Button";
import { useNavigate, useLocation } from "react-router-dom";

const BottomBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="w-full bg-mute h-16 md:h-18 flex items-center justify-around sticky top-0 z-50 shadow-md">
      <Button
        disabled={location.pathname === "/"}
        onClick={() => navigate("/")}
      >
        ย้อนกลับ
      </Button>
      <Button
        disabled={location.pathname === "/abdominal"}
        onClick={() => navigate("/abdominal")}
      >
        ต่อไป
      </Button>
    </div>
  );
};

export default BottomBar;
