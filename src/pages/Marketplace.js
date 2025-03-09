import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Button,
  Chip,
  TextField,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import { Search, FilterList } from '@mui/icons-material';

// 模拟数据
const gpuListings = [
  {
    id: 1,
    name: 'NVIDIA RTX 4090',
    provider: 'Provider A',
    location: 'US West',
    price: 2.5,
    memory: 24,
    rating: 4.8,
    availability: 'Available',
  },
  {
    id: 2,
    name: 'NVIDIA A100',
    provider: 'Provider B',
    location: 'Europe',
    price: 4.0,
    memory: 80,
    rating: 4.9,
    availability: 'Available',
  },
  {
    id: 3,
    name: 'NVIDIA RTX 3090',
    provider: 'Provider C',
    location: 'Asia',
    price: 1.8,
    memory: 24,
    rating: 4.7,
    availability: 'In Use',
  },
];

function Marketplace() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGpu, setSelectedGpu] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  const handleRent = (gpu) => {
    setSelectedGpu(gpu);
    setOpenDialog(true);
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        GPU Marketplace
      </Typography>

      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            placeholder="Search GPUs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: <Search sx={{ mr: 1, color: 'text.secondary' }} />,
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button
              variant="outlined"
              startIcon={<FilterList />}
              sx={{ minWidth: 120 }}
            >
              Filter
            </Button>
            <TextField
              select
              label="Sort by"
              defaultValue="price"
              sx={{ minWidth: 120 }}
            >
              <MenuItem value="price">Price</MenuItem>
              <MenuItem value="rating">Rating</MenuItem>
              <MenuItem value="memory">Memory</MenuItem>
            </TextField>
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        {gpuListings.map((gpu) => (
          <Grid item xs={12} md={6} lg={4} key={gpu.id}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                  <Typography variant="h6">{gpu.name}</Typography>
                  <Chip
                    label={gpu.availability}
                    color={gpu.availability === 'Available' ? 'success' : 'default'}
                    size="small"
                  />
                </Box>
                
                <Grid container spacing={1}>
                  <Grid item xs={6}>
                    <Typography color="textSecondary">Provider</Typography>
                    <Typography>{gpu.provider}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography color="textSecondary">Location</Typography>
                    <Typography>{gpu.location}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography color="textSecondary">Memory</Typography>
                    <Typography>{gpu.memory}GB</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography color="textSecondary">Rating</Typography>
                    <Typography>{gpu.rating}/5.0</Typography>
                  </Grid>
                </Grid>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
                  <Typography variant="h6" color="primary">
                    ${gpu.price}/hour
                  </Typography>
                  <Button
                    variant="contained"
                    onClick={() => handleRent(gpu)}
                    disabled={gpu.availability !== 'Available'}
                  >
                    Rent Now
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Rent GPU</DialogTitle>
        <DialogContent>
          {selectedGpu && (
            <Box sx={{ mt: 2 }}>
              <Typography variant="h6" gutterBottom>
                {selectedGpu.name}
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Duration (hours)"
                    type="number"
                    defaultValue={1}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Task Description"
                    multiline
                    rows={4}
                  />
                </Grid>
              </Grid>
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button variant="contained" onClick={() => setOpenDialog(false)}>
            Confirm Rental
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default Marketplace;
