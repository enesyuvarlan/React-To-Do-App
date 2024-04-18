import AddToListDo from "./components/AddToListDo.jsx";
import ToDoHeader from "./components/ToDoHeader.jsx";
import ToDoListItem from "./components/ToDoListItem.jsx";
import {useState} from 'react'
import {Container} from '@mui/material';
import Box from '@mui/material/Box';
import List from '@mui/material/List';

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const submitHandle = () => {
    if (toDo != '') {
      setToDos([...toDos, {value: toDo, isSelected: false}])
      setToDo("")
    }
  }
  const inputHandle = e => {
    setToDo(e.target.value)
  }
  const markAsSelected = (index) => {
    let item = toDos[index]
    item.isSelected = !item.isSelected
    let newToDos = toDos
    newToDos[index] = item
    setToDos([...newToDos])
  }
  return (
    <Container sx={{width: '550px', pt: 5}}>
      <ToDoHeader isSelected={false} toDos={toDos}> </ToDoHeader>
      <Box sx={{width: '100%'}}>
        <AddToListDo inputHandle={inputHandle} submitHandle={submitHandle} toDo={toDo}/>
        <Box sx={{width: '100%'}}>
          <List sx={{width: '100%',}}>
            {toDos.map((todo, index) => (
              <ToDoListItem
                onClick={markAsSelected}
                index={index}
                key={index}
                todo={todo}
                markAsSelected={markAsSelected}
                isSelected={todo.isSelected}
              />
            ))
            }
          </List>
        </Box>
      </Box>
    </Container>
  )
}

export default App
