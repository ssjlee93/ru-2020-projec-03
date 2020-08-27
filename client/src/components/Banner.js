import React from "react";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import "./BannerStyle.css";
// Plain About Me page. No sign in or sign up on this page 
function Banner() {
  return (
    <Grid item lg={6}>
      <Typography className="whiteText Header" variant="h4" align="left">About Pocket Money</Typography>
        <Typography className="whiteText" align="justify" variant="body1">
          Living in a world where the cost of living continuously rises, many people look to build a better relationship with their finances and money. Due to COVID-19 and the resulting job insecurities within various industries many individuals have begun to set budgets and expense guidelines for themselves so theat they can balance their wants and needs. Even with the apparent financial challenges, people desire to travel and pursue life experiences. To mediate the challenge and their desires, Pocket Money was born.
        </Typography>
        <br/>
        <Typography className="whiteText" align="justify" variant="body1">
          Pocket Money is an app that allows users to log and view their budget. The app is powered by the Big Mac Index which allows a user to have a more accurate calculation of how far their money with go when visiting another country.  The app uses the USD as its baseline and does a back end conversion to more accurately equate the value of the USD to the economy of the desination county.  
        </Typography>
    </Grid>
        
  );
}

export default Banner;
