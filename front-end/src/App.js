
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppProvider } from './context/AppContext';
import Budget from './components/Budget';
import RemainingBudget  from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from "./components/AllocationForm";
import logo from "./logo.svg";


function App() {
  return (
    <AppProvider>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <div className="navbar-brand" href="#">
            <img src={logo} alt="Logo" width="32" height="32" className="d-inline-block align-text-top"/>
            Budget
          </div>
        </div>
      </nav>
        <div className='container'>
            <h1 className='mt-3'>Company's Budget Allocation</h1>
            <div className='row mt-3'>
                <div className='col-sm'>
                    <Budget />
                </div>
                <div className='col-sm'>
                    <RemainingBudget />
                </div>
                <div className='col-sm'>
                    <ExpenseTotal />
                </div>
            </div>
            <div className='row '>
                <div className='col-sm'>
                    <ExpenseList />
                </div>
            </div>
            <h3 className='mt-3'>Change allocation</h3>
            <div className='row mt-3'>
                <div className='col-sm'>
                    <AllocationForm/>
                </div>
            </div>
        </div>
    </AppProvider>
  );
}

export default App;
