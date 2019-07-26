import React from 'react';
import TabNav from './components/TabNav.js';
import Header from './components/Header.js';
import AppRouter from './components/AppRouter.js';
import { Tab } from 'semantic-ui-react'

export default function App() {
  return <main>
    <Header />
    <TabNav />
    <AppRouter />
  </main>
}

const panes = [
  { menuItem: 'Tab 1', render: () => <Tab.Pane>Home</Tab.Pane> },
  { menuItem: 'Tab 2', render: () => <Tab.Pane>Characters</Tab.Pane> },
  { menuItem: 'Tab 3', render: () => <Tab.Pane>Locations</Tab.Pane> },
  { menuItem: 'Tab 4', render: () => <Tab.Pane>Episodes</Tab.Pane> },
]

const TabExampleBasic = () => <Tab panes={panes} />

<div>
  <div class="ui attached tabular menu">
    <Link to ="/">Home</Link>
    <Link to ="/characters">Characters</Link>
    <Link to ="/locations">Locations</Link>
    <Link to ="/episodes">Episodes</Link>
  </div>
  <div class="ui bottom attached segment active tab">Tab 1 Content</div>
</div>

export default TabExampleBasic