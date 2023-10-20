import { ConfigProvider } from "antd";
import "./App.css";
import AppLayout from "./containers/AppLayout";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "Carbon",
          colorPrimary: "black",
        },
      }}
    >
      <div className="App">
        <AppLayout />
      </div>
    </ConfigProvider>
  );
}

export default App;
