import { useState, useContext, useCallback, useMemo } from 'react';
import { DrawerMenuContext } from '@/components/context/DrawerMenuContext';
import { GetListRequestQuery, Guests, Stays } from '@/models/Stay';
import { stays as stayData } from '@/data/stays';

const defaultSearchQuery: GetListRequestQuery = {
  location: '',
  guests: { adults: 0, children: 0 },
};

const filterStays = (stays: Stays, searchParams = defaultSearchQuery) => {
  return stays.filter((stay) => {
    if (searchParams.location) {
      if (searchParams.location !== `${stay.city}, ${stay.country}`) {
        return false;
      }
    }

    const guests = searchParams.guests.adults + searchParams.guests.children;
    if (guests > stay.maxGuests) {
      return false;
    }
    return true;
  });
};

const useStays = () => {
  const [stays, setStays] = useState<Stays>(stayData);
  const [location, setLocation] = useState<string>('');
  const [guests, setGuests] = useState<Guests>({
    adults: 0,
    children: 0,
  });
  const { handleDrawerClose } = useContext(DrawerMenuContext);

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
    [guests],
  );

  const handleMinusGuests = useCallback(
    (prop: keyof Guests) => {
      setGuests((prevGuests) => {
        const calcValue =
          prevGuests[prop] < 1 ? prevGuests[prop] : prevGuests[prop] - 1;
        return { ...guests, [prop]: calcValue };
      });
    },
    [guests],
  );

  const handleClear = useCallback(() => {
    setLocation('');
    setGuests({ adults: 0, children: 0 });
    setStays(stayData);
  }, []);

  const handleSearch = useCallback(
    (ev: React.FormEvent<HTMLFormElement>) => {
      ev.preventDefault();
      setStays(filterStays(stayData, { location, guests }));
      handleDrawerClose();
    },
    [location, guests, handleDrawerClose],
  );

  return {
    location,
    guests,
    stays,
    handleSelectLocation,
    handlePlusGuests,
    handleMinusGuests,
    handleClear,
    handleSearch,
  };
};

export default useStays;
