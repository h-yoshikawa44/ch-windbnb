export type Stay = {
  city: string;
  country: string;
  superHost: boolean;
  title: string;
  rating: number;
  maxGuests: number;
  type: 'Entire apartment' | 'Entire house' | 'Private room';
  beds: number;
  photo: string;
};
