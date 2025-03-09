import React from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
} from '@mui/material';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

// 模拟数据
const networkData = [
  { time: '00:00', gpus: 240 },
  { time: '04:00', gpus: 300 },
  { time: '08:00', gpus: 280 },
  { time: '12:00', gpus: 420 },
  { time: '16:00', gpus: 380 },
  { time: '20:00', gpus: 350 },
];

const statsCards = [
  {
    title: 'Active GPUs',
    value: '358',
    change: '+12%',
    isPositive: true,
  },
  {
    title: 'Total Tasks',
    value: '1,245',
    change: '+5%',
    isPositive: true,
  },
  {
    title: 'Avg. Cost/Hour',
    value: '$0.85',
    change: '-8%',
    isPositive: false,
  },
  {
    title: 'Network Uptime',
    value: '99.9%',
    change: '0%',
    isPositive: true,
  },
];

function Dashboard() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Network Overview
      </Typography>
      
      <Grid container spacing={3}>
        {statsCards.map((card) => (
          <Grid item xs={12} sm={6} md={3} key={card.title}>
            <Card>
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  {card.title}
                </Typography>
                <Typography variant="h4" component="div">
                  {card.value}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: card.isPositive ? 'success.main' : 'error.main',
                  }}
                >
                  {card.change} from last week
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}

        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Network Activity
              </Typography>
              <Box sx={{ height: 300 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={networkData}
                    margin={{
                      top: 10,
                      right: 30,
                      left: 0,
                      bottom: 0,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="gpus"
                      stroke="#8884d8"
                      fill="#8884d8"
                      fillOpacity={0.3}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Dashboard;
