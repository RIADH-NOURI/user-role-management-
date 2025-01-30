import Roles from './pages/roles';
import Users from './pages/users';
import {Routes,Route} from 'react-router-dom'
const App = ()=>{
  return(
    <Routes>
    <Route path='/roles' element={<Roles/>}/>
    <Route path='/users' element={<Users/>}/>
    </Routes>
  )
}
export default App;