import React, { useState, useEffect } from 'react';
export default function Country() {
  // const countryList = [];
  const [countryList, setContryList] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const totalPages = 10; // 총 페이지 수
  // API 통신 "[GET] http://localhost/country"

  useEffect(function() {
          fetch("http://localhost/countryList/"+pageNumber)
          .then(function(res){return res.json();})
          .then(function(data) {setContryList(data.content)}) // data {} Page타입이고, data.content 가 배열
  }, [pageNumber]); // 두번째  인자가 []빈배열이면 처음 화면이 렌더링때 한번만 useEffect() 실행
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
  return (
    <div>
        <h1>CountryList({pageNumber}page)</h1>
        <table className='table-auto border'>
            <tr>
                <th>번호</th>
                <th>나라</th>
            </tr>
            {
                countryList.map((c) => (
                  <tr key={c.countryId}>
                    <td>{c.countryId}</td>
                    <td>{c.country}</td>
                   {/* <td><Link to="/">{c.country}</Link></td> */}
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
