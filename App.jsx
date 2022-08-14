import React , {useState} from 'react';

const App = () => {
    let Time = new Date().toLocaleTimeString();
    const [CTime , SetCTime] = useState(Time);

    const UpdateTime = () =>{
        Time = new Date().toLocaleTimeString();
        SetCTime(Time);

    };
    setInterval(UpdateTime,1000);

    return (
    <>
    <h1 className='Upper'>DIGITAL CLOCK</h1>
    <div className='main'>
    <h1 >The Current Time is :</h1>
    <h1 > {CTime}</h1>
    </div>
    </>
    );
    }

export default App;