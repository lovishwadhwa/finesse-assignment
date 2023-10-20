import React from "react";
import { Layout, Spin } from "antd";
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
      return redirect("/products/39908913152077");
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
        height: "100vh",
        background: "white",
        margin: "auto",
        overflow: "auto",
      }}
    >
      <AppHeader />
      <Content className="site-layout">
        <div
          style={{
            padding: 24,
            minHeight: 380,
            textAlign: "center",
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
