import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditNoteIcon from '@mui/icons-material/EditNote';
import {Grid} from "@mui/material";

function ToDoListItem({markAsSelected, index, todo, isSelected}) {
  return (
    <ListItem key={index} onClick={() => {
      markAsSelected(index)
    }} sx={{
      backgroundColor: '#1e1e1e',
      mb: 1,
      borderRadius: '15px',
      width: '100%',
      border: '1px solid',
      borderColor: 'rgba (249, 250, 251, 1)',
    }}>
      <Grid container alignItems="center">
        <Grid item xs={1}>
          <Box sx={{
            width: 30,
            height: 30,
            backgroundColor: isSelected ? '#38E54D' : '#C70039',
            borderRadius: '100%',
            mr: 2,
            cursor: 'pointer',
          }}>
          </Box>
        </Grid>
        <Grid item xs={8}>
          <ListItemText primary={todo.value} sx={{
            fontSize: '2rem',
            textDecoration: !isSelected && 'line-through',
            cursor: 'default',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}/>
        </Grid>
        <Grid item xs={1} sx={{
          display: 'flex', ml: 3,
        }}>
          <EditNoteIcon sx={{fontSize: 40, cursor: 'pointer', mr: 1}}/>
          <DeleteOutlineIcon sx={{fontSize: 40, mr: 1, cursor: 'pointer'}}/>
        </Grid>
      </Grid>
    </ListItem>)
}

export default ToDoListItem
