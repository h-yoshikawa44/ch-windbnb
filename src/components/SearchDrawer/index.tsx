import {
  FC,
  ComponentPropsWithRef,
  MouseEventHandler,
  useState,
  useCallback,
} from 'react';
import { css } from '@emotion/react';
import { Search } from '@emotion-icons/material-rounded/Search';
import Drawer from '@/components/SearchDrawer/Drawer';
import Backdrop from '@/components/SearchDrawer/Backdrop';
import SearchBox from '@/components/SearchDrawer/SearchBox';
import SelectLocationList from '@/components/SearchDrawer/SelectLocationList';
import CalcGuests from '@/components/SearchDrawer/CalcGuests';
import { Guests } from '@/hooks/stay';

type Tab = 'location' | 'guests';

type Props = ComponentPropsWithRef<'div'> & {
  open: boolean;
  location: string;
  guests: Guests;
  onClose: MouseEventHandler<HTMLDivElement>;
  onSelectLocation: (selectLocation: string) => void;
  onPlusGuests: (prop: keyof Guests) => void;
  onMinusGuests: (prop: keyof Guests) => void;
  onSearch: (ev: React.FormEvent<HTMLFormElement>) => void;
};

const SearchDrawer: FC<Props> = ({
  open = false,
  location,
  guests,
  onClose,
  onSelectLocation,
  onPlusGuests,
  onMinusGuests,
  onSearch,
}) => {
  const [tab, setTab] = useState<Tab>('location');
  const handleSelectTab = useCallback((tabType: Tab) => {
    setTab(tabType);
  }, []);

  return (
    <Drawer open={open}>
      <Backdrop open={open} onClick={onClose} />
      <div css={[drawerContent, container, !open && hiddenVisibility]}>
        <div css={searchBoxMargin}>
          <SearchBox
            tab={tab}
            location={location}
            guests={guests}
            onTabChange={handleSelectTab}
            onSearch={onSearch}
          />
        </div>
        <div css={searchContentBox}>
          <div css={tab !== 'location' && hiddenVisibility}>
            <SelectLocationList onSelectLocation={onSelectLocation} />
          </div>
          <div css={tab !== 'guests' && hiddenVisibility}>
            <CalcGuests
              adultsNum={guests.adults}
              childrenNum={guests.children}
              onPlusGuests={onPlusGuests}
              onMinusGuests={onMinusGuests}
            />
          </div>
          <div />
        </div>
      </div>
    </Drawer>
  );
};

const drawerContent = css`
  position: fixed;
  top: 0;
  width: 100%;
  min-height: 460px;
  background-color: #fff;
`;

const container = css`
  max-width: 1280px;
  padding: 0 4%;
  margin: 0 auto;
`;

const hiddenVisibility = css`
  visibility: hidden;
`;

const searchBoxMargin = css`
  margin-top: 88px;
`;

const searchContentBox = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 42px 0;
`;

export default SearchDrawer;
