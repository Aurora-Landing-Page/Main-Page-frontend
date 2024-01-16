import { useState, useEffect } from "react";
import { Input } from "./Modal/Input";
import Form from "./Modal/Form/Form";
import { Card } from "./Modal/Card";
import { LoadingFallback } from "./Modal/LoadingFallback";
import Modal from "./Modal";
import { Heading } from "./Modal/Heading";
import axios from "axios";
import merge from "lodash/merge";
import { toast } from "react-hot-toast";

export function PurchaseModal({ isOpen, setIsOpen, data }) {
  const [loading, setLoading] = useState(false);
  const [caption, setCaption] = useState();

  const handlePurchaseTicket = async ({ variables }) => {
    //post data
    const { input } = variables;

    const formdata = new FormData();
    formdata.append("caption", input.caption);
    setLoading(true);
    try {
      const response = await axios.post({
        headers: {
          cookies: document.cookie,
        },
      });

      console.log("Response: ", response);

      //route to feed
      setLoading(false);
      setIsOpen(false);
      // router.push("/feed");
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    // the following lines are to fix a bug where paste (ctrl + v) is not working when the caption is empty initially
    setCaption("");
    setCaption("");
  }, []);

  return (
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
      </Card.Body>
      <Card.Footer className="flex justify-end">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Purchase Ticket
        </button>
      </Card.Footer>
      {loading && <LoadingFallback />}
    </Modal>
  );
}
