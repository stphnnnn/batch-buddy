import React from 'react';
import classNames from 'classnames';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@reach/tabs';
import { StoreProvider } from '../global/storeContext';
import { RecipeList } from './RecipeList';
import { IngredientTotals } from './IngredientTotals';
import { AddModal } from './AddModal';
import { Search } from './Search';

const StyledTab = props => {
  const { isSelected, children } = props;
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
    <StoreProvider>
      <div>
        <header className="Header mv5 flex items-center justify-between">
          <h1 className="f3 ma0 red" style={{ userSelect: 'none' }}>
            BatchBuddy®
          </h1>
          <AddModal />
        </header>

        <Tabs className="mb5">
          <TabList
            className="mb4 pb4 pt2 w-100 bg-white flex justify-around"
            style={{ position: 'sticky', top: 0 }}
          >
            <StyledTab>Recipes</StyledTab>
            <StyledTab>Ingredient Totals</StyledTab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Search
                value={searchValue}
                onChange={event => setSearchValue(event.target.value)}
                className="mb5"
              />
              <RecipeList searchValue={searchValue} />
            </TabPanel>
            <TabPanel>
              <IngredientTotals />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </StoreProvider>
  );
};

export default App;
