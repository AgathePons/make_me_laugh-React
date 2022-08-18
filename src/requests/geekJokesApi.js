// == Import
import axios from 'axios';

const requestJoke = async () => {
  try {
    return await axios.get('https://geek-jokes.sameerkumar.website/api?format=json');
  }
  catch (err) {
    console.error(err.response);
    return false;
  }
};
export default requestJoke;
