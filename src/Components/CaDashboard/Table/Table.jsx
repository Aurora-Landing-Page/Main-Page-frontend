import * as React from "react";
import { useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import "./Table.css";
import { ThemeProvider, createTheme } from "@mui/material";
import axios from "axios";
import BACKEND_URL from "../../../helper.js";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#424242", // Adjust the color to a lighter shade
    },
    background: {
      default: "#1e1e1e6f", // Adjust the background color to a lighter shade
      paper: "#424242", // Adjust the paper color to a lighter shade
    },
    table: {
      background: "#555", // Adjust the table background color to a lighter shade
    },
  },
});

export default function BasicTable() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/getCaData`, {
          withCredentials: true,
        });

        // Assuming the API response has a 'data' key containing the user information
        const userData = response.data.referrals;

        // Fetch payment status for each user
        const paymentStatusPromises = userData.map(async (user) => {
          try {
            const paymentStatusResponse = await axios.post(
              `${BACKEND_URL}/getPaymentStatus`,
              {
                email: user.email,
              },
              {
                withCredentials: true,
              }
            );
            // Check if associatedPayments is an empty array or contains a string
            console.log(paymentStatusResponse.data);
            let hasAssociatedPayments = false;

            if(paymentStatusResponse.data && paymentStatusResponse.data[0]){
              hasAssociatedPayments = true;
            }

            console.log(hasAssociatedPayments);
            

            return { ...user, hasAssociatedPayments };
          } catch (error) {
            console.error(
              `Error fetching payment status for ${user.email}:`,
              error
            );
            return { ...user, hasAssociatedPayments: false };
          }
        });

        // Wait for all payment status requests to complete
        const modifiedData = await Promise.all(paymentStatusPromises);

        setData(modifiedData);
        console.log(modifiedData);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const theme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const columns = useMemo(
    () => [
      {
        accessorKey: "name", //access nested data with dot notation
        header: "Name",
        size: 150,
      },
      {
        accessorKey: "email",
        header: "Email",
        size: 200,
      },
      {
        accessorKey: "phone",
        header: "Phone",
        size: 200,
      },
      {
        accessorKey: "college",
        header: "College",
        size: 200,
      },
      {
        accessorKey: "hasAssociatedPayments",
        header: "Payment Status",
        size: 150,
        Cell: ({ row }) => {
          const { hasAssociatedPayments } = row.original;
      
          return hasAssociatedPayments ? (
            <React.Fragment>
              <CheckCircleIcon style={{ color: "green" }} /> Paid
            </React.Fragment>
          ) : (
            <React.Fragment>
              <QueryBuilderIcon style={{ color: "orange" }} /> Pending
            </React.Fragment>
          );
        },
      },
    ],
    []
  );

  const combinedColumns = [...columns];

  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: 5,
  });


  React.useEffect(() => {
    // Do something when the pagination state changes
  }, [pagination.pageIndex, pagination.pageSize]);
  const table = useMaterialReactTable({
    columns: combinedColumns,
    data: data,
    onPaginationChange: setPagination, //hoist pagination state to your state when it changes internally
    state: { pagination },
    enableFullScreenToggle: false,
    visibleInShowHideMenu: false,
    muiTableProps: {
      sx: {
        border: "1px solid rgba(81, 81, 81, .5)",
        color: "white",
      },
    },
    muiTableHeadCellProps: {
      sx: {
        border: "1px solid rgba(81, 81, 81, .5)",
        color: "white",
        fontStyle: "italic",
        fontWeight: "normal",
        fontFamily: "monospace",
      },
    },
    muiTableBodyCellProps: {
      sx: {
        border: "1px solid rgba(81, 81, 81, .5)",
        color: "white",
        fontFamily: "monospace",
      },
    },
    //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
    muiPaginationProps: {
      color: "secondary",
      rowsPerPageOptions: [5],
      shape: "rounded",
      variant: "outlined",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="Table overflow-x-auto">
        <MaterialReactTable table={table} />
      </div>
    </ThemeProvider>
  );
}
