import React ,{createContext}from 'react'
import Messages from './Messages';


export const MessagesContext= createContext();
// export function useDetails(){
//     return useContext(MessagesContext);

// }
export default function Chat()

{
    const h="Bindu"
    return (
      <div>
        <MessagesContext.Provider value={h}>
            <Messages/>
        </MessagesContext.Provider>
      </div>
    );
  }
