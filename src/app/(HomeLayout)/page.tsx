'use client';
import PageContainer from "../components/PageContainer";
import { Box, Grid } from "@mui/material";
import SearchBox from "../components/SearchBox";
import styles from "../components/styles.module.scss";

const Home = () => {
  return (
    <PageContainer>
      <Box>
        <Grid container >
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", mt: 3, p: 1 }}>
            <SearchBox />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
}

export default Home;