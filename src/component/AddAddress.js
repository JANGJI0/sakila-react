import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function AddAddress() {
    // let Country = "";
    const [address, setAddress] = useState("");
    const [district, setDistrict] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [phone, setPhone] = useState("");
    const location = useLocation();
    const navigate = useNavigate();

     // state로 넘어온 countryId 받기
  const cityId = location.state.cityId;

    function addFetch() {
        // alert('addFetch');
        fetch("http://localhost/address", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                    address: address,
                    district: district,
                    postalCode: postalCode,
                    phone: phone,
                    cityId: cityId

        })
    })
        .then((res) => {
            if(res.ok) {    // http상태코드 200
                    alert("입력성공");
                    // /Country 컴포넌트를 랜더링
                    navigate("/Address");    //<List to=/Country" />
            } else {    // 300, 400, 500
                alert("입력실패");
            }
        })
    }

  return (
    <div className="flex flex-col items-center p-8">
        <h1 className="text-2xl font-bold mb-6">Add Address</h1>

        <div className="bg-white border shadow-md rounded-xl w-80 p-6 text-center">
            <input 
            type="text" 
            placeholder="주소" 
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full border px-3 py-2 rounded mb-2 focus:outline-none focus:ring-2 focus:ring-pink-500"/>
            
            <input 
            type="text" 
            placeholder="상세주소" 
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            className="w-full border px-3 py-2 rounded mb-2 focus:outline-none focus:ring-2 focus:ring-pink-500"/>
            
            <input 
            type="text" 
            placeholder="우편번호" 
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            className="w-full border px-3 py-2 rounded mb-2 focus:outline-none focus:ring-2 focus:ring-pink-500"/>
           
            <input 
            type="text" 
            placeholder="전화번호" 
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border px-3 py-2 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-pink-500"/>
            
            <div className="mb-4 text-gray-700">
            도시: <span className="font-semibold">{cityId}</span>
            </div>
            <button 
            onClick={addFetch}
            className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition">
            입력
            </button>
        </div>
        </div>
  );
}