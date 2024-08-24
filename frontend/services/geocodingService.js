import axios from 'axios';
import Config from 'react-native-config';

const fetchLocationName = async (latitude, longitude) => {
  const apiKey = Config.OPENCAGE_API_KEY;
  const response = await axios.get(`https://api.opencagedata.com/geocode/v1/json`, {
    params: {
      key: apiKey,
      q: `${latitude},${longitude}`,
      pretty: 1,
      no_annotations: 1,
    },
  });
  return response.data.results[0].formatted;
};
