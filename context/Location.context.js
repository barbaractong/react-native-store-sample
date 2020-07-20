import {createContext} from 'react';

const LocationContext = createContext([{ lat: 0, lng: 0, time: null}, () => {}]);

export default LocationContext;