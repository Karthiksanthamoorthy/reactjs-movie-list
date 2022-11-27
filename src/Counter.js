import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';


// function App() {
//    const names=["pandya", "ayan", "anjan", "dhamo"]
//    return (
//      <div className="App">
//        {/*<Welcome name="pandya" />
//        <Welcome name="ayan" />
//    <Welcome name="anjan" />*/}
//        {names.map(nm => <Welcome name={nm} />)}
//      </div>
//    );
//  }
export function Counter1() {
  let [like, setLike] = useState(0);
  let [disLike, disSetLike] = useState(0);

  const likeStyles = {
    color: like >= 10 ?  "green" : "blue",
  };
  const disLikeStyles = {
    color: disLike >= 10 ? "red" : "blue",
  }


  return (
    <div>
      {like - disLike >= 11 ? <h3>You are Awesome😊😊</h3> : null }
      <button style={likeStyles}
        onClick={() => setLike(like + 1)}>
        👍Like{like}</button>
      <button style={disLikeStyles}
        onClick={() => disSetLike(disLike + 1)}>
        👎DisLike{disLike}</button>

    </div>
  );
}

export function Counter() {
  let [like, setLike] = useState(0);
  let [disLike, disSetLike] = useState(0);

 
  const incrementLike = () => setLike(like + 1);
  const incrementDisLike = () => disSetLike(disLike + 1);

  return (
    <div>
      <IconButton onClick={incrementLike} color="primary" aria-label="like">
        <Badge badgeContent={like} color="primary">
      👍
     </Badge>     
</IconButton>

      
      <IconButton onClick={incrementDisLike} color="error" aria-label="dislike">
        <Badge badgeContent={disLike} color="error">
        👎
     </Badge>
      </IconButton>
      
      {/* <button onClick={incrementDisLike}>
      👎DisLike{disLike}</button> */}
      
    </div>
  ); 
}
