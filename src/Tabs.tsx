import { Tab } from './types/Tab';
import { Link } from 'react-router-dom';

type Props = {
  tabs: Tab[];
  currentTab?: Tab;
};

export const Tabs = ({ tabs, currentTab }: Props) => (
  <ul>
    {tabs.map(tab => (
      <li
        key={tab.id}
        data-cy="Tab"
        className={tab.id === currentTab?.id ? 'is-active' : ''}
      >
        <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
      </li>
    ))}
  </ul>
);
