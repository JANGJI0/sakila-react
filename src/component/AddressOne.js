import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'
export default function AddressOne() {
   const {addressId } = useParams();
   const [address, setAddress] = useState({});

    useEffect(() => {
        fetch(`http://localhost/addressOne/${addressId}`)
        .then((res) => {return res.json()})
        .then((data) => {setAddress(data)});
    }, [addressId]);

  return (
 <div className="flex flex-col items-center p-8">
      <h1 className="text-2xl font-bold mb-6">주소 상세보기</h1>

        {/* 고객 추가 버튼 */}
        <Link to="/AddCustomer" state={{ addressId: addressId }}>
            <button className="mb-6 bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition">
            고객 추가
            </button>
        </Link>

      {/* 중앙 카드 */}
      <div className="bg-white border shadow-md rounded-xl w-80 p-6 text-center">
        <p className="text-lg mb-2">no.{address.addressId}</p>
        <p className="text-xl font-semibold mb-2">주소: {address.address}</p>
        <p className="text-lg mb-2">{address.district}</p>
        <p className="text-xl font-semibold mb-2">우편번호: {address.postalCode}</p>
        <p className="text-xl font-semibold mb-2">전화번호: {address.phone}</p>
        <p className="text-lg mb-2">
          {address.cityEntity && address.cityEntity.city}
        </p>
        <p className="text-sm text-gray-500">작성일: {address.lastUpdate}</p>
      </div>

      {/* 수정/삭제 버튼 */}
      <div className="mt-6 space-x-4">
        <button className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400 transition">삭제</button>
        <button className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400 transition">수정</button>
      </div>
    </div>
  );
}