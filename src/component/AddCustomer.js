import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function AddCustomer() {
    // let Country = "";
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [active, setActive] = useState("");
    const [storeId, setStoreId] = useState("");
    const location = useLocation();
    const navigate = useNavigate();

     // state로 넘어온 countryId 받기
  const addressId = location.state.addressId;
console.log("location.state:", location.state);
console.log("addressId:", addressId);
    function addFetch() {
        // alert('addFetch');
        fetch("http://localhost/customer", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    active: Number(active),
                    addressId: addressId,
                    storeId : storeId

        })
        
    })
    
        .then((res) => {
            if(res.ok) {    // http상태코드 200
                    alert("입력성공");
                    // /Country 컴포넌트를 랜더링
                    navigate("/Customer");    //<List to=/Country" />
            } else {    // 300, 400, 500
                alert("입력실패");
            }
        })
    }

  return (
    <div className="flex flex-col items-center p-8">
        <h1 className="text-2xl font-bold mb-6">Add Customer</h1>

        <div className="bg-white border shadow-md rounded-xl w-80 p-6 text-center">
            <input 
            type="text" 
            placeholder="성" 
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full border px-3 py-2 rounded mb-2 focus:outline-none focus:ring-2 focus:ring-pink-500"/>
            
            <input 
            type="text" 
            placeholder="이름" 
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full border px-3 py-2 rounded mb-2 focus:outline-none focus:ring-2 focus:ring-pink-500"/>
            
            <input 
            type="text" 
            placeholder="이메일" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border px-3 py-2 rounded mb-2 focus:outline-none focus:ring-2 focus:ring-pink-500"/>
           
            <input 
            type="text" 
            placeholder="active" 
            value={active}
            onChange={(e) => setActive(e.target.value)}
            className="w-full border px-3 py-2 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-pink-500"/>
            
            <input 
            type="text" 
            placeholder="store" 
            value={storeId}
            onChange={(e) => setStoreId(e.target.value)}
            className="w-full border px-3 py-2 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-pink-500"/>
            
            <div className="mb-4 text-gray-700">
            주소: <span className="font-semibold">{addressId}</span>
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