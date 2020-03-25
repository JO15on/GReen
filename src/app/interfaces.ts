export interface ICoords {
    coords: {
        lat: number;
        lng: number;
    }
    zoom: number
}

export interface IMarker {
    title: string;
    position: string;
    label: string;
}

export interface ILatLng {
    lat: number;
    lng: number;
}