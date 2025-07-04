import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom'
export default function AddressOne() {
   const {addressId } = useParams();
   const [address, setAddress] = useState({});
   const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost/addressOne/${addressId}`)
        .then((res) => {return res.json()})
        .then((data) => {setAddress(data)});
    }, [addressId]);
   
    function remove() {
      if(window.confirm('삭제하시겠습니까?')) {
        alert('삭제 API통신');
          fetch(`http://localhost/address/${addressId}`, {method: "DELETE"})
          .then((res) => {
            if(res.ok) {

            } else {
              window.alert('고객정보를 먼저 삭제하세요.')
            }
          })
          navigate('/Address');
      } else {

      }
    }
  return (
    <div className="flex flex-col items-center p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-extrabold text-pink-500 mb-8">주소 상세보기</h1>

      <Link to="/AddCustomer" state={{ addressId: addressId }}>
        <button className="mb-8 bg-pink-500 text-white font-medium px-5 py-2 rounded-lg shadow hover:bg-pink-600 transition">
          + 고객 추가
        </button>
      </Link>

      <div className="bg-white border border-gray-200 shadow-xl rounded-2xl w-full max-w-md p-6 text-gray-800 text-center mb-6">
        <p className="text-sm text-gray-500 mb-1">주소 번호</p>
        <p className="text-lg font-semibold mb-4">No. {address.addressId}</p>

        <p className="text-sm text-gray-500 mb-1">주소</p>
        <p className="text-xl font-medium mb-4">{address.address}</p>

        <p className="text-sm text-gray-500 mb-1">상세주소</p>
        <p className="text-lg font-medium mb-4">{address.district || "-"}</p>

        <p className="text-sm text-gray-500 mb-1">우편번호</p>
        <p className="text-lg font-medium mb-4">{address.postalCode || "-"}</p>

        <p className="text-sm text-gray-500 mb-1">전화번호</p>
        <p className="text-lg font-medium mb-4">{address.phone || "-"}</p>

        <p className="text-sm text-gray-500 mb-1">도시</p>
        <p className="text-lg font-medium mb-4">
          {address.cityEntity ? `${address.cityEntity.cityId}. ${address.cityEntity.city}` : "-"}
        </p>

        <p className="text-xs text-gray-400 mt-4">작성일: {address.lastUpdate}</p>
      </div>

      <div className="flex space-x-4 mt-4">
        <button
          className="bg-red-500 text-white font-medium px-5 py-2 rounded-lg shadow hover:bg-red-600 transition"
          onClick={remove}
        >
          삭제
        </button>
        <button
          className="bg-gray-500 text-white font-medium px-5 py-2 rounded-lg shadow hover:bg-gray-600 transition"
          onClick={() => navigate(`/EditAddress/${addressId}`)}
        >
          수정
        </button>
      </div>
    </div>
  );
}