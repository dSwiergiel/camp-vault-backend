export interface Campsite {
  id: number;
  countyId?: number;
  countyName?: string;
  locationName: string;
  siteName: string;
  type: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
}
