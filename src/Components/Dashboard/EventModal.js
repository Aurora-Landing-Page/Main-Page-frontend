import { useState, useEffect } from "react";
import { Input } from "./Modal/Input";
import { Card } from "./Modal/Card";
import { LoadingFallback } from "./Modal/LoadingFallback";
import Modal from "./Modal";
import { Heading } from "./Modal/Heading";
import axios from "axios";

import Toast from "../AlertAndLoader/Toast";
import Loader from "../AlertAndLoader/Loader";
import Alert from "../AlertAndLoader/Alert";
// import sample from "./pdf/sample.pdf";

export function EventModal({ isOpen, setIsOpen, data }) {
  const [loading, setLoading] = useState(false);
  const [groupSize, setGroupSize] = useState(0);

  const initialFormData = {
    eventId: data.EventId,
    eventType: "group",
    members: [],
    groupName: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [showToast, setShowToast] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const [messege, setMessege] = useState("");

  const handleToastClose = () => {
    setMessege("");
    setShowToast(false);
  };

  const handleAlertClose = () => {
    setMessege("");
    setShowAlert(false);
  };

  const handlePurchaseTicket = async () => {
    // check data
    if (formData.groupName === "") {
      setMessege("Please enter your group name");
      setShowAlert(true);
      return;
    }

    for (let i = 0; i < formData.members.length; i++) {
      if (formData.members[i].name === "") {
        setMessege("Please enter name of all members");
        setShowAlert(true);
        return;
      }
      if (formData.members[i].email === "") {
        setMessege("Please enter email of all members");
        setShowAlert(true);
        return;
      }
      if (formData.members[i].phone === "") {
        setMessege("Please enter phone number of all members");
        setShowAlert(true);
        return;
      }
    }

    //post data
    const keyRes = await fetch(`${BACKEND_URL}/getKey`, {
      method: "GET",
      credentials: "include",
    });
    const keyJSON = await keyRes.json();
    const { key } = keyJSON;

    const res = await fetch(`${BACKEND_URL}/createOrder`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    const { amount, id: order_id, description } = data;

    console.log(data);

    const options = {
      key,
      amount: amount,
      currency: "INR",
      name: "Aurora 2024",
      description: description,
      order_id: order_id,
      handler: async function (response) {
        const verifyData = {
          orderCreationId: order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };

        const result = await fetch(`${BACKEND_URL}/verifyOrder`, {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(verifyData),
        }).then((response) => response.json());

        if (result.success) {
          setMessege("Payment Verfied");
          setShowToast(true);
        } else {
          setMessege("Payment Unsuccessful");
          setShowAlert(true);
        }
      },
      theme: {
        color: "#61dafb",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  useEffect(() => {
    // if (data?.GroupSize > 1) {
    //   let temp = [];
    //   for (let i = 0; i < data.GroupSize - 1; i++) {
    //     temp.push({ name: "", email: "", phone: "" });
    //   }
    //   setFormData({ ...formData, members: temp });
    // }
  }, [data]);

  return (
    <>
      {showToast && (
        <Toast message={messege} duration={3000} onClose={handleToastClose} />
      )}
      {showAlert && (
        <Alert message={messege} duration={3000} onClose={handleAlertClose} />
      )}
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        className="sm:max-w-lg"
      >
        <Modal.Header dismiss>
          <Heading size="h4">{data?.Title}</Heading>
        </Modal.Header>
        <Card.Body className="space-y-5">
          <div className="flex flex-col space-y-2">
            <img
              className="w-full h-56 object-cover"
              src={data?.Image}
              alt="event"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <Heading size="h5">Description</Heading>
            <p className="text-sm">{data?.Description}</p>
          </div>
          <div className="flex flex-col space-y-2">
            <Heading size="h5">
              <a
                href={data?.rules}
                class="btn-1 outer-shadow hover-in-shadow"
                target="next_page"
              >
                Rules and Regulations
              </a>
            </Heading>
          </div>
          <div className="flex flex-col space-y-2">
            <Heading size="h5">Date</Heading>
            <p className="text-sm">{data?.Date}</p>
          </div>
          <div className="flex flex-col space-y-2">
            <Heading size="h5">Time</Heading>
            <p className="text-sm">{data?.Time}</p>
          </div>
          <div className="flex flex-col space-y-2">
            <Heading size="h5">Venue</Heading>
            <p className="text-sm">{data?.Venue}</p>
          </div>
          <div className="flex flex-col space-y-2">
            <Heading size="h5">Group Size</Heading>
            <p className="text-sm">
              {data?.minGroupSize === data?.maxGroupSize
                ? data?.minGroupSize
                : `${data?.minGroupSize} - ${data?.maxGroupSize}`}
            </p>
          </div>
          <div className="flex flex-col space-y-2">
            <Heading size="h5">Ticket Price</Heading>
            <p className="text-sm">{data?.TicketPrice}</p>
          </div>
          <form action="submit">
            <div className="flex flex-col space-y-2 mb-4">
              <Heading size="h5" className={"mb-2"}>
                {" "}
                Participate here{" "}
              </Heading>
              <input
                type="text"
                placeholder="Enter your Group Name"
                onChange={(e) => {
                  formData.groupName = e.target.value;
                }}
                required
                class="pl-4 mr-2 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
              <input
                type="number"
                placeholder="Enter number of members in your group"
                onChange={(e) => {
                  // check if group size is valid
                  if (e.target.value < data.minGroupSize) {
                    setMessege(
                      `Minimum group size is ${data.minGroupSize} for this event`
                    );
                    setShowAlert(true);
                    return;
                  }
                  if (e.target.value > data.maxGroupSize) {
                    setMessege(
                      `Maximum group size is ${data.maxGroupSize} for this event`
                    );
                    setShowAlert(true);
                    return;
                  }

                  setGroupSize(e.target.value);
                  formData.members = [];
                  for (let i = 0; i < e.target.value - 1; i++) {
                    formData.members.push({ name: "", email: "", phone: "" });
                  }
                  console.log("Members", formData.members.length);
                }}
                required
                class="pl-4 mr-2 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
            </div>
            <div hidden={formData.members.length < 1}>
              <Heading size="h5" className={"mb-2"}>
                Member details (except yours)
              </Heading>
              {formData.members.map((member, index) => {
                return (
                  <div className="mb-4">
                    <input
                      type="text"
                      id={`groupMemberName${index}`}
                      placeholder="Name"
                      onChange={(e) => {
                        formData.members[index].name = e.target.value;
                      }}
                      class="pl-4 mr-2 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    />
                    <input
                      type="email"
                      id={`groupMemberEmail${index}`}
                      name={`groupMemberEmail${index}`}
                      placeholder="Email"
                      onChange={(e) => {
                        formData.members[index].email = e.target.value;
                      }}
                      class="pl-4 mr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    />
                    <input
                      type="tel"
                      id={`groupMemberPhone${index}`}
                      name={`groupMemberPhone${index}`}
                      placeholder="Phone"
                      onChange={(e) => {
                        formData.members[index].phone = e.target.value;
                      }}
                      class="pl-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    />
                  </div>
                );
              })}
            </div>
          </form>
        </Card.Body>
        <Card.Footer className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handlePurchaseTicket}
          >
            Purchase Ticket
          </button>
        </Card.Footer>
        {loading && <LoadingFallback />}
      </Modal>
    </>
  );
}
