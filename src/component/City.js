import React, { useState, useEffect } from 'react'
export default function City() {
  // const cityList = [];
  const [cityList, setCityList] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
   const totalPages = 10; // 총 페이지 수
  // API 통신 "[GET] http://localhost/city"

  useEffect(function() {
          fetch("http://localhost/cityList/" + pageNumber)
          .then(function(res){return res.json();})
          .then(function(data){setCityList(data.content)}) // data {} Page 타입이고, data.content가 배열 
  }, [pageNumber]); //두번째 인자가 []빈배열
      const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
  return (
    <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
        <h1 className='w-full text-lg text-center rtl:text-right text-500 dark:text-400 border-1'>
          CityList({pageNumber}page)
          </h1>
        <table className="w-full text-lg text-center rtl:text-right text-500 dark:text-400 border-1">
          <tr>
              <th>번호</th>
              <th>도시</th>
          </tr>
          {
              cityList.map((c) => (
                <tr key={c.cityId}>
                  <td>{c.cityId}</td>
                  <td>{c.city}</td>
                  {/* <td><Link to="/">{c.city}</Link></td>} */}
                </tr>
              ))

          }
        </table>
          <div className='w-full text-lg text-center rtl:text-right text-500 dark:text-400 border-1'>
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
        </div>
  )
}
