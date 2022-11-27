import { useState } from 'react';
import { ColorBox } from './App';

export function AddColor() {
  const [color, setColor] = useState("orange");
  const styles = {
    background: color,
  };
  const [colorList, setColorList] = useState(["blue", "green", "yellow"]);
  return (
    <div>
      <input
        style={styles}
        onChange={(event) => setColor(event.target.value)}
        placeholder="Enter a color"
        value={color} />
      <button onClick={() => setColorList([...colorList, color])}>Add color</button>
      {colorList.map((clr) => (
        <ColorBox color={clr} />
      ))}
    </div>
  );
}
