import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Grid} from '@mui/material';


function ToDoHeader({toDos}) {
  return (
    <Grid container sx={{
      alignItems: 'center',
      p: 5,
      borderRadius: '40px',
      border: '2px solid',
      borderColor: 'rgba (249, 250, 251, 1)',
      mb: 5,
    }}>
      <Grid item xs={8}>
        <Box>
          <Typography variant="h3" gutterBottom> Todo Done </Typography>
        </Box>
      </Grid>
      <Grid item xs={4}>
        <Box sx={{
          p: 5,
          backgroundColor: '#ff5631',
          borderRadius: '100%',
          width: '4rem',
          height: '4rem',
        }}>
          <Typography variant="h2" gutterBottom color={'black'} sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            {toDos.filter(e => e.isSelected == true).length}/{toDos.length}
          </Typography>
        </Box>
      </Grid>
    </Grid>


  )
}

export default ToDoHeader
