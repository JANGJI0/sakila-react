import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'
export default function CountryOne() {
   const {countryId } = useParams();
   const [country, setCountry] = useState({});

    useEffect(() => {
        fetch(`http://localhost/countryOne/${countryId}`)
        .then((res) => {return res.json()})
        .then((data) => {setCountry(data)});
    }, [countryId]);

  return (
 <div className="flex flex-col items-center p-8">
      <h1 className="text-2xl font-bold mb-6">나라 상세보기</h1>

      {/* 도시 추가 버튼 */}
      <Link to="/AddCity" state={{ countryId: countryId }}>
        <button className="mb-6 bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition">
          도시 추가
        </button>
      </Link>

      {/* 중앙 카드 */}
      <div className="bg-white border shadow-md rounded-xl w-80 p-6 text-center">
        <p className="text-lg mb-2">no.{country.countryId}</p>
        <p className="text-xl font-semibold mb-2">{country.country}</p>
        <p className="text-sm text-gray-500">작성일: {country.lastUpdate}</p>
      </div>

      {/* 수정/삭제 버튼 */}
      <div className="mt-6 space-x-4">
        <button className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400 transition">삭제</button>
        <button className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400 transition">수정</button>
      </div>
    </div>
  );
}
