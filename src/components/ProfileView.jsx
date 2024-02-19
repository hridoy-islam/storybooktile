import { Card, CardHeader, Container, Tab, Tabs } from "@material-ui/core";
import { useState } from "react";
import Profile from "./Profile";
import Billing from "./Billing";
import Notification from "./Notification";
import Security from "./Security";

export const ProfileView = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <>
      <Container>
        <Card style={{ width: "100%", marginTop: "40px" }}>
          <CardHeader
            title="Account"
            titleTypographyProps={{ variant: "h6" }}
            style={{
              textAlign: "left",
              borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
            }}
            // Add any additional props or styles as needed
          />
          <Tabs
            value={selectedTab}
            onChange={handleTabChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
          >
            <Tab label="Profile" />
            <Tab label="Billing" />
            <Tab label="Security" />
            <Tab label="Notification" />
          </Tabs>
          {/* Render content based on the selected tab */}
          {selectedTab === 0 && <Profile />}
          {selectedTab === 1 && <Billing />}
          {selectedTab === 2 && <Security />}
          {selectedTab === 3 && <Notification />}
        </Card>
      </Container>
    </>
  );
};
