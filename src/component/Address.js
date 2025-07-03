import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
export default function Address() {
  // const addressList = [];
  const [addressList, setAddressList] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(0); // 총 페이지 수
  const pageSize = 10;
  // API 통신 "[GET] http://localhost/address"

  useEffect(function() {
          fetch("http://localhost/addressList/" + pageNumber)
          .then(function(res){return res.json();})
          .then(function(data){setAddressList(data.content)
                                setTotalPages(data.totalPages);
          }) // date {} page 타입이고, data.content 배열
  }, [pageNumber]);   // 두번째 인자가 []빈 배열이면 처음 화면이 렌더링때 한번만 useEffext() 실행
 // 페이지 그룹 계산
  const currentGroup = Math.ceil(pageNumber / pageSize);
  const startPage = (currentGroup - 1) * pageSize + 1;
  const endPage = Math.min(startPage + pageSize - 1, totalPages);

  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }
  return (
   <div className="p-8">
      <h1 className="text-2xl font-bold text-center mb-6">주소 리스트</h1>

      {/* 카드 그리드 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {addressList.map((a) => (
          <Link key={a.addressId} to={'/AddressOne/' + a.addressId}>
            <div className="bg-white border shadow-md rounded-xl p-4 hover:bg-pink-100 transition cursor-pointer">
              <h2 className="text-xl font-semibold mb-2">{a.address}</h2>
              <p className="text-gray-500 mb-4">no.{a.addressId}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* 페이지네이션 */}
      <div className="flex justify-center mt-8 space-x-2">
        {pageNumber !== 1 && (
          <button
            className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
            onClick={() => setPageNumber(pageNumber - 1)}
          >
            이전
          </button>
        )}

        {pageNumbers.map((num) => (
          <button
            key={num}
            className={`px-3 py-1 rounded ${num === pageNumber ? 'bg-green-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
            onClick={() => setPageNumber(num)}
          >
            {num}
          </button>
        ))}

        {pageNumber !== totalPages && (
          <button
            className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
            onClick={() => setPageNumber(pageNumber + 1)}
          >
            다음
          </button>
        )}
      </div>
    </div>
  );
}
