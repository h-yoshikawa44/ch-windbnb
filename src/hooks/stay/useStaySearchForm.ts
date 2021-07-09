import { useState, useCallback } from 'react';

export type Guests = {
  adults: number;
  children: number;
};

const useStaySearchForm = () => {
  const [location, setLocation] = useState<string>('');
  const [guests, setGuests] = useState<Guests>({
    adults: 0,
    children: 0,
  });

  const handleSelectLocation = useCallback((selectLocation: string) => {
    setLocation(selectLocation);
  }, []);

  const handlePlusGuests = useCallback(
    (prop: keyof Guests) => {
      setGuests((prevGuests) => {
        const calcValue = prevGuests[prop] + 1;
        return { ...guests, [prop]: calcValue };
      });
    },
    [guests]
  );

  const handleMinusGuests = useCallback(
    (prop: keyof Guests) => {
      setGuests((prevGuests) => {
        const calcValue =
          prevGuests[prop] < 1 ? prevGuests[prop] : prevGuests[prop] - 1;
        return { ...guests, [prop]: calcValue };
      });
    },
    [guests]
  );

  const handleClear = useCallback(() => {
    setLocation('');
    setGuests({ adults: 0, children: 0 });
  }, []);

  return {
    location,
    guests,
    handleSelectLocation,
    handlePlusGuests,
    handleMinusGuests,
    handleClear,
  };
};

export default useStaySearchForm;
