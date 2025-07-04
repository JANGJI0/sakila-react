import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"

export default function EditCity() {
    const { cityId } =useParams();
    const [city, setCity] = useState({city: ""});
    const [countryId, setCountryId] = useState();
    const navigate = useNavigate();
    useEffect(() => {
            fetch(`http://localhost/cityOne/${cityId}`)
            .then((res) => res.json())
            .then((data) => {
            setCity(data);
            setCountryId(data.countryEntity?.countryId);
        });
    }, [cityId]);

    function edit() {
        fetch("http://localhost/city", {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(city)

        })
        .then((res => {
            if(res.ok) {
                alert('수정 성공')
                navigate('/CityOne/' + city.cityId);
            } else {
                alert('수정 실패')
            }
        }))
    }

  return (
  <div className="flex flex-col items-center p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-extrabold text-pink-500 mb-8">도시 수정 (ID: {cityId})</h1>
      <div className="bg-white border border-gray-200 shadow-xl rounded-2xl w-full max-w-md p-6 text-gray-800">
        <label className="block mb-2 font-medium">City</label>
        <input
          type="text"
          value={city.city}
          onChange={(e) =>
            setCity({
              cityId: city.cityId,
              city: e.target.value,
              countryId: countryId
            })
          }
          className="w-full bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition"
        />

        <button
          onClick={edit}
          className="w-full bg-pink-500 text-white font-medium px-4 py-2 rounded-lg hover:bg-pink-600 transition"
        >
          수정
        </button>
      </div>
    </div>
  );
}