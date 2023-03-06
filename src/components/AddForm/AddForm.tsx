import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const AddForm = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    imageUrl: "",
  });
  const handleChange = (value: string, name: string) => {
    const newValue = { ...form, ...{ [name]: value } };
    setForm(newValue);
  };
  useEffect(() => {
    // this hook will get called every time myArr has changed
    // perform some action every time myArr is updated
    // console.log("Updated State", form);
  }, [form]);
  const navigate = useNavigate();

  const submitForm = (event: SubmitEvent | any) => {
    event.stopPropagation();
    fetch(`${import.meta.env.VITE_API_URL}`, {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer",
    })
      .then((response) => {
        response.json();
      })
      .then((data) => {
        navigate("/");
      })
      .catch((err) => {
        console.log("Error Happened", err);
      });
  };
  return (
    <div className="min-h-screen py-6 flex flex-col sm:py-12">
      <div className="py-3 w-6/12 sm:max-w-xl sm:mx-auto">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="Title"
            >
              Title
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="Title"
              type="text"
              value={form.title}
              required={true}
              onChange={(e) => handleChange(e.target.value, "title")}
              placeholder="Title"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="ImageUrl"
            >
              Image URL
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="ImageUrl"
              type="url"
              required={true}
              value={form.imageUrl}
              onChange={(e) => handleChange(e.target.value, "imageUrl")}
              placeholder="ImageUrl"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="Description"
            >
              Description
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="Description"
              type="text"
              required={true}
              value={form.description}
              onChange={(e) => handleChange(e.target.value, "description")}
              placeholder="Description"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="Price"
            >
              Price
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="Price"
              type="number"
              required={true}
              value={form.price}
              onChange={(e) => handleChange(e.target.value, "price")}
              placeholder="Price"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              onClick={submitForm}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
