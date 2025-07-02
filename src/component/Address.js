import React, { useEffect, useState } from 'react'
export default function Address() {
  // const addressList = [];
  const [addressList, setAddressList] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const totalPages = 10; // 총 페이지 수
  // API 통신 "[GET] http://localhost/address"

  useEffect(function() {
          fetch("http://localhost/addressList/" + pageNumber)
          .then(function(res){return res.json();})
          .then(function(data){setAddressList(data.content)}) // date {} page 타입이고, data.content 배열
  }, [pageNumber]);   // 두번째 인자가 []빈 배열이면 처음 화면이 렌더링때 한번만 useEffext() 실행
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
  return (
    <div>
        <h1>AddressList({pageNumber}page)</h1>
        <table className = "min-w-full divide-y divide-gray-200">
            <tr>
                <th>번호</th>
                <th>주소</th>
            </tr>
            {
                addressList.map((a) => (
                  <tr key={a.addressId}>
                    <td>{a.addressId}</td>
                    <td>{a.address}</td>
                    {/* <td><Link to="/">{a.address}</Link></td> */}
                  </tr>
                ))
            }
        </table>
        {/* 1페이지면 이전 버튼 숨기기*/}
        {pageNumber !== 1 && (
                              <button onClick={() => 
                                              {setPageNumber(pageNumber - 1)}}>
                                                이전
                              </button>)}
        {pageNumbers.map((num) =>
                                (<button key={num} onClick={() => 
                                                                setPageNumber(num)}>
                                                        [{num}]
                                 </button>))}
        {/* 마지막페이지면 다음버튼 숨기기*/}
        {pageNumber !== totalPages && (
                              <button onClick={() => 
                                              {setPageNumber(pageNumber + 1)}}>
                                                다음
                              </button>)}
    </div>
  )
}
