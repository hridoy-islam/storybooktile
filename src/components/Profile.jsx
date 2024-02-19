import {
  Card,
  CardHeader,
  Grid,
  Avatar,
  Button,
  TextField,
} from "@material-ui/core";

export default function Profile() {
  return (
    <Grid container spacing={2} style={{ padding: "20px" }}>
      <Grid item xs={12} sm={4}>
        <Card>
          <CardHeader
            title="Profile Picture"
            titleTypographyProps={{ variant: "h6" }}
            style={{
              textAlign: "left",
              borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
            }}
            // Add any additional props or styles as needed
          />
          <div style={{ padding: "20px", textAlign: "center" }}>
            <Avatar
              alt="Remy Sharp"
              src="https://mui.com/static/images/avatar/1.jpg"
              style={{
                width: "80px",
                height: "80px",
                margin: "0 auto",
              }}
            />
            <p
              style={{
                margin: "18px 0",
              }}
            >
              Upload/Change Your Profile Image
            </p>
            <Button variant="contained" color="primary">
              Upload Avatar
            </Button>
          </div>
        </Card>
      </Grid>
      <Grid item xs={12} sm={8}>
        <Card>
          <CardHeader
            title="Edit Account Details"
            titleTypographyProps={{ variant: "h6" }}
            style={{
              textAlign: "left",
              borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
            }}
            // Add any additional props or styles as needed
          />
          <div style={{ padding: "20px" }} className="space-y-5">
            <TextField
              required
              id="outlined-required"
              label="name"
              defaultValue="JWT Token"
              variant="outlined"
              helperText="Helper text"
              style={{ width: "100%", magin: "20px 0" }}
            />
            <TextField
              required
              id="outlined-required"
              label="email"
              defaultValue="name@example.com"
              variant="outlined"
              style={{ width: "100%", magin: "20px 0" }}
            />

            <div className="grid grid-cols-2 gap-4 space-y-1">
              <TextField
                required
                id="outlined-required"
                label="company"
                defaultValue="Materially Inc."
                variant="outlined"
              />
              <TextField
                required
                id="outlined-required"
                label="country"
                defaultValue="usa"
                variant="outlined"
              />

              <TextField
                required
                id="outlined-required"
                label="phone number"
                defaultValue="4578-420-410 "
                variant="outlined"
              />
              <TextField
                required
                id="outlined-required"
                label="birthday"
                defaultValue="02/01/2003"
                variant="outlined"
              />
            </div>

            <Button variant="contained" color="primary">
              Change Details
            </Button>
          </div>
        </Card>
      </Grid>
    </Grid>
  );
}
