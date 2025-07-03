import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './component/Home';
import Country from './component/Country';
import City from './component/City';
import Address from './component/Address';
import Customer from './component/Customer';
import Store from './component/Store';
import CountryOne from './component/CountryOne';
import AddCountry from './component/AddCountry';
import AddCity from './component/AddCity';
import AddAddress from './component/AddAddress';
import CityOne from './component/CityOne';
import AddressOne from './component/AddressOne';
import CustomerOne from './component/CustomerOne';
import AddCustomer from './component/AddCustomer';
export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-black min-h-screen text-white">
        {/* 오징어게임 마크 헤더 */}
        <div className="flex justify-center items-center space-x-6 py-8">
          {/* 원 */}
          <div className="w-12 h-12 border-4 border-pink-500 rounded-full"></div>
          {/* 삼각형 */}
          <div className="w-0 h-0 border-l-[24px] border-r-[24px] border-b-[48px] border-l-transparent border-r-transparent border-b-pink-500"></div>
          {/* 네모 */}
          <div className="w-12 h-12 border-4 border-pink-500"></div>
        </div>

        {/* 메뉴 */}
        <ul className="flex justify-center space-x-6 mb-8 text-lg font-semibold">
          <li><Link to="/" className="hover:text-pink-500 transition">Home</Link></li>
          <li><Link to="/Country" className="hover:text-pink-500 transition">Country</Link></li>
          <li><Link to="/City" className="hover:text-pink-500 transition">City</Link></li>
          <li><Link to="/Address" className="hover:text-pink-500 transition">Address</Link></li>
          <li><Link to="/Customer" className="hover:text-pink-500 transition">Customer</Link></li>
          <li><Link to="/Store" className="hover:text-pink-500 transition">Store</Link></li>
        </ul>

        {/* 콘텐츠 */}
        <div className="bg-white text-black p-6 mx-8 rounded-lg shadow-lg">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Country' element={<Country />} />
            <Route path='/CountryOne/:countryId' element={<CountryOne />} />
            <Route path='/AddCountry' element={<AddCountry />} />

            <Route path='/City' element={<City />} />
            <Route path='/CityOne/:cityId' element={<CityOne />} />
            <Route path='/AddCity' element={<AddCity />} />

            <Route path='/Address' element={<Address />} />
            <Route path='/AddressOne/:addressId' element={<AddressOne />} />
            <Route path='/AddAddress' element={<AddAddress />} />

            <Route path='/Customer' element={<Customer />} />
            <Route path='/CustomerOne/:customerId' element={<CustomerOne />} />
            <Route path='/AddCustomer' element={<AddCustomer />} />

            <Route path='/Store' element={<Store />} />
          </Routes>
        </div>

        {/* footer */}
        <div className="text-center text-gray-500 mt-12 py-4">
          Copyright @ GDJ91
        </div>
      </div>
    </BrowserRouter>
  );
}