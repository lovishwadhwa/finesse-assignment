import { ConfigProvider } from "antd";
import "./App.css";
import AppLayout from "./containers/AppLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

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
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <AppLayout />
        </div>
      </QueryClientProvider>
    </ConfigProvider>
  );
}

export default App;
