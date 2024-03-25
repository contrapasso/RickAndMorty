"use client";

import { Container, Box } from "@mui/material";
import React from "react";
import store from "../../store/store";
import { Provider } from "react-redux";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container
      style={{ maxWidth: "100%" }}
    >
      <Box sx={{ minHeight: "calc(100vh - 170px)" }}>
        <Provider store={store}>
          {children}
        </Provider>
      </Box>
    </Container>
  );
}
