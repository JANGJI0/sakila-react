import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function AddCity() {
  
  const [city, setCity] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  // state로 넘어온 countryId 받기
  const countryId = location.state.countryId;

  function addFetch() {
    fetch("http://localhost/city", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        city: city,
        countryId: countryId
      })
    })
         .then((res) => {
            if(res.ok) {    // http상태코드 200
                    alert("입력성공");
                    // /Country 컴포넌트를 랜더링
                    navigate("/City");    //<List to=/Country" />
            } else {    // 300, 400, 500
                alert("입력실패");
            }
        })
    }

  return (
<div className="flex flex-col items-center p-8">
      <h1 className="text-2xl font-bold mb-6">Add City 🗼</h1>

      <div className="bg-white border shadow-md rounded-xl w-80 p-6 text-center">
        <div className="mb-4">
          <input
            type="text"
            placeholder="도시 이름 입력"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>
        <div className="mb-4 text-gray-700">
          나라 번호: <span className="font-semibold">{countryId}</span>
        </div>
        <button
          onClick={addFetch}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-pink-600 transition"
        >
          입력
        </button>
      </div>
    </div>
  );
}