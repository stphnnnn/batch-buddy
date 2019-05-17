import React from 'react';
import classNames from 'classnames';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@reach/tabs';
import { StoreProvider } from '../global/storeContext';
import { RecipeList } from './RecipeList';
import { IngredientTotals } from './IngredientTotals';
import { AddModal } from './AddModal';
import { Search } from './Search';

const CoolTab = props => {
  // `isSelected` comes from `TabList` cloning the `CoolTab`.
  const { isSelected, children } = props;

  // make sure to forward *all* props received from TabList
  return (
    <Tab
      className={classNames(
        'w-100',
        'f4',
        'pb3',
        'bb',
        'bw2',
        isSelected ? 'red' : 'near-black',
        isSelected ? 'b--red' : 'b--light-gray'
      )}
      style={{
        userSelect: 'none',
      }}
      {...props}
    >
      {children}
    </Tab>
  );
};

const App = () => {
  const [searchValue, setSearchValue] = React.useState('');
  return (
    <div>
      <header className="Header mv5 flex items-center justify-between">
        <h1 className="f3 ma0 red">BatchBuddy®</h1>
        <StoreProvider>
          <AddModal />
        </StoreProvider>
      </header>

      <Tabs>
        <TabList
          className="mb4 pb4 pt2 w-100 bg-white flex justify-around"
          style={{ position: 'sticky', top: 0 }}
        >
          <CoolTab>Recipes</CoolTab>
          <CoolTab>Ingredient Totals</CoolTab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Search
              value={searchValue}
              onChange={event => setSearchValue(event.target.value)}
              className="mb5"
            />
            <StoreProvider>
              <RecipeList searchValue={searchValue} />
            </StoreProvider>
          </TabPanel>
          <TabPanel>
            <StoreProvider>
              <IngredientTotals />
            </StoreProvider>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default App;
