import React, { useEffect, useState } from 'react'
export default function Customer() {
  // const customerList = [];
  const [customerList, setCustomerList] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const totalPages = 10; // 총 페이지 수
  // API 통신 "[GET] http://localhost/customer"

  useEffect(function() {
          fetch("http://localhost/customerList/" + pageNumber)
          .then(function(res){return res.json();})
          .then(function(data){setCustomerList(data.content)})
  }, [pageNumber]);
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
  return (
    <div>
      <h1>CustomerList({pageNumber}page)</h1>
      <table className = 'table-auto border'>
        <tr>
            <th>번호</th>
            <th>성</th>
            <th>이름</th>
        </tr>
        {
          customerList.map((c) => (
            <tr key={c.customerId}>
              <td>{c.customerId}</td>
              <td>{c.firstName}</td>
              <td>{c.lastName}</td>
              {/* <td><Link to="/">{c.customer}</Link></td> */}
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
