import React from "react";
import { Grid, Typography, Container } from "@mui/material";
import { Box } from "@mui/system";
import { SocialMediaImg } from "../../data/Data";
import { Link } from "react-router-dom";
import about from "../pages/about.png"

//  This Media Icons component  Displaying Social Media Icons********************************

const MediaIcons = (props) => {
  console.log(props.img);
  return (
    <div>
      <Box sx={{ margin: "5px 10px" }}>
        <Link to={props.img.Link}>
          <img
            style={{ width:'30px' }}
            src={props.img.image}
            alt="IconImage"
          />
        </Link>
      </Box>
    </div>
  );
};

// About Us Content ***************************************************************************

const AboutUs = () => {
  return (
    <>
      <Container>
        <Grid container direction="row" alignItems="center" sx={{ mt: 8 }}>
          <Grid item xs={12} lg={6} order={{ xs: 1, sm: 1 }}>
            <Typography
              variant="h2"
              color="inherit"
              sx={{ mb: 4, mt: 4, fontFamily: "Segoe UI", fontWeight: "500" }}
            >
              Resume Builder
            </Typography>
            <Typography
              marginBottom={5}
              variant="h6"
              color="inherit"
              textTransform={"capitalize"}
            >
              Welcome to My Resume Builder App!!
              <Typography
                sx={{
                  fontWeight: "bold",
                  color: "red",
                  letterSpacing: 2,
                }}
              >
                Manisha Dhole.
              </Typography>
              My journey began with a simple idea - to empower job seekers like you
              with a user-friendly and fully responsive resume builder app.. I'm sure it will be 
              a valuable resource for many people. 
              Using the power of React, we've crafted an application that
              simplifies the process of creating a standout resume.
              <br />
              My aim : Empower job seekers with responsive, user-centric
              resumes. I hope this information helps you find what you're looking for!
               Your success starts here. Happy Resume Building!!
            </Typography>
          </Grid>
          <Grid
            container
            item
            lg={6}
            justifyContent="center"
            order={{ xs: 2, sm: 2 }}
          >
            <Box
              sx={{
                width: "80%",
                marginLeft: "100px",
                marginTop: "50px",
                marginBottom: "50px",
                borderRadius: "50px",
                display: "flex",
              }}
              component="img"
              src={about}
              alt="AboutUs"
            />
          </Grid>
        </Grid>

        <Box
          sx={{
            display: "flex",
            flexDirection: "flex-end",
            width: "10%",
          }}
        >
          {SocialMediaImg &&
            SocialMediaImg.map((img) => {
              return <MediaIcons Link={img.Link} img={img} key={img.id} />;
            })}
        </Box>
      </Container>
    </>
  );
};

export default AboutUs;
