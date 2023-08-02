import { AiFillEdit } from "react-icons/ai";
import Button from "../components/Button";
import Table from "../components/Table";

const Tables = () => {
  const columns = [
    {
      label: "Product Name",
      value: "name",
    },
    {
      label: "Color",
      value: "color",
    },
    {
      label: "Category",
      value: "category",
    },
    {
      label: "Address",
      value: "address",
    },
    {
      label: "Contact Number",
      value: "mobile",
    },
    {
      label: "Action",
      content: (item) => {
        return (
          <div>
            <Button
              variant="outlined"
              className="hover:text-white text-black hover:border-white border-black border"
            >
              <AiFillEdit
                className="text-lg"
                onClick={() => alert(item.name)}
              />
            </Button>
          </div>
        );
      },
    },
  ];
  const products = [
    {
      name: "Product 1",
      color: "Black",
      category: "Category 1",
      address: "user address",
      mobile: "01xxxxxxxxxx",
    },
    {
      name: "Product 2",
      color: "Blue",
      category: "Category 2",
      address: "user address",
      mobile: "01xxxxxxxxxx",
    },
    {
      name: "Product 3",
      color: "Red",
      category: "Category 3",
      address: "user address",
      mobile: "01xxxxxxxxxx",
    },
    {
      name: "Product 4",
      color: "Green",
      category: "Category 4",
      address: "user address",
      mobile: "01xxxxxxxxxx",
    },
    {
      name: "Product 5",
      color: "Yellow",
      category: "Category 5",
      address: "user address",
      mobile: "01xxxxxxxxxx",
    },
  ];

  return (
    <div id="tables">
      <h2 className="font-medium text-3xl mb-3">Tables</h2>

      <div className="flex flex-col gap-3">
        <Table columns={columns} data={products} />
      </div>
    </div>
  );
};

export default Tables;
