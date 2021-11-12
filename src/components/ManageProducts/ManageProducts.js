import React, { useEffect, useState } from "react";

const Manage = () => {
  const [manageProducts, setManageProducts] = useState([]);

  useEffect(() => {
    fetch(`https://powerful-fjord-72583.herokuapp.com/car`)
      .then((res) => res.json())
      .then((data) => setManageProducts(data));
  }, []);

  const handleCancel = (_id) => {
    fetch(`https://powerful-fjord-72583.herokuapp.com/car/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount === 1) {
          const remainingOrders = manageProducts.filter(
            (order) => order._id !== _id
          );
          setManageProducts(remainingOrders);
          alert("Want to delete?");
        } else {
          alert("Something is wrong");
        }
      });
  };
  return (
    <div className="text-center my-3">
      <p>{manageProducts.length} products found to manage</p>
      <table className="table container table-dark table-stripe">
        <thead className="mx-auto">
          <tr>
            <th scope="col">Car</th>
            <th scope="col">Price</th>
            <th scope="col">Description</th>
            <th scope="col">Cancel</th>
          </tr>
        </thead>
        <tbody>
          {manageProducts?.map((i) => {
            // const { _id, user, email } = order;
            return (
              <tr key={i?._id}>
                <td>{i.name}</td>

                <td>${i?.price}</td>
                <td>{i?.description.slice(0,30)}</td>
                
                <td>
                  <button
                    onClick={() => handleCancel(i?._id)}
                    className="btn btn-warning"
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Manage;
