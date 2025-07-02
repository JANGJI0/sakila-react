import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './component/Home';
import Country from './component/Country';
import City from './component/City';
import Address from './component/Address';
import Customer from './component/Customer';
import Store from './component/Store';
export default function App() {

    return (
        <BrowserRouter>
            <div>
                {/* header */}
                <h1 className='text-green-300'>Sakila Project</h1>

                <ul>
                    <li><Link to="/">home</Link></li>
                    <li><Link to="/Country">country</Link></li>
                    <li><Link to="/City">city</Link></li>
                    <li><Link to="/Address">address</Link></li>
                    <li><Link to="/Customer">customer</Link></li>
                    <li><Link to="/Store">store</Link></li>
                </ul>

                <hr />
                {/* ---------------------CONTENT-------------------------- */}
                <Routes>
                    <Route path='/' element={<Home />} /> {/* 라우터 -> 컴포넌트*/}
                    <Route path='/Country' element={<Country />} />
                   {/* <Route path='/CountryOne/:countryId' element={<CountryOne />} /> */}
                    <Route path='/City' element={<City />} />
                    <Route path='/Address' element={<Address />} />
                    <Route path='/Customer' element={<Customer />} />
                    <Route path='/Store' element={<Store />} />
                </Routes>
                
                {/* ---------------------주 석-------------------------- */}
                {/* footer */}
                <hr />
                <div>
                    Copyright@GDJ91
                </div>
            </div>
        </BrowserRouter>
    );
}