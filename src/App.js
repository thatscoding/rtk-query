import React from "react";
import {
  useGetAllProductQuery,
  useGetProductByLimitQuery,
  useDeleteProductMutation,
  useCreateProductMutation,
  useUpdateProductMutation,
} from "./services/product";

const App = () => {
  // const { data, isSuccess } = useGetAllProductQuery();
  const res = useUpdateProductMutation(
    {
      product: "new product",
    },
    1
  );

  // if (isSuccess) {
  //   console.log(data);
  // }
  console.log("res data ", res);

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
};

export default App;
