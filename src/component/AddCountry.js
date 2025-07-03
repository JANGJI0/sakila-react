import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddCountry() {
    // let Country = "";
    const [country, setCountry] = useState("");
    const navigate = useNavigate();

    function addFetch() {
        // alert('addFetch');
        fetch("http://localhost/country", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({country: country})

        })
        .then((res) => {
            if(res.ok) {    // http상태코드 200
                    alert("입력성공");
                    // /Country 컴포넌트를 랜더링
                    navigate("/Country");    //<List to=/Country" />
            } else {    // 300, 400, 500
                alert("입력실패");
            }
        })
    }

  return (
 <div className="flex flex-col items-center p-8">
      <h1 className="text-2xl font-bold mb-6">Add Country</h1>

      <div className="bg-white border shadow-md rounded-xl w-80 p-6 text-center">
        <input 
          type="text" 
          placeholder="나라 이름 입력" 
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="w-full border px-3 py-2 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
        <button 
          onClick={addFetch}
          className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition"
        >
          입력
        </button>
      </div>
    </div>
  );
}
