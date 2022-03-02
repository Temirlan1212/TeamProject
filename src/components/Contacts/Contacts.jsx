import { Button, Card, CardContent, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Contacts = () => {
  return (
    <center style={{ marginTop: "30px" }}>
      <h1 style={{ color: "pink", display: "inline", fontSize: "50px" }}>
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
                          sx={{
                            backgroundImage:
                              "url('data:image/jpeg;base64,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')",
                          }}
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
          border: "3px solid pink",
          marginTop: "10px",
        }}
      ></hr>
    </center>
  );
};

export default Contacts;
