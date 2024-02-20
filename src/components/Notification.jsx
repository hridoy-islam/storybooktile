import { Button, Card, CardHeader, Grid } from "@material-ui/core";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function Notification() {
  return (
    <Grid container spacing={2} style={{ padding: "20px", marginTop: "10px" }}>
      <Grid item xs={12} sm={8}>
        <Card>
          <CardHeader
            title="Subscription Preference Center"
            titleTypographyProps={{ variant: "h6" }}
            style={{
              textAlign: "left",
              borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
            }}
            // Add any additional props or styles as needed
          />
          <div style={{ padding: "20px" }}>
            <p>I would like to receive:</p>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Product Announcements and Updates"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Events and Meetups"
                style={{ marginTop: "10px" }}
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="User Research Surveys"
                style={{ marginTop: "10px" }}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Hatch Startup Program"
                style={{ marginTop: "10px" }}
              />
            </FormGroup>
          </div>
        </Card>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Card>
          <CardHeader
            title="Opt me out instead"
            titleTypographyProps={{ variant: "h6" }}
            style={{
              textAlign: "left",
              borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
            }}
            // Add any additional props or styles as needed
          />
          <div style={{ padding: "20px" }} className="space-y-3">
            <FormGroup>
              <FormControlLabel
                control={<Checkbox />}
                label="Unsubscribe me from all of the above"
              />
            </FormGroup>
            <Button
              variant="contained"
              color="primary"
              style={{ marginTop: "15px" }}
            >
              Update my preferences
            </Button>
          </div>
        </Card>
      </Grid>
    </Grid>
  );
}
