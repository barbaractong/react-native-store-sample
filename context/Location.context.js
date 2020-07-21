import {createContext} from 'react';

const LocationContext = createContext([{ lat: "-23.632919", lng: "-46.699453", time: new Date()}, () => {}]);

export default LocationContext;