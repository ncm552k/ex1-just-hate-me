import { useSelector } from 'react-redux'

import { getData } from 'utils/dataFunc'
import EmployItem from './EmployItem'

const EmployList = () => {
  const data = useSelector((state) => state.data.data)

  const filteredData = getData(data, [], '')
  return (
    <div className='flex-1 overflow-auto'>
      <div className='p-3 grid-container '>
        {filteredData.map((item) => (
          <EmployItem name={item.name} job={item.job} email={item.email} key={item.id} />
        ))}
      </div>
    </div>
  )
}

export default EmployList
