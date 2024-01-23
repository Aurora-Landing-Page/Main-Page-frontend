import * as React from "react";
import { useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import "./Table.css";
import { ThemeProvider, createTheme } from "@mui/material";

const data = [
  {
    name: "John",
    email: "john@example.com",
    phone: 1234567890,
    gender: "Male",
    college: "Example College",
    city: "Example City",
    dob: "2000-01-01T00:00:00.000Z",
    referralCode: "ABC123",
    createdAt: "2022-01-01T00:00:00.000Z",
    updatedAt: "2022-01-02T00:00:00.000Z",
    referrals: [
      {
        name: "Referral 1",
        email: "referral1@example.com",
        phone: 1234567899,
        college: "Example College",
      },
      {
        name: "Referral 2",
        email: "referral2@example.com",
        phone: 1234567898,
        college: "Example College",
      },

    ],
  },
];

// const response = await axios.get("http://localhost:3000/getCaData")
// const ca = response.data
// console.log(ca);


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
      // Add more columns as needed
    ],
    []
  );

  const combinedColumns = [...columns];

  const tableData = useMemo(() => {
    const flattenedData = data.flatMap((item) => {
      return item.referrals.map((referral) => ({
        ...item,
        referrals: undefined,
        ...referral,
      }));
    });

    return flattenedData;
  }, [data]);

  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: 5, //customize the default page size
  });
  
  React.useEffect(() => {
    //do something when the pagination state changes
  }, [pagination.pageIndex, pagination.pageSize]);
  

  const table = useMaterialReactTable({
    columns: combinedColumns,
    data: tableData,
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
