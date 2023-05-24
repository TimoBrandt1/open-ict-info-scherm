import React, { useCallback } from "react";
import { styled } from "@stitches/react";

const Box = styled("div", {
  background: "#8758FF",
  borderRadius: 12,
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  height: "100%",
  width: "100%",
  color: "#F2F2F2",
  fontFamily: "Anek Telugu",
  cursor: "move",
});

const Button = styled("button", {
  border: "none",
  height: 30,
  width: "fit-content",
  borderRadius: 8,
  color: "#F2F2F2",
  background: "#181818",
  cursor: "pointer",
});

const ResizableWidget = ({
  title = "Resizable Widget",
  identifier,
  size = "sm",
  onUpdate,
}) => {
  const onResizeHandler = useCallback(() => {
    const newSize = size === "sm" ? "lg" : "sm";
    onUpdate?.(identifier, newSize);
  }, [identifier, size, onUpdate]);

  return (
    <Box>
      <h2>{title}</h2>
      <Button onClick={onResizeHandler}>
        Change to {size === "sm" ? "large" : "small"}
      </Button>
    </Box>
  );
};

export default ResizableWidget;
