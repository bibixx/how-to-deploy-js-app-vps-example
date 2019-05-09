import React, {useState, useEffect} from 'react';

const t2d = d => String(d).padStart(2, '0');
const getDate = () => {
  const now = new Date();
  return (`${t2d(now.getHours())}:${t2d(now.getMinutes())}:${t2d(now.getSeconds())}`);
}

function App() {
  const [date, setDate] = useState(getDate());

  useEffect(() => {
    setInterval(() => {
      setDate(getDate())
    }, 1000);
  }, [])

  return (
    <p id="date">{date}</p>
  );
}

export default App;
