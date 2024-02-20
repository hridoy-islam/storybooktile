/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Button, Card, Grid } from "@mui/material";
import { useState } from "react";
import "./RFQ.css";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useEffect } from "react";

function LinearProgressWithLabel(props) {
  const [rfq, setRfq] = useState({
    id: 1,
    title: "USDT/USD",
    sell_rate: "0.99",
    sell_price: "99",
    sell_item: "5",
    buy_rate: "1.00",
    buy_price: "01",
    buy_item: "1",
    amount: 1000000,
  });
  return (
    <Box sx={{ display: "flex", width: "80%", alignItems: "center" }}>
      <Box sx={{ minWidth: "20%" }}>
        <Typography variant="body2" color="text.secondary">{`${
          Math.round(props.value) / 10
        }sec`}</Typography>
      </Box>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
    </Box>
  );
}

export const RFQ = ({
  title,
  sell_rate,
  sell_price,
  sell_item,
  buy_rate,
  buy_price,
  buy_item,
  amount,
}) => {
  const [initiate, setInitiate] = useState(false);
  const [progress, setProgress] = useState(100); // Initial progress percentage
  const [countdown, setCountdown] = useState(10); // Initial countdown value
  const [finished, setFinished] = useState(false); // State to track if countdown has finished
  const [showRequote, setShowRequote] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("white");

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => prevProgress - 100 / 10); // Update progress
      setCountdown((prevCountdown) => prevCountdown - 1); // Update countdown
    }, 1000); // Update every second

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, [finished]);

  useEffect(() => {
    if (countdown === 0) {
      // Handle countdown reaching zero
      handleSetFinish();
    }
  }, [countdown]);

  const handleSetFinish = () => {
    setProgress(100);
    setCountdown(10);
    setFinished(false);
    setInitiate(false);
    setShowRequote(true);
  };

  const handleMouseEnter = () => {
    setShowRequote(false);
    setInitiate(true);
    document.getElementById("sellbg").classList.remove("sellbg");
    document.getElementById("sellbg").classList.add("sellRevertBg");
    document.getElementById("buybg").classList.remove("buybg");
    document.getElementById("buybg").classList.add("buyRevertBg");

    setTimeout(() => {
      document.getElementById("sellbg").classList.add("sellbg");
      document.getElementById("sellbg").classList.remove("sellRevertBg");

      document.getElementById("buybg").classList.add("buybg");
      document.getElementById("buybg").classList.remove("buyRevertBg");
    }, 2000);
  };

  return (
    <div>
      <Grid>
        <Grid alignItems="center">
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
            <div
              style={{
                display: "flex",
                gap: "3px",
                marginBottom: "20px",
                marginTop: "25px",
              }}
            >
              <div
                className="sellbg"
                id="sellbg"
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
                    {initiate ? "SELL" : " SELL"} <br />
                    {initiate && sell_rate}
                  </p>

                  {initiate && (
                    <>
                      <p style={{ fontSize: "36px", gap: "0px" }}>
                        {sell_price}
                      </p>
                      <sub style={{ marginTop: "20px" }}>{sell_item}</sub>
                    </>
                  )}
                </div>
              </div>
              {initiate ? (
                <></>
              ) : (
                <div className="initisterfo" onClick={handleMouseEnter}>
                  <p>
                    <span>
                      Initiate <br /> RFQ
                    </span>
                  </p>
                </div>
              )}
              <div
                className="buybg"
                id="buybg"
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
                    {initiate ? "BUY" : " BUY"} <br />
                    {initiate && buy_rate}
                  </p>
                  {initiate && (
                    <>
                      <p style={{ fontSize: "36px", gap: "0px" }}>
                        {buy_price}
                      </p>
                      <sub style={{ marginTop: "20px" }}>{buy_item}</sub>
                    </>
                  )}
                </div>
              </div>
            </div>
            <Box style={{ textAlign: "center", margin: "0 auto" }}>
              USDT{" "}
              <span
                style={{
                  borderBottom: "1px solid black",
                  padding: "0px 8px",
                }}
              >
                {amount}
              </span>
            </Box>
            {initiate && (
              <Box
                sx={{ width: "100%", display: "flex", fontFamily: "Roboto" }}
              >
                <LinearProgressWithLabel value={progress} />
                <Box sx={{ width: "20%" }}>
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={() => handleSetFinish()}
                  >
                    Reject
                  </Button>
                </Box>
              </Box>
            )}
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};
