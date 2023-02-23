import { Container, Grid } from "@mui/material";
import Card from "../../components/Card";
import Layout from "../../components/Layout";

const Home = () => {
  return (
    <Layout>
      <Container sx={{ m: 0 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              label="New Transaction"
              title="Create New Transaction"
              href="/transaction"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card label="Books" title="Available Books :" href="/books" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              label="History"
              title="Total Transaction Created : "
              href="/history"
            />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default Home;
