import { Grid, Typography } from "@material-ui/core";

const Welcome = (props) => {
  return (
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      justify="center"
      style={{ padding: "30px", minHeight: "93vh", backgroundSize: "cover", backgroundImage: `url("https://static1.shine.com/l/m/images/blog/job_search_portals.png")` }}
    >
      <Grid item  >
        <Typography variant="h3" style={{color: "darkred", fontFamily: 'Roboto'}}>Welcome to Our Job Portal</Typography>
      </Grid>
    </Grid>
  );
};

export const ErrorPage = (props) => {
  return (
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      justify="center"
      style={{ padding: "30px", minHeight: "93vh"}}
    >
      <Grid item>
        <Typography variant="h2">Error 404</Typography>
      </Grid>
    </Grid>
  );
};

export default Welcome;
