import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
export default function CustomerOne() {
   const {customerId } = useParams();
   const [customer, setCustomer] = useState({});

    useEffect(() => {
        fetch(`http://localhost/customerOne/${customerId}`)
        .then((res) => {return res.json()})
        .then((data) => {setCustomer(data)});
    }, [customerId]);

  return (
<div className="flex flex-col items-center p-8">
      <h1 className="text-2xl font-bold mb-6">고객 상세보기</h1>

      <div className="bg-white border shadow-md rounded-xl w-full max-w-md p-6 text-center break-words">
        <p className="text-lg mb-2">no.{customer.customerId}</p>
        <p className="text-xl font-semibold mb-2">{customer.firstName}</p>
        <p className="text-xl font-semibold mb-2">{customer.lastName}</p>
        <p className="text-xl font-semibold mb-2">{customer.email}</p>
        <p className="text-xl font-semibold mb-2">{customer.active}</p>
        <p className="text-xl font-semibold mb-2">{customer.createDate}</p>
        <p className="text-lg mb-2">
          {customer.addressEntity && customer.addressEntity.address}
        </p>
        <p className="text-sm text-gray-500">작성일: {customer.lastUpdate}</p>
      </div>

      {/* 수정/삭제 버튼 */}
      <div className="mt-6 space-x-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">삭제</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">수정</button>
      </div>
    </div>
  );
}
