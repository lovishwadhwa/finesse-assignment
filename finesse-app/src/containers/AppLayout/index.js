import React from "react";
import { Layout } from "antd";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import AppHeader from "../AppHeader";
import AppFooter from "../AppFooter";
import Product from "../Product";

const { Content } = Layout;

const router = createBrowserRouter([
  {
    path: "/",
    loader: () => {
      return redirect("/products/sandy-tie-dye-print-dress");
    },
  },
  {
    path: "/products/:productId",
    element: <Product />,
  },
]);

const AppLayout = () => {
  return (
    <Layout
      style={{
        maxWidth: 460,
        minHeight: "100vh",
        background: "white",
        margin: "auto",
        overflow: "auto",
        position: "relative",
      }}
    >
      <AppHeader />
      <Content className="site-layout">
        <div
          style={{
            marginTop: 64,
            minHeight: 380,
          }}
        >
          <RouterProvider router={router} />
        </div>
      </Content>
      <AppFooter />
    </Layout>
  );
};
export default AppLayout;
