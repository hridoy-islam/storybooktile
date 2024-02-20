/* eslint-disable react/prop-types */
import { Box } from "@material-ui/core";
import { Card } from "@mui/material";
import "./Tile.css";

export const TILE = ({
  title,
  sell_rate,
  sell_price,
  sell_item,
  buy_rate,
  buy_price,
  buy_item,
  amount,
}) => {
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
        <h2 style={{ marginBottom: "15px" }}>{title}</h2>
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
                {sell_rate}
              </p>

              <p style={{ fontSize: "36px", gap: "0px" }}>{sell_price}</p>
              <sub style={{ marginTop: "20px" }}>{sell_item}</sub>
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
                {buy_rate}
              </p>

              <p style={{ fontSize: "36px", gap: "0px" }}>{buy_price}</p>
              <sub style={{ marginTop: "20px" }}>{buy_item}</sub>
            </div>
          </div>
        </div>
        <Box
          style={{
            textAlign: "center",
            margin: "0 auto",
            fontFamily: "Roboto",
          }}
        >
          USDT{" "}
          <span style={{ borderBottom: "1px solid black", padding: "0px 8px" }}>
            {amount}
          </span>
        </Box>
      </Card>
    </div>
  );
};
