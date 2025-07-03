import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'
export default function CityOne() {
   const {cityId } = useParams();
   const [city, setCity] = useState({});

    useEffect(() => {
        fetch(`http://localhost/cityOne/${cityId}`)
        .then((res) => {return res.json()})
        .then((data) => {setCity(data)});
    }, [cityId]);

  return (
<div className="flex flex-col items-center p-8">
      <h1 className="text-2xl font-bold mb-6">도시 상세보기</h1>

        {/* 주소 추가 버튼 */}
        <Link to="/AddAddress" state={{ cityId: cityId }}>
            <button className="mb-6 bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition">
            주소 추가
            </button>
        </Link>

      <div className="bg-white border shadow-md rounded-xl w-80 p-6 text-center">
        <p className="text-lg mb-2">no.{city.cityId}</p>
        <p className="text-xl font-semibold mb-2">{city.city}</p>
        <p className="text-lg mb-2">
          {city.countryEntity && city.countryEntity.country}
        </p>
        <p className="text-sm text-gray-500">작성일: {city.lastUpdate}</p>
      </div>

      {/* 수정/삭제 버튼 */}
      <div className="mt-6 space-x-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">삭제</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">수정</button>
      </div>
    </div>
  );
}
