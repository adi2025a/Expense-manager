import React, { useState,useEffect} from "react";
import Expense from "./Expense";
import initialExpenses from "../data/expense.json";
import { selectedCategory } from "./Navbar";

const ExpenseBox = () => {

  const [expenses,setExpenses]=useState(initialExpenses);
  const [filteredExpenses, setFilteredExpenses] = useState(initialExpenses);

  useEffect(() => {
    if (selectedCategory) {
      setFilteredExpenses(expenses.filter(expense => expense.category === selectedCategory));
    } else {
      setFilteredExpenses(expenses);
    }
  }, [selectedCategory, expenses]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formObject = Object.fromEntries(formData.entries());
    const newExpense = {
      id: expenses.length + 1,
      category: formObject.category,
      amount: parseFloat(formObject.amount),
      date: formObject.date,
      time: formObject.time,
    };
    console.log(newExpense);
    setExpenses([...expenses,newExpense]);
  };

  return (

    <div className="bg-slate-800">
      {expenses.map((item) => (
        <Expense
          key={item.id}
          category={item.category}
          amount={item.amount}
          date={item.date}
          time={item.time}
        />
      ))}


      <form onSubmit={handleSubmit}>
        <div className="flex justify-around p-5 text-xl align-middle m-1 text-white bg-black">
          <input type="number" name="amount" placeholder="$" className="outline-none bg-black w-10"/>
          <div className="flex flex-col gap-1 items-center bg-black">
            <p>
              <input type="date" name="date" className="outline-none bg-slate-700 w-fit"/>
            </p>
            <p>
              <input type="time" name="time" className="outline-none bg-slate-700 w-fit"/>
            </p>
          </div>
          <select name="category" className="outline-none bg-black">
            <option value="">Category</option>
            <option value="food">Food</option>
            <option value="shopping">Shopping</option>
            <option value="rent">Rent</option>
            <option value="travel">Travel</option>
          </select>
        </div>
        <button type="submit" className=""><img src="src/assets/add.png" alt="" /></button>
      </form>


    </div>
  );
};

export default ExpenseBox;
