import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
export default function CustomerOne() {
   const {customerId } = useParams();
   const [customer, setCustomer] = useState({});
   const navigate = useNavigate();
    useEffect(() => {
        fetch(`http://localhost/customerOne/${customerId}`)
        .then((res) => {return res.json()})
        .then((data) => {setCustomer(data)});
    }, [customerId]);
       
    function remove() {
      if(window.confirm('삭제하시겠습니까?')) {
        alert('삭제 API통신');
          fetch(`http://localhost/customer/${customerId}`, {method: "DELETE"})
          .then((res) => {
            if(res.ok) {

            } else {
              window.alert('삭제실패.')
            }
          })
          navigate('/Customer');
      } else {

      }
    }

  return (
 
     <div className="flex flex-col items-center p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-extrabold text-purple-500 mb-8">고객 상세보기</h1>

      <div className="bg-white border border-gray-200 shadow-xl rounded-2xl w-full max-w-md p-6 text-gray-800 text-center mb-6">
        <p className="text-lg font-semibold mb-4">No. {customer.customerId}</p>

        <p className="text-sm text-gray-500 mb-1">이름</p>
        <p className="text-xl font-medium mb-4">{customer.firstName} {customer.lastName}</p>

        <p className="text-sm text-gray-500 mb-1">이메일</p>
        <p className="text-lg font-medium mb-4">{customer.email}</p>

        <p className="text-sm text-gray-500 mb-1">활성 여부</p>
        <p className="text-lg font-medium mb-4">{customer.active === 1 ? "활성" : "비활성"}</p>

        <p className="text-sm text-gray-500 mb-1">가입일</p>
        <p className="text-lg font-medium mb-4">{customer.createDate}</p>

        <p className="text-sm text-gray-500 mb-1">주소</p>
        <p className="text-lg font-medium mb-4">
          {customer.addressEntity ? `${customer.addressEntity.address}` : "-"}
        </p>

        <p className="text-xs text-gray-400 mt-4">마지막 수정일: {customer.lastUpdate}</p>
      </div>

      <div className="flex space-x-4 mt-4">
        <button
          className="bg-red-500 text-white font-medium px-5 py-2 rounded-lg shadow hover:bg-red-600 transition"
          onClick={remove}
        >
          삭제
        </button>
        <button
          className="bg-purple-500 text-white font-medium px-5 py-2 rounded-lg shadow hover:bg-purple-600 transition"
          onClick={() => navigate(`/EditCustomer/${customerId}`)}
        >
          수정
        </button>
      </div>
    </div>
  );
}
