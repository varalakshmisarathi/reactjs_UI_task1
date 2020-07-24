import React from "react";
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
            <h3 style={{color:"red"}}>firstname</h3>
            <input
              type="text"
              value={first}
              required
              onChange={(e) => setfirst(e.target.value)}
              refs="rfirst"
              onKeyDown={handleEnter}
              required
            ></input>
            <h3 style={{color:"green"}}>lastname</h3>
            <input
              type="text"
              value={last}
              onChange={(e) => setlast(e.target.value)}
              refs="rlast"
              onKeyDown={handleEnter}
              required
            ></input>
           <h3 style={{color:"orange"}}>Email</h3>
            <input
              type="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              required
              onKeyDown={handleEnter}
              refs="remail"
            ></input>
             <h3 style={{color:"brown"}}>password</h3>
            <input
              type="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              onKeyDown={handleEnter}
              refs="rpassword"
              required
            />
            <br />
            <h3 style={{color:"#00ff80"}}>Reset password</h3>
            <input
              type="password"
              value={repassword}
              refs="rrpassword"
              onChange={(e) => setrepassword(e.target.value)}
              required
              onKeyDown={handleEnter}
            />
            <br />
            <h3 style={{color:"#0040ff"}}>Marital status</h3>
            <input
              type="radio"
              name="status"
              value="single"
              refs="single"
              onChange={(e) => setstatus(e.currentTarget.value)}
              checked={status == "single"}
            />
            Single
            <input
              type="radio"
              name="status"
              value="married"
              refs="married"
              onChange={(e) => setstatus(e.currentTarget.value)}
              checked={status == "married"}
            />
            Married
            <input
              type="radio"
              name="status"
              value="in relationship"
              onChange={(e) => setstatus(e.currentTarget.value)}
              checked={status == "in relationship"}
            />
            In Relationship
            <br />
            <h3 style={{color:"#8000ff"}}>Choice of food</h3>
            <input
              type="radio"
              name="food1"
              value="icecream"
              onChange={(e) => setfood(food.concat([e.target.value]))}
              checked={food.includes("icecream")}
            />
            icecream
            <input
              type="radio"
              name="food2"
              value="Briyani"
              onChange={(e) => setfood(food.concat([e.target.value]))}
              checked={food.includes("Briyani")}
            />
            briyani
            <input
              type="radio"
              name="food3"
              value="noodles"
              onChange={(e) => setfood(food.concat([e.target.value]))}
              checked={food.includes("noodles")}
            />
            noodles
            <h3 style={{color:"#ff0080"}}>Choose a country</h3>
            <select onChange={(e) => random_function(e)}>
              <option>select option</option>
              <option>INDIA</option>
              <option>USA</option>
            </select>
            <br />
            <h3 style={{color:"#26004d"}}>select state</h3>
            <select onChange={(e) => f(e)} onKeyDown={handleEnter}>
              <option>--Choose State--</option>
              {state.map((data, i) => {
                return <option key={i}>{data}</option>;
              })}
            </select>
            <br></br>
            <button type="submit" onClick={() => submit()}>
            <h3 style={{color:"#ff0040"}}>submit</h3>
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
