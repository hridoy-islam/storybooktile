import { Button, Card, Chip, Link } from "@material-ui/core";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(orderno, date, price, status) {
  return { orderno, date, price, status };
}

export default function Billing() {
  const rows = [
    createData("12877227695", "26 Feb 2021 9:16 am", "56.32", "Awaiting"),
    createData("12877227695", "26 Feb 2021 9:16 am", "56.32", "Awaiting"),
    createData("12877227695", "26 Feb 2021 9:16 am", "56.32", "Awaiting"),
    createData("12877227695", "26 Feb 2021 9:16 am", "56.32", "Awaiting"),
    createData("12877227695", "26 Feb 2021 9:16 am", "56.32", "Awaiting"),
    createData("12877227695", "26 Feb 2021 9:16 am", "56.32", "Awaiting"),
  ];
  return (
    <div className="container p-5">
      <div className="flex gap-6 my-10">
        <Card
          style={{ backgroundColor: "#FBE9E7" }}
          className="w-1/3 px-6 py-10 border-l-8 border-[#D84315] space-y-1"
        >
          <p className="text-md">Bill Due</p>
          <h2 className="text-2xl">$150.00</h2>
          <p className="text-[#D84315] text-md flex items-center gap-3">
            <span>Pay Now </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-arrow-narrow-right"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#D84315"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12l14 0" />
              <path d="M15 16l4 -4" />
              <path d="M15 8l4 4" />
            </svg>
          </p>
        </Card>
        <Card
          style={{ backgroundColor: "#FFF8E1" }}
          className="w-1/3 px-6 py-10 border-l-8 border-[#FFC107] space-y-1"
        >
          <p className="text-md">Total Credits</p>
          <h2 className="text-2xl">1570 GB</h2>
          <p className="text-[#FFC107] text-md flex items-center gap-3">
            <span>Full Report </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-arrow-narrow-right"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#FFC107"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12l14 0" />
              <path d="M15 16l4 -4" />
              <path d="M15 8l4 4" />
            </svg>
          </p>
        </Card>

        <Card
          style={{ backgroundColor: "#B9F6CA" }}
          className="w-1/3 px-6 py-10 border-l-8 border-[#00C853] space-y-1 shadow-none"
        >
          <p className="text-md">Plan</p>
          <h2 className="text-2xl">Basic</h2>
          <p className="text-[#00C853] text-md flex items-center gap-3">
            <span>Upgrade </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-arrow-narrow-right"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#00C853"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12l14 0" />
              <path d="M15 16l4 -4" />
              <path d="M15 8l4 4" />
            </svg>
          </p>
        </Card>
      </div>

      {/* <div style={{ margin: "30px 0" }}>
        <TableContainer component={Paper}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h2
              style={{ padding: "10px", fontSize: "16px", fontWeight: "bold" }}
            >
              Payment Methods
            </h2>
            <Button variant="contained" color="primary">
              Add New Method
            </Button>
          </div>

          <Table sx={{ minWidth: 650 }} aria-label="Billing History">
            <TableHead>
              <TableRow>
                <TableCell>Order No</TableCell>

                <TableCell align="left"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.orderno}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.orderno}
                  </TableCell>

                  <TableCell align="left">
                    <Chip color="primary" label="Default" /> |{" "}
                    <Link href={"/"}>Edit</Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div> */}

      <div>
        <TableContainer component={Paper}>
          <h2 style={{ padding: "10px", fontSize: "16px", fontWeight: "bold" }}>
            Billing History
          </h2>
          <Table sx={{ minWidth: 650 }} aria-label="Billing History">
            <TableHead>
              <TableRow>
                <TableCell>Order No</TableCell>
                <TableCell align="left">Date</TableCell>
                <TableCell align="left">Price</TableCell>
                <TableCell align="left">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.orderno}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.orderno}
                  </TableCell>
                  <TableCell align="left">{row.date}</TableCell>
                  <TableCell align="left">${row.price}</TableCell>
                  <TableCell align="left">
                    <Chip label={row.status} color="primary" />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
