import { Dialog } from "@headlessui/react";
import { useContext } from "react";
import { CloseIcon } from "../Assets/CloseIcon";
import { ModalContext } from "../index";
import { Button } from "../Button";
const ModalHeader = ({ title, description, dismiss = false, children }) => {
  const { onClose } = useContext(ModalContext);
  if (!onClose) throw new Error("`ModalHeader` must be used within `Modal`");

  return (
    <header className="flex items-center  justify-between  w-full  ">
      <div className="flex items-center ">
        {!children && (
          <>
            {" "}
            <Dialog.Title>{title}</Dialog.Title>
            <Dialog.Description
              as="h4"
              className="font-semibold text-sm text-gray-500"
            >
              {description}
            </Dialog.Description>
          </>
        )}
        {children}
      </div>
      <div className="flex ">
        {dismiss && (
          <Button
            variant="dark"
            className="flex items-center  -mt-1 "
            style={{ backgroundColor: "black" }}
            rounded="md"
            aria-label="Close modal"
            onClick={onClose}
          >
            <CloseIcon className="w-5 h-5" />
          </Button>
        )}
      </div>
    </header>
  );
};

export default ModalHeader;
