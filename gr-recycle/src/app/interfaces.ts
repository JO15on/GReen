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