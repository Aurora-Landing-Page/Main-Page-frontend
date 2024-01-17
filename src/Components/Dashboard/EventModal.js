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

export function EventModal({ isOpen, setIsOpen, data }) {
  const [loading, setLoading] = useState(false);
  const [caption, setCaption] = useState();

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
    //post data
    const keyRes = await fetch("http://localhost:3000/getKey", {
      method: "GET",
    });
    const keyJSON = await keyRes.json();
    const { key } = keyJSON;

    const res = await fetch("http://localhost:3000/createOrder", {
      method: "POST",
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

        const result = await fetch("http://localhost:3000/verifyOrder", {
          method: "POST",
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
    setCaption("");
    setCaption("");
  }, []);

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
            <p className="text-sm">{data?.GroupSize}</p>
          </div>
          <div className="flex flex-col space-y-2">
            <Heading size="h5">Ticket Price</Heading>
            <p className="text-sm">{data?.TicketPrice}</p>
          </div>
          <form action="submit">
            <Heading size="h5"> Participate here </Heading>
            <div className="flex flex-col space-y-2">
              <input
                type="text"
                placeholder="Enter your Group Name"
                onChange={(e) => {
                  formData.groupName = e.target.value;
                }}
                required
              />
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
