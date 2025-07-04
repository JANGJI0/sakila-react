import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"

export default function EditAddress() {
    const { addressId } =useParams();
    const [address, setAddress] = useState({address: ""});
    const [cityId, setCityId] = useState();
    const navigate = useNavigate();
    useEffect(() => {
            fetch(`http://localhost/addressOne/${addressId}`)
            .then((res) => res.json())
            .then((data) => {
            setAddress(data);
            setCityId(data.cityEntity?.cityId);
        });
    }, [addressId]);

    function edit() {
        fetch("http://localhost/address", {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(address)

        })
        .then((res => {
            if(res.ok) {
                alert('수정 성공')
                navigate('/AddressOne/' + address.addressId);
            } else {
                alert('수정 실패')
            }
        }))
    }

  return (
    <div className="flex flex-col items-center p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-extrabold text-pink-500 mb-8">주소 수정 (ID: {addressId})</h1>
      <div className="bg-white border border-gray-200 shadow-xl rounded-2xl w-full max-w-md p-6 text-gray-800">
        <label className="block mb-2 font-medium">주소</label>
        <input
          type="text"
          value={address.address}
          onChange={(e) =>
            setAddress({
              addressId: address.addressId,
              address: e.target.value,
              district: address.district,
              postalCode: address.postalCode,
              phone: address.phone,
              cityId: cityId
            })
          }
          className="w-full bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition"
        />

        <label className="block mb-2 font-medium">상세주소</label>
        <input
          type="text"
          value={address.district || ""}
          onChange={(e) =>
            setAddress({
              addressId: address.addressId,
              address: address.address,
              district: e.target.value,
              postalCode: address.postalCode,
              phone: address.phone,
              cityId: cityId
            })
          }
          className="w-full bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition"
        />

        <label className="block mb-2 font-medium">우편번호</label>
        <input
          type="text"
          value={address.postalCode || ""}
          onChange={(e) =>
            setAddress({
              addressId: address.addressId,
              address: address.address,
              district: address.district,
              postalCode: e.target.value,
              phone: address.phone,
              cityId: cityId
            })
          }
          className="w-full bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition"
        />

        <label className="block mb-2 font-medium">전화번호</label>
        <input
          type="text"
          value={address.phone || ""}
          onChange={(e) =>
            setAddress({
              addressId: address.addressId,
              address: address.address,
              district: address.district,
              postalCode: address.postalCode,
              phone: e.target.value,
              cityId: cityId
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