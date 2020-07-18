export function decodeUrlParameter(add) {
	const API_KEY = 'AIzaSyBwY_nAFJpnrp_YAvr7oUaUh4Gjz_23WJE';
	const ADDRESS = encodeURIComponent((add + '').replace(/\+/g, '%20'));
	return `https://maps.googleapis.com/maps/api/geocode/json?address=${ADDRESS}&key=${API_KEY}`;
}


