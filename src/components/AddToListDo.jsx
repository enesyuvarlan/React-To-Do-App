import {Grid, Input} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';

function AddToListDo({inputHandle, submitHandle, toDo}) {

  return (
    <Grid container spacing={2} sx={{mb: 2}}>
      <Grid item xs={10}>
        <Input
          onChange={inputHandle}
          value={toDo}
          fullWidth
          required
          autoFocus
          disableUnderline
          placeholder="write your next task"
          sx={{
            width: 400,
            backgroundColor: "#1e1e1e",
            color: "white",
            p: 1.5,
            border: 1.5,
            borderRadius: '25px',
            mr: 2,
            borderColor: '#1e1e1e',
          }}
        />
      </Grid>
      <Grid item xs={2}>
        <Fab color="#ff5631" aria-label="add" onClick={submitHandle}
             sx={{
               backgroundColor: "#ff5631",
               '&:hover': {
                 backgroundColor: "#ff927a",
               }
             }}>
          <AddIcon/>
        </Fab>
      </Grid>
    </Grid>
  )
}

export default AddToListDo
