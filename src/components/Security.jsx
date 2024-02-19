import { Button, Card, CardHeader, Grid, TextField } from "@material-ui/core";

export default function Security() {
  return (
    <Grid container spacing={2} style={{ padding: "20px", marginTop: "10px" }}>
      <Grid item xs={12} sm={8}>
        <Card>
          <CardHeader
            title="Change Password"
            titleTypographyProps={{ variant: "h6" }}
            style={{
              textAlign: "left",
              borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
            }}
            // Add any additional props or styles as needed
          />
          <div style={{ padding: "20px" }}>
            <TextField
              required
              id="outlined-required"
              label="current password"
              variant="outlined"
              style={{ width: "100%", magin: "20px 0" }}
            />
            <div className="flex gap-4 my-5">
              <TextField
                required
                id="outlined-required"
                label="new password"
                variant="outlined"
                style={{ width: "50%", magin: "20px 0" }}
              />
              <TextField
                required
                id="outlined-required"
                label="Re-enter password"
                variant="outlined"
                style={{ width: "50%", magin: "20px 0" }}
              />
            </div>
            <Button variant="contained" color="primary">
              Change Password
            </Button>
          </div>
        </Card>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Card>
          <CardHeader
            title="Delete Account"
            titleTypographyProps={{ variant: "h6" }}
            style={{
              textAlign: "left",
              borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
            }}
            // Add any additional props or styles as needed
          />
          <div style={{ padding: "20px" }} className="space-y-3">
            <p>
              To deactivate your account, first delete its resources. If you are
              the only owner of any teams, either assign another owner or
              deactivate the team.{" "}
            </p>
            <Button
              variant="outlined"
              style={{ color: "#F44236", border: "1px solid #F44236" }}
            >
              Delete Account
            </Button>
          </div>
        </Card>
      </Grid>
    </Grid>
  );
}
