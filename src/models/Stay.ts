export type Stay = {
  city: string;
  country: string;
  superHost: boolean;
  title: string;
  rating: number;
  maxGuests: number;
  type: 'Entire apartment' | 'Entire house' | 'Private room';
  beds: number | null;
  photo: string;
};

const isStay = (arg: unknown): arg is Stay => {
  const s = arg as Stay;

  return (
    typeof s.city === 'string' &&
    typeof s.country === 'string' &&
    typeof s.superHost === 'boolean' &&
    typeof s.title === 'string' &&
    typeof s.rating === 'number' &&
    typeof s.maxGuests === 'number' &&
    (s.type === 'Entire apartment' ||
      s.type === 'Entire house' ||
      s.type === 'Private room') &&
    (typeof s.beds === 'number' || s.beds === null) &&
    typeof s.photo === 'string'
  );
};

const isStays = (args: unknown[]): args is Stay[] => {
  return !args.some((arg) => !isStay(arg));
};

export { isStay, isStays };
