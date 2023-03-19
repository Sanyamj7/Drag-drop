import './App.css';
import Boards from './components/Boards';
import Card from './components/Card';
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
function handleclick() {
  console.log("click happened");
  const box = document.getElementById('board-2');
  const allChildren = box.getElementsByTagName('*').length;
  const box1 = document.getElementById('board-2').children;
  const mydata = require('./read.json');
  for (let i = 0; i < (allChildren / 2); i++) {
    const item1 = box1[i].id;
    const user = {
      id: mydata[item1 - 1].id,
      data: mydata[item1 - 1].data
    }
    console.log(user);
    
  }
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function App() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // var all=new Array();
  // let user1="hello";
  const handelModelOpenClicked = () => {
    handleOpen();
    handleclick();
  }

  return (
    <div className="App">
      <main className="flexbox">
        <Boards id="board-1" className="board">
          <Card id="1" className="card" draggable="true">
            <p> card one</p>
          </Card>
          <Card id="2" className="card" draggable="true">
            <p> card two</p>
          </Card>
          <Card id="3" className="card" draggable="true">
            <p> card three</p>
          </Card>
          <Card id="4" className="card" draggable="true">
            <p> card four</p>
          </Card>
          <Card id="5" className="card" draggable="true">
            <p> card five</p>
          </Card>
          <Card id="6" className="card" draggable="true">
            <p> card six</p>
          </Card>
          <Card id="7" className="card" draggable="true">
            <p> card seven</p>
          </Card>
          <Card id="8" className="card" draggable="true">
            <p> card eight</p>
          </Card>
        </Boards>
        <Boards id="board-2" className="board">

        </Boards>
        <button className='btn' onClick={handelModelOpenClicked}>Read and Write Data</button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Data Successfully Added.
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>

            </Typography>
          </Box>
        </Modal>

      </main>

    </div>
  );
}

export default App;
