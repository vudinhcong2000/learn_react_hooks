import { useState, useMemo, useRef } from "react";

const UseMemo = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);

  const ref = useRef();

  const handleSubmit = () => {
    setProducts([
      ...products,
      {
        name,
        price: parseInt(price),
      },
    ]);
    setName("");
    setPrice("");
    ref.current.focus();
  };
  const totalPrice = useMemo(() => {
    //Hàm reduce sẽ duyệt qua từng phần tử trong mảng, sau đó trả về một giá trị cuối cùng, giá trị này phụ thuộc vào chương trình của hàm mà bạn truyền vào reduce.
    /*
    - array.reduce((total, currentValue, currentIndex, arr) => {...}, initialValue)
        trong đó:
        + total - giá trị trả lại trước đó của function, chính là giá trị của lệnh return cho mỗi lần lặp.
        + currentValue - giá trị của phần tử hiện tại.
        + currentIndex- chỉ số của phần tử hiện tại.
        + arr - mảng mà phần tử hiện tại thuộc về.
    */
    const result = products.reduce((result, prod) => {
      console.log("TTính toán lại");

      return result + prod.price;
    }, 0);

    return result;
  }, [products]);

  return (
    <div style={{ padding: "10px 32px" }}>
      <input
        type="text"
        ref={ref}
        value={name}
        placeholder="Enter name..."
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        type="text"
        value={price}
        placeholder="Enter price..."
        onChange={(e) => setPrice(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>Add</button>
      <br />
      Total: {totalPrice}
      <ul>
        {products.map((product, index) => {
          return (
            <li key={index}>
              {product.name} - {product.price}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UseMemo;
