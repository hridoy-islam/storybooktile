import { Box } from "@material-ui/core";
import { Card } from "@mui/material";
import "./Tile.css";

export const TILE = () => {
  return (
    <div>
      <Card
        style={{
          border: "1px solid #ccc",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          padding: "15px",
          width: "450px",
        }}
      >
        <h2 style={{ marginBottom: "15px" }}>USDT / USD</h2>
        <div style={{ display: "flex", gap: "20px", marginBottom: "15px" }}>
          <div
            className="sellbg"
            style={{
              flex: 1,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p style={{ marginRight: "2px" }}>
                SELL <br />
                0.99
              </p>

              <p style={{ fontSize: "36px", gap: "0px" }}>99</p>
              <sub style={{ marginTop: "20px" }}>5</sub>
            </div>
          </div>
          <div
            className="buybg"
            style={{
              flex: 1,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p style={{ marginRight: "2px" }}>
                Buy <br />
                1.00
              </p>

              <p style={{ fontSize: "36px", gap: "0px" }}>01</p>
              <sub style={{ marginTop: "20px" }}>1</sub>
            </div>
          </div>
        </div>
        <Box style={{ textAlign: "center", margin: "0 auto" }}>
          USDT{" "}
          <span style={{ borderBottom: "1px solid black", padding: "0px 8px" }}>
            10000
          </span>
        </Box>
      </Card>
    </div>
  );
};
