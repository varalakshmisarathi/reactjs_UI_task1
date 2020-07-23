import React from "react";
//import KeyboardEventHandler from "react-keyboard-event-handler";
const App = () => {
  const [first, setfirst] = React.useState("");
  const [last, setlast] = React.useState("");
  const [email, setemail] = React.useState("");
  const [country, setcountry] = React.useState("");
  const [status, setstatus] = React.useState("");
  const [food, setfood] = React.useState([]);
  const [state, setstate] = React.useState([]);
  const [arr, setarr] = React.useState([]);
  const [password, setpassword] = React.useState("");
  const [repassword, setrepassword] = React.useState("");
  const [selectstate, setselectstate] = React.useState("");
  const selection = [
    {
      name: "INDIA",
      states: ["tamilnadu", "kerala", "Delhi"],
    },
    {
      name: "USA",
      states: ["New York", "California", "Texas"],
    },
  ];
  function random_function(e) {
    console.log("state", state);
    setcountry(e.target.value);
    setstate(selection.filter((d, i) => d.name == e.target.value)[0].states);
    console.log("state", state);
  }
  function f(e) {
    //console.log(selectstate);
    setselectstate(e.target.value);
  }
  function handleEnter(event) {
    if (event.keyCode === 13) {
      const form = event.target.form;
      const index = Array.prototype.indexOf.call(form, event.target);
      form.elements[index + 1].focus();
      event.preventDefault();
    }
  }
  function submit() {
    if (password == repassword) {
      return setarr(
        arr.concat([
          { first, last, email, status, food, country, selectstate },
        ]),

        setfirst(""),
        setlast(""),
        setemail(""),
        setrepassword(""),
        setpassword(""),
        setstatus(""),
        setfood(""),
        setcountry("")
      );
    } else {
      alert("confirm password Password is incorrect");
    }
  }

  return (
    console.log(arr, state, selectstate),
    (
      <>
        <div className="firstdiv">
          <form>
            <label>First Name:</label>
            <br />
            <input
              type="text"
              value={first}
              required
              onChange={(e) => setfirst(e.target.value)}
              refs="rfirst"
              onKeyDown={handleEnter}
              required
            ></input>
            <br />
            <label>Last Name:</label>
            <br />
            <input
              type="text"
              value={last}
              onChange={(e) => setlast(e.target.value)}
              refs="rlast"
              onKeyDown={handleEnter}
              required
            ></input>
            <br />
            <label>E-mail</label>
            <br />
            <input
              type="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              required
              onKeyDown={handleEnter}
              refs="remail"
            ></input>
            <br />
            <br />
            <label>Password:</label>
            <br />
            <input
              type="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              onKeyDown={handleEnter}
              refs="rpassword"
              required
            />
            <br />
            <label>Reset-Password:</label>
            <br />
            <input
              type="password"
              value={repassword}
              refs="rrpassword"
              onChange={(e) => setrepassword(e.target.value)}
              required
              onKeyDown={handleEnter}
            />
            <br />
            <label>Marital Status</label>
            <br />
            <input
              type="radio"
              name="status"
              value="single"
              refs="single"
              onChange={(e) => setstatus(e.currentTarget.value)}
              checked={status == "single"}
            />
            Single
            <br />
            <input
              type="radio"
              name="status"
              value="married"
              refs="married"
              onChange={(e) => setstatus(e.currentTarget.value)}
              checked={status == "married"}
            />
            Married
            <br />
            <input
              type="radio"
              name="status"
              value="in relationship"
              onChange={(e) => setstatus(e.currentTarget.value)}
              checked={status == "in relationship"}
            />
            In Relationship
            <br />
            <label>Choice of Food</label>
            <br />
            <input
              type="radio"
              name="food1"
              value="icecream"
              onChange={(e) => setfood(food.concat([e.target.value]))}
              checked={food.includes("icecream")}
            />
            icecreamcakes
            <br />
            <input
              type="radio"
              name="food2"
              value="Briyani"
              onChange={(e) => setfood(food.concat([e.target.value]))}
              checked={food.includes("Briyani")}
            />
            briyani
            <br />
            <input
              type="radio"
              name="food3"
              value="Kongura Chicken"
              onChange={(e) => setfood(food.concat([e.target.value]))}
              checked={food.includes("Kongura Chicken")}
            />
            KonguraChicken
            <br />
            <br />
            <label>Choose a Country</label>
            <select onChange={(e) => random_function(e)}>
              <option>select option</option>
              <option>INDIA</option>
              <option>USA</option>
            </select>
            <br />
            <label>Select state:</label>
            <select onChange={(e) => f(e)} onKeyDown={handleEnter}>
              <option>--Choose State--</option>
              {state.map((data, i) => {
                return <option key={i}>{data}</option>;
              })}
            </select>
            <br></br>
            <button type="submit" onClick={() => submit()}>
              Submit
            </button>
          </form>
        </div>
        <div className="seconddiv">
          <table>
            <thead>
              <tr>
                <th>First name</th>
                <th>Last name:</th>
                <th>E-mail</th>
                <th>Status</th>
                <th>Choice of food</th>
                <th>Country</th>
                <th>state</th>
              </tr>
            </thead>
            <tbody>
              {arr.map((data, index) => {
                return (
                  <tr key={index}>
                    <td>{data.first}</td>
                    <td>{data.last}</td>
                    <td>{data.email}</td>
                    <td>{data.status}</td>
                    <td>{data.food}</td>
                    <td>{data.country}</td>
                    <td>{data.selectstate}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </>
    )
  );
};
export default App;