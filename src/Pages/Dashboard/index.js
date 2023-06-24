import Colors from "Constants/Colors";
import Images from "Constants/Images";
import Routes from "Utils/Routes";
import { Button } from "antd";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const goToAllPhoto = useCallback(() => {
    navigate(Routes.AllPhotos);
  }, [navigate]);

  return (
    <div>
      <img
        alt={""}
        src={Images.p8}
        style={{
          width: "100%",
          height: "calc(100vh)",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      />
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          marginTop: 100,
        }}
      >
        <div
          style={{
            color: Colors.Blue2,
            fontWeight: "bold",
            fontSize: 40,
            marginTop: 0,
            textAlign: "center",
          }}
        >
          ❤️ Hello em iu ❤️
        </div>
        <div
          style={{
            color: Colors.Blue2,
            fontWeight: "bold",
            fontSize: 20,
            marginTop: 100,
            width: "calc(100vw - 300px)",
            textAlign: "center",
          }}
        >
          Lời đầu tiên a muốn nói là a thật may mắn và hạnh phúc khi có em, cảm
          ơn em đã đến bên a. Cảm ơn e vì đã đến bên a. Hihi.
        </div>

        <Button onClick={goToAllPhoto} style={{ marginTop: 20 }}>
          Bấm vô đây để coi tiếp nè
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
