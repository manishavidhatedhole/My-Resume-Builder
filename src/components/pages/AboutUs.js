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
              variant="h5"
              color="inherit"
              sx={{ mb: 4, mt: 4, fontFamily: "Segoe UI", fontWeight: "bold" }}
            >
              " Welcome to My Resume Builder ! "
            </Typography>
            <Typography
              marginBottom={5}
              variant="h6"
              color="inherit"
              textTransform={"capitalize"}
            >
               <Typography>               
              </Typography>
              "I understand the importance of creating a professional and impactful resume. 
          I believe that a well-crafted resume can make a significant difference in your job search, helping you stand out from the competition
          and land your dream job.<br/>
          <br/>My Resume Builder is designed to simplify the resume creation process, offering a user-friendly interface
          and a wide range of customizable templates. Whether you're a recent graduate, a seasoned professional, or making a career transition,
          my platform provides the tools and resources you need to create a compelling resume that highlights your skills, experience, 
          and achievements."<br>
          </br>
          Start building your future today!
          <br></br>
          Share with Your Friends.
          
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
