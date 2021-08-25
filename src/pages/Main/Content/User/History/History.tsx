import { useState } from 'react';
import Sort from '../../../../../components/Sort/Sort';
import './history.scss';

import SortingType from '../../../../../utilities/enum/sort';
import WebinarTable from '../../../../../components/WebinarTable/WebinarTable';

const History = () => {
  const [sort, setSort] = useState<SortingType[keyof SortingType]>(
    SortingType.NAME
  );
  return (
    <div className='history-main-wrapper'>
      <h3>History</h3>
      <div className='history-content-wrapper'>
        <Sort
          active={sort}
          onClick={(sort: SortingType[keyof SortingType]) => setSort(sort)}
        />
        <WebinarTable />
      </div>
    </div>
  );
};

export default History;
