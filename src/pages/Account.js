import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import {
  AccountBalanceWallet,
  Security,
  Timeline,
} from '@mui/icons-material';

// 模拟数据
const transactions = [
  {
    id: 1,
    type: 'Task Payment',
    amount: -15.8,
    date: '2025-03-09 14:30',
    status: 'Completed',
  },
  {
    id: 2,
    type: 'Deposit',
    amount: 100.0,
    date: '2025-03-08 10:15',
    status: 'Completed',
  },
  {
    id: 3,
    type: 'Task Payment',
    amount: -22.5,
    date: '2025-03-07 16:45',
    status: 'Completed',
  },
];

function Account() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Account
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <AccountBalanceWallet color="primary" sx={{ mr: 1 }} />
                <Typography variant="h6">Balance</Typography>
              </Box>
              <Typography variant="h4" color="primary">
                245.80 TGRID
              </Typography>
              <Typography color="textSecondary">
                ≈ $491.60 USD
              </Typography>
              <Box sx={{ mt: 2 }}>
                <Button variant="contained" fullWidth>
                  Deposit
                </Button>
                <Button
                  variant="outlined"
                  fullWidth
                  sx={{ mt: 1 }}
                >
                  Withdraw
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Security color="primary" sx={{ mr: 1 }} />
                <Typography variant="h6">Staking</Typography>
              </Box>
              <Typography variant="h4" color="primary">
                100.00 TGRID
              </Typography>
              <Typography color="textSecondary">
                Annual Yield: 12%
              </Typography>
              <Box sx={{ mt: 2 }}>
                <Button variant="contained" fullWidth>
                  Stake More
                </Button>
                <Button
                  variant="outlined"
                  fullWidth
                  sx={{ mt: 1 }}
                >
                  Unstake
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Timeline color="primary" sx={{ mr: 1 }} />
                <Typography variant="h6">Statistics</Typography>
              </Box>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography color="textSecondary">Tasks Completed</Typography>
                  <Typography variant="h6">24</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography color="textSecondary">Total Spent</Typography>
                  <Typography variant="h6">$342.50</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography color="textSecondary">Avg. Cost/Task</Typography>
                  <Typography variant="h6">$14.27</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography color="textSecondary">Active Since</Typography>
                  <Typography variant="h6">30 days</Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Recent Transactions
              </Typography>
              <TableContainer component={Paper} variant="outlined">
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Type</TableCell>
                      <TableCell>Amount (TGRID)</TableCell>
                      <TableCell>Date</TableCell>
                      <TableCell>Status</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {transactions.map((tx) => (
                      <TableRow key={tx.id}>
                        <TableCell>{tx.type}</TableCell>
                        <TableCell
                          sx={{
                            color: tx.amount > 0 ? 'success.main' : 'error.main',
                          }}
                        >
                          {tx.amount > 0 ? '+' : ''}{tx.amount}
                        </TableCell>
                        <TableCell>{tx.date}</TableCell>
                        <TableCell>{tx.status}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Account;
