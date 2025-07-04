import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom'
export default function CityOne() {
   const {cityId } = useParams();
   const [city, setCity] = useState({});
   const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost/cityOne/${cityId}`)
        .then((res) => {return res.json()})
        .then((data) => {setCity(data)});
    }, [cityId]);

    function remove() {
      if(window.confirm('삭제하시겠습니까?')) {
        alert('삭제 API통신');
          fetch(`http://localhost/city/${cityId}`, {method: "DELETE"})
          .then((res) => {
            if(res.ok) {

            } else {
              window.alert('주소를 먼저 삭제하세요.')
            }
          })
          navigate('/City');
      } else {

      }
    }

  return (
  <div className="flex flex-col items-center p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-extrabold text-pink-500 mb-8">도시 상세보기</h1>

      <Link to="/AddAddress" state={{ cityId: cityId }}>
        <button className="mb-8 bg-pink-500 text-white font-medium px-5 py-2 rounded-lg shadow hover:bg-pink-600 transition">
          + 주소 추가
        </button>
      </Link>

      <div className="bg-white border border-gray-200 shadow-xl rounded-2xl w-full max-w-md p-6 text-gray-800 text-center">
        <p className="text-sm text-gray-500 mb-1">도시 번호</p>
        <p className="text-lg font-semibold mb-4">No. {city.cityId}</p>

        <p className="text-sm text-gray-500 mb-1">도시명</p>
        <p className="text-xl font-medium mb-4">{city.city}</p>

        <p className="text-sm text-gray-500 mb-1">국가</p>
        <p className="text-lg font-medium mb-4">
          {city.countryEntity && `${city.countryEntity.countryId}. ${city.countryEntity.country}`}
        </p>

        <p className="text-xs text-gray-400 mt-4">작성일: {city.lastUpdate}</p>
      </div>

      <div className="mt-8 flex space-x-4">
        <button
          className="bg-red-500 text-white font-medium px-5 py-2 rounded-lg shadow hover:bg-red-600 transition"
          onClick={remove}
        >
          삭제
        </button>
        <button
          className="bg-blue-500 text-white font-medium px-5 py-2 rounded-lg shadow hover:bg-blue-600 transition"
          onClick={() => navigate(`/EditCity/${cityId}`)}
        >
          수정
        </button>
      </div>
    </div>
  );
}
