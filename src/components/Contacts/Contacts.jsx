import { Button, Card, CardContent, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Map from "../Map";

const Contacts = () => {
  return (
    <center
      style={{ paddingTop: "30px", backgroundColor: "rgba(103, 177, 194 )" }}
    >
      <h1
        style={{
          display: "inline",
          fontSize: "50px",
          color: "#42666E",
        }}
      >
        Contacts Us
      </h1>
      <div style={{ position: "relative" }}>
        <img
          src="https://www.pngall.com/wp-content/uploads/5/The-Boss-Baby-Movie-PNG.png"
          style={{
            maxWidth: "300px",
            height: "200px",
            position: "absolute",
            top: "-150px",
            right: "50px",
            zIndex: "99",
          }}
        ></img>
      </div>
      <Box>
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            marginTop: "20px",
          }}
          maxWidth="lg"
        >
          <Box sx={{ maxWidth: "500px" }}>
            <img
              src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              style={{
                maxWidth: "500px",
                height: "400px",
                width: "100%",
                borderRadius: "50px",
                opacity: "80%",
              }}
            ></img>
          </Box>
          <Box>
            <center>
              <Card
                sx={{
                  maxWidth: "600px",
                  backgroundImage: "url('')",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <CardContent>
                  <form>
                    <Grid container spacing={1}>
                      <Grid xs={12} sm={6} item>
                        <TextField
                          label="First Name"
                          placeholder="Enter first name"
                          variant="outlined"
                          fullWidth
                          color="warning"
                        />
                      </Grid>

                      <Grid xs={12} sm={6} item>
                        <TextField
                          label="Last Name"
                          placeholder="Enter  last name"
                          variant="outlined"
                          fullWidth
                          required
                          color="warning"
                        />
                      </Grid>

                      <Grid xs={12} item>
                        <TextField
                          type="email"
                          label="Email"
                          placeholder="Enter  email"
                          variant="outlined"
                          fullWidth
                          required
                          color="warning"
                        />
                      </Grid>

                      <Grid xs={12} item>
                        <TextField
                          type="number"
                          label="Phone"
                          placeholder="Enter phone number"
                          variant="outlined"
                          fullWidth
                          required
                          color="warning"
                        />
                      </Grid>

                      <Grid xs={12} item>
                        <TextField
                          label="Message"
                          placeholder="Type your message"
                          variant="outlined"
                          fullWidth
                          required
                          multiline
                          rows={4}
                          color="warning"
                        />
                      </Grid>

                      <Grid xs={12} item>
                        <Button
                          variant="contained"
                          color="primary"
                          fullWidth
                          color="warning"
                          sx={{ backgroundColor: "#42666E" }}
                        >
                          Submit
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </CardContent>
              </Card>
            </center>
          </Box>
        </Grid>
      </Box>

      <hr
        style={{
          maxWidth: "70vw",
          border: "3px solid #42666E",
          marginTop: "50px",
        }}
      ></hr>

      <center>
        {" "}
        <Map />
      </center>
    </center>
  );
};

export default Contacts;
