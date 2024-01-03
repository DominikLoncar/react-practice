import { useContext } from 'react';
import { userNameContext } from './Contexts';

const SayBye = () => {
  
    const userName = useContext(userNameContext);
    return <h2>Bye {userName}</h2>
}

export default SayBye;