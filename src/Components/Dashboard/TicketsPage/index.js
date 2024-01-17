import { useState } from "react";
import Toast from "../../AlertAndLoader/Toast";
import Alert from "../../AlertAndLoader/Alert";
import Loader from "../../AlertAndLoader/Loader";

import { HiUserRemove } from "react-icons/hi";

function TicketCardsLayout() {
  const initialFormData = {
    accomodation: false,
    pronite: false,
    whole_event: false,
    purchaseType: "group",
    members: [],
  };

  const [formData, setFormData] = useState(initialFormData);
  const [showToast, setShowToast] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [loading, setLoading] = useState(false);

  const [messege, setMessege] = useState("");

  const handlePurchaseTicket = async () => {
    //post data
    const keyRes = await fetch("http://localhost:3000/getKey", {
      method: "GET",
      credentials: "include",
    });
    const keyJSON = await keyRes.json();
    const { key } = keyJSON;

    const res = await fetch("http://localhost:3000/createOrder", {
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

        const result = await fetch("http://localhost:3000/verifyOrder", {
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

  const handleToastClose = () => {
    setMessege("");
    setShowToast(false);
  };

  const handleAlertClose = () => {
    setMessege("");
    setShowAlert(false);
  };

  const addMember = () => {
    console.log("add member");
    formData.members.push({
      email: "",
      name: "",
      phone: "",
    });

    setFormData({ ...formData });
  };

  return (
    <div className="flex items-center justify-center  ">
      {showToast && (
        <Toast message={messege} duration={3000} onClose={handleToastClose} />
      )}
      {showAlert && (
        <Alert message={messege} duration={3000} onClose={handleAlertClose} />
      )}
      {loading ? (
        <Loader />
      ) : (
        <div class="flex items-center justify-center  mt-10 md:mt-10 ml-6">
          <div class="login_box">
            <form>
              <h2 class="login_h2">Attend</h2>
              <div class="">
                <div class="flex items-center space-x-4 ">
                  <div class="flex items-center">
                    <input
                      type="radio"
                      id="individualPurchase"
                      name="purchaseType"
                      value="individual"
                      class="mr-1 leading-tight"
                      onChange={(e) => {
                        formData.purchaseType = !e.target.checked
                          ? "group"
                          : "individual";
                        setFormData({ ...formData });
                      }}
                    />
                    <label for="individualPurchase">Individual Purchase</label>
                  </div>
                  <div class="flex items-center">
                    <input
                      type="radio"
                      id="groupPurchase"
                      name="purchaseType"
                      value="group"
                      class="mr-2 leading-tight"
                      onChange={(e) => {
                        formData.purchaseType = e.target.checked
                          ? "group"
                          : "individual";

                        setFormData({ ...formData });
                      }}
                    />
                    <label for="groupPurchase">Group Purchase</label>
                  </div>
                </div>
                <label class="flex items-center">
                  <input
                    type="checkbox"
                    id="accommodation"
                    name="option"
                    value="Accommodation"
                    class="mr-2 leading-tight"
                    onChange={(e) => (formData.accomodation = e.target.checked)}
                  />{" "}
                  Accommodation
                </label>
                <label class="flex items-center">
                  <input
                    type="radio"
                    id="pronite"
                    name="option"
                    value="pronite"
                    class="mr-2 leading-tight"
                    onChange={(e) => (formData.pronite = e.target.checked)}
                  />{" "}
                  Pronite
                </label>
                <label class="flex items-center">
                  <input
                    type="radio"
                    id="wholeEvent"
                    name="option"
                    value="Whole Event"
                    class="mr-2 leading-tight"
                    onChange={(e) => (formData.whole_event = e.target.checked)}
                  />{" "}
                  Whole Event
                </label>
                <div
                  id="groupPurchaseFields"
                  // hidden={formData.purchaseType !== "group"}
                  className={` mt-2 ${
                    formData.purchaseType !== "group" ? "hidden" : "block"
                  } `}
                >
                  {formData.members.map((member, index) => {
                    return (
                      <div className="mb-4 ">
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
                  <button
                    type="button"
                    class="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
                    onClick={addMember}
                  >
                    + Add Group Member
                  </button>
                  <button
                    type="button"
                    class="mt-4 ml-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
                    onClick={() => {
                      formData.members.splice(formData.length - 1, 1);

                      setFormData({ ...formData });
                    }}
                  >
                    <HiUserRemove />
                  </button>
                </div>
              </div>
              <div class="login_button pt-10">
                <a className="login_a " href="#">
                  <button
                    class="login_btn"
                    onClick={(e) => {
                      e.preventDefault();
                      handlePurchaseTicket();
                    }}
                  >
                    Purchase
                  </button>
                </a>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default TicketCardsLayout;
