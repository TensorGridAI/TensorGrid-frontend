import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Button,
  Tabs,
  Tab,
  LinearProgress,
  Chip,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import {
  MoreVert,
  PlayArrow,
  Stop,
  Refresh,
} from '@mui/icons-material';

// 模拟数据
const tasksList = [
  {
    id: 1,
    name: 'BERT Fine-tuning',
    status: 'Running',
    progress: 65,
    gpu: 'NVIDIA RTX 4090',
    startTime: '2025-03-09 10:30',
    cost: 12.5,
  },
  {
    id: 2,
    name: 'Image Classification Training',
    status: 'Completed',
    progress: 100,
    gpu: 'NVIDIA A100',
    startTime: '2025-03-09 08:15',
    cost: 28.0,
  },
  {
    id: 3,
    name: 'GPT Model Inference',
    status: 'Paused',
    progress: 45,
    gpu: 'NVIDIA RTX 3090',
    startTime: '2025-03-09 12:00',
    cost: 8.2,
  },
];

function Tasks() {
  const [tabValue, setTabValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedTask, setSelectedTask] = useState(null);

  const handleMenuClick = (event, task) => {
    setAnchorEl(event.currentTarget);
    setSelectedTask(task);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedTask(null);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Running':
        return 'success';
      case 'Paused':
        return 'warning';
      case 'Completed':
        return 'info';
      default:
        return 'default';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Running':
        return <Stop />;
      case 'Paused':
        return <PlayArrow />;
      default:
        return <Refresh />;
    }
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Tasks
      </Typography>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs
          value={tabValue}
          onChange={(e, newValue) => setTabValue(newValue)}
        >
          <Tab label="All Tasks" />
          <Tab label="Running" />
          <Tab label="Completed" />
        </Tabs>
      </Box>

      <Grid container spacing={3}>
        {tasksList.map((task) => (
          <Grid item xs={12} key={task.id}>
            <Card>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography variant="h6">{task.name}</Typography>
                      <Box>
                        <Chip
                          label={task.status}
                          color={getStatusColor(task.status)}
                          size="small"
                          sx={{ mr: 1 }}
                        />
                        <IconButton
                          size="small"
                          onClick={(e) => handleMenuClick(e, task)}
                        >
                          <MoreVert />
                        </IconButton>
                      </Box>
                    </Box>
                    <Typography color="textSecondary" gutterBottom>
                      GPU: {task.gpu}
                    </Typography>
                  </Grid>
                  
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography>Start Time: {task.startTime}</Typography>
                      <Typography color="primary">Cost: ${task.cost}</Typography>
                    </Box>
                  </Grid>

                  <Grid item xs={12}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Box sx={{ width: '100%', mr: 1 }}>
                        <LinearProgress
                          variant="determinate"
                          value={task.progress}
                          sx={{ height: 8, borderRadius: 4 }}
                        />
                      </Box>
                      <Typography variant="body2" color="textSecondary">
                        {task.progress}%
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {selectedTask && getStatusIcon(selectedTask.status)}
            <Typography sx={{ ml: 1 }}>
              {selectedTask?.status === 'Running' ? 'Stop' : 
               selectedTask?.status === 'Paused' ? 'Resume' : 'Restart'}
            </Typography>
          </Box>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>View Details</MenuItem>
        <MenuItem onClick={handleMenuClose}>Download Results</MenuItem>
        <MenuItem onClick={handleMenuClose}>Delete</MenuItem>
      </Menu>
    </Box>
  );
}

export default Tasks;
