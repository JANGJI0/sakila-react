import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"

export default function EditCustomer() {
    const { customerId } =useParams();
    const [customer, setCustomer] = useState({customer: ""});
    const [addressId, setAddressId] = useState();
    const [storeId, setStoreId] = useState();
    const navigate = useNavigate();
    useEffect(() => {
            fetch(`http://localhost/customerOne/${customerId}`)
            .then((res) => res.json())
            .then((data) => {
            setCustomer(data);
            setAddressId(data.addressEntity?.addressId);
            setStoreId(data.storeEntity?.storeId);
        });
    }, [customerId]);

    function edit() {
        fetch("http://localhost/customer", {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(customer)

        })
        .then((res => {
            if(res.ok) {
                alert('수정 성공')
                navigate('/CustomerOne/' + customer.customerId);
            } else {
                alert('수정 실패')
            }
        }))
    }

  return (
     <div className="flex flex-col items-center p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-extrabold text-pink-500 mb-8">고객 수정 (ID: {customerId})</h1>
      <div className="bg-white border border-gray-200 shadow-xl rounded-2xl w-full max-w-md p-6 text-gray-800">

        <label className="block mb-2 font-medium">성</label>
        <input
          type="text"
          value={customer.firstName || ""}
          onChange={(e) =>
            setCustomer({
              customerId: customer.customerId,
              firstName: e.target.value,
              lastName: customer.lastName,
              email: customer.email,
              active: customer.active,
              addressId: addressId,
              storeId: storeId
            })
          }
          className="w-full bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition"
        />

        <label className="block mb-2 font-medium">이름</label>
        <input
          type="text"
          value={customer.lastName || ""}
          onChange={(e) =>
            setCustomer({
              customerId: customer.customerId,
              firstName: customer.firstName,
              lastName: e.target.value,
              email: customer.email,
              active: customer.active,
              addressId: addressId,
              storeId: storeId
            })
          }
          className="w-full bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition"
        />

        <label className="block mb-2 font-medium">이메일</label>
        <input
          type="text"
          value={customer.email || ""}
          onChange={(e) =>
            setCustomer({
              customerId: customer.customerId,
              firstName: customer.firstName,
              lastName: customer.lastName,
              email: e.target.value,
              active: customer.active,
              addressId: addressId,
              storeId: storeId
            })
          }
          className="w-full bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition"
        />

        <label className="block mb-2 font-medium">Active (1 or 0)</label>
        <input
          type="text"
          value={customer.active || ""}
          onChange={(e) =>
            setCustomer({
              customerId: customer.customerId,
              firstName: customer.firstName,
              lastName: customer.lastName,
              email: customer.email,
              active: e.target.value,
              addressId: addressId,
              storeId: storeId
            })
          }
          className="w-full bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition"
        />

        <button
          onClick={edit}
          className="w-full bg-pink-500 text-white font-medium px-4 py-2 rounded-lg hover:bg-pink-600 transition"
        >
          수정
        </button>
      </div>
    </div>
  );
}