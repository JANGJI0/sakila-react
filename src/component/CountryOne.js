import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom'
export default function CountryOne() {
   const {countryId } = useParams();
   const [country, setCountry] = useState({});
   const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost/countryOne/${countryId}`)
        .then((res) => {return res.json()})
        .then((data) => {setCountry(data)});
    }, [countryId]);

    function remove() {
      if(window.confirm('삭제하시겠습니까?')) {
        alert('삭제 API통신');
          fetch(`http://localhost/country/${countryId}`, {method: "DELETE"})
        .then((res) => {
              if(res.ok) { // ex) http code 200

              } else {    // ex) http code 500
                  window.alert('도시를 먼저 삭제하세요.')
              }
        })
        // history -> navigater
        navigate('/Country');
      } else {

      }
    }

  return (
 <div className="flex flex-col items-center p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-extrabold text-pink-500 mb-8">나라 상세보기</h1>

      <Link to="/AddCity" state={{ countryId: countryId }}>
        <button className="mb-8 bg-pink-500 text-white font-medium px-5 py-2 rounded-lg shadow hover:bg-pink-600 transition">
          + 도시 추가
        </button>
      </Link>

      <div className="bg-white border border-gray-200 shadow-xl rounded-2xl w-full max-w-md p-6 text-gray-800 text-center mb-6">
        <p className="text-sm text-gray-500 mb-1">나라 번호</p>
        <p className="text-lg font-semibold mb-4">No. {country.countryId}</p>

        <p className="text-sm text-gray-500 mb-1">나라 이름</p>
        <p className="text-2xl font-medium mb-4">{country.country}</p>

        <p className="text-xs text-gray-400 mt-4">작성일: {country.lastUpdate}</p>
      </div>

      <div className="flex space-x-4 mt-4">
        <button
          className="bg-red-500 text-white font-medium px-5 py-2 rounded-lg shadow hover:bg-red-600 transition"
          onClick={remove}
        >
          삭제
        </button>
        <button
          className="bg-pink-500 text-white font-medium px-5 py-2 rounded-lg shadow hover:bg-pink-600 transition"
          onClick={() => navigate(`/EditCountry/${countryId}`)}
        >
          수정
        </button>
      </div>
    </div>
  );
}
