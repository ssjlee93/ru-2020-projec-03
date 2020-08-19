import React from "react";
import Paper from '@material-ui/core/Paper';
import Box from "@material-ui/core/Box";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

export default function Header() {
  return (
    <Box my={2}>
        <Card variant="outlined">
            <CardContent>
                <Grid container>
                    <Grid item xs={9}>
                        <Typography variant="h3">PocketMoney</Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant="h4">Home Signout</Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    </Box>
  );
}