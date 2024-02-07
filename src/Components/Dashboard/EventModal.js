import * as React from "react";
import { useState, useEffect } from "react";
import { Input } from "./Modal/Input";
import { Card } from "./Modal/Card";
import { LoadingFallback } from "./Modal/LoadingFallback";
import Modal from "./Modal";
import { Heading } from "./Modal/Heading";
import axios from "axios";
import QRCode from "./images/QR.jpg";
import DownloadIcon from "@mui/icons-material/Download";
import Toast from "../AlertAndLoader/Toast";
import Loader from "../AlertAndLoader/Loader";
import Alert from "../AlertAndLoader/Alert";
import BACKEND_URL from "../../helper";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";
import "../Dashboard/QRDialog.css";
// import sample from "./pdf/sample.pdf";

export function EventModal({ isOpen, setIsOpen, data }) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const [isFileUploaded, setIsFileUploaded] = React.useState(false);
  const [selectedFile, setSelectedFile] = React.useState(null);

  const [loading, setLoading] = useState(false);
  const [groupSize, setGroupSize] = useState(0);
  const [flag, setFlag] = useState(false);
  const [amount, setAmount] = useState(0);

  const initialFormData = {
    eventId: data.EventId,
    eventType: "individual",
    members: [],
    groupName: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [showToast, setShowToast] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const [messege, setMessege] = useState("");

  useEffect(() => {
    setAmount(groupSize * data.TicketPrice);
  }, [groupSize]);

  useEffect(() => {
    if (data.minGroupSize == data.maxGroupSize && data.minGroupSize == 1) {
      formData.eventType = "individual";
    } else {
      formData.eventType = "group";
    }
  }, []);

  const handleToastClose = () => {
    setMessege("");
    setShowToast(false);
  };

  const handleAlertClose = () => {
    setMessege("");
    setShowAlert(false);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    setSelectedFile(file);
    setIsFileUploaded(true);
  };

  const handleClickOpen = () => {
    const regexExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      
    if (formData?.groupName === "") {
      setMessege("Please enter your group name");
      setShowAlert(true);
      return;
    }

    if (groupSize == 0) {
      setMessege("Please enter number of members in your group");
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
      if (!regexExp.test(formData.members[i].email)) {
        console.log(formData.members[i].email);
        setMessege("Enter valid email for all members!");
        setShowAlert(true);
        return;
      }
      if (formData.members[i].phone === "") {
        setMessege("Please enter phone number of all members");
        setShowAlert(true);
        return;
      }
      if (formData.members[i].phone == String(0)) {
        setMessege("Any Phone number should not start with 0 !");
        setShowAlert(true);
        return;
      }
    }
    setOpen(true);
    console.log(formData);
  };

  const handleClose = async () => {
    setSelectedFile(null);
    setIsFileUploaded(false);

    setOpen(false);
  };

  const handleUpload = async () => {
    console.log(selectedFile);
    
    if (!isFileUploaded) {
      setMessege("Please upload the screenshot of payment");
      setShowAlert(true);
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setMessege("Payment completed, Please check your email!");
      setShowToast(true);
    }, 3000);
    setOpen(false);


    const res = await fetch(`${BACKEND_URL}/createPurchase`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
      credentials: "include",
    });

    const data = await res.json();
    const recieptId = data.receiptId;

    var formDataPhoto = new FormData();
    formDataPhoto.append('image', selectedFile);
    formDataPhoto.append('receiptId', recieptId);


    await fetch(`${BACKEND_URL}/uploadScreenshot`, {
      method: "POST",
      body: formDataPhoto,
      credentials: "include",
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // setLoading(false);

        if (data.success) {
          // setMessege("Your image has been uploaded successfully!");
          // setShowToast(true);
          // setOpen(false);
          // setSelectedFile(null);
          // setIsFileUploaded(false);
          console.log("payment successful");
        } else {
          // setMessege("Payment Unsuccessful");
          // setShowAlert(true);
          // setOpen(false);
          // setSelectedFile(null);
          // setIsFileUploaded(false);
        }
      })
      .catch(error => {
        // setLoading(false);
        console.error('Error:', error);
      });
  };

  useEffect(() => {
    console.log(data);
    if (data.minGroupSize == data.maxGroupSize) {
      setGroupSize(data.minGroupSize);
      for (let i = 0; i < data.minGroupSize - 1; i++) {
        formData.members.push({ name: "", email: "", phone: "" });
      }
      console.log(formData);

      setFlag(true);
    }


  }, []);

  return (
    <>
      {showToast && (
        <Toast message={messege} duration={3000} onClose={handleToastClose} />
      )}
      {showAlert && (
        <Alert style={{ marginBottom: "-100px" }} message={messege} duration={3000} onClose={handleAlertClose} />
      )}
      {loading ? (
        <Loader />
      ) : (
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
              <Heading size="h5">Event Head</Heading>
              {/* <p className="text-sm">{data?.head} : {data?.contact}</p> */}
              <p className="text-sm">{data?.head}</p>
            </div>
            <div className="flex flex-col space-y-2">
              <Heading size="h5">
                <a
                  href={data?.rules}
                  class="btn-1 outer-shadow hover-in-shadow"
                  target="next_page"
                  style={{ textDecoration: "underline" }}
                >
                  Rules and Regulations
                  <DownloadIcon />

                </a>
              </Heading>
            </div>
            <div className="flex flex-col space-y-2">
              <Heading size="h5">Date</Heading>
              <p className="text-sm">{data?.Date}</p>
            </div>
            {/* <div className="flex flex-col space-y-2">
            <Heading size="h5">Time</Heading>
            <p className="text-sm">{data?.Time}</p>
          </div> */}
            {/* <div className="flex flex-col space-y-2">
            <Heading size="h5">Venue</Heading>
            <p className="text-sm">{data?.Venue}</p>
          </div> */}
            <div className="flex flex-col space-y-2">
              <Heading size="h5">Group Size</Heading>
              <p className="text-sm">
                {data?.minGroupSize === data?.maxGroupSize
                  ? data?.minGroupSize
                  : `${data?.minGroupSize} - ${data?.maxGroupSize}`}
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <Heading size="h5">Registration Fee per member</Heading>
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
                {!flag && (<input
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
                />)}
              </div>
              <div hidden={formData.members.length < 1}>
                <Heading size="h5" className={"mb-2"}>
                  Member details (except yours)
                </Heading>
                {console.log(formData.members)}
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
          <Card.Footer className="flex flex-col justify-end">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
              onClick={handleClickOpen}
              style={{ borderRadius: "5px" }}
            >
              Purchase Ticket ({`${amount}`}.rs)
              {/* Get Passes */}
            </button>
            <div>
              *Note: This registration does not include accomodation and pronite passes.
            </div>

          </Card.Footer>
          {loading && <LoadingFallback />}
          <Dialog
            // fullScreen={fullScreen}
            open={open}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
            className='Dialog'
          >
            <DialogTitle id="responsive-dialog-title">
              {`Pay ${amount} Thorugh The Below QR`}
            </DialogTitle>
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              {/* X */}
              <CloseIcon />
            </IconButton>
            <DialogContent>
              <DialogContentText>
                <img src={QRCode} alt="QR Code" className='Dialog_QR' />
                {/* Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex accusantium sapiente repellat facere sed porro ab culpa eius tempore. Hic labore cupiditate sapiente perferendis minus temporibus id consequatur quod voluptatem! */}
                Upload the screenshot of payment
                <br />
                <input
                  accept="image/*"
                  // className={classes.input}
                  style={{ display: 'none' }}
                  id="raised-button-file"
                  type="file"
                  onChange={handleFileChange}

                />
                <label htmlFor="raised-button-file">
                  <Button className='Dialog_Upload' variant='outlined' color='success' component="span" >
                    Upload
                  </Button>
                </label>
                {isFileUploaded && (
                  <DoneIcon style={{ color: 'green', marginLeft: '10px' }} />
                )}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              {/* <Button autoFocus onClick={handleClose}>
            Disagree
          </Button> */}
              <Button onClick={handleUpload} variant="contained" color="success" className='Dialog_btn'>
                Submit
              </Button>

            </DialogActions>
          </Dialog>

        </Modal>)}
    </>
  );
}
