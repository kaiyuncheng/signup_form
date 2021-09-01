import React, { useState } from "react";
import { Card, TextField, Button } from "./components";


function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const initialData = [
  {
    id: "first-name",
    label: "First Name",
    type: "text",
    error: false,
    validate: Boolean,
    errorMsg: "First Name cannot be empty",
  },
  {
    id: "last-name",
    label: "Last Name",
    type: "text",
    error: false,
    validate: Boolean,
    errorMsg: "Last Name cannot be empty",
  },
  {
    id: "email-address",
    label: "Email Address",
    type: "email",
    error: false,
    validate: validateEmail,
    errorMsg: "Looks like this is not an email",
  },
  {
    id: "password",
    label: "Password",
    type: "password",
    error: false,
    validate: Boolean,
    errorMsg: "Password cannot be empty",
  },
];

function App() {
  const [formState, setFormState] = useState(initialData);

  /**
   * @param {Event} event
   */
  function onSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.target);

    const data = Object.fromEntries(form.entries());
    console.log(data);

    setFormState((prevFormState) => {
      return prevFormState.map((item) => ({
        ...item,
        error: !item.validate(data[item.id]),
      }));
    });
  }

  return (
    <div className="max-w-7xl mx-auto sm:h-full text-white px-6 sm:px-20 space-y-16 sm:flex sm:items-center sm:justify-center sm:space-y-0 sm:space-x-20">
      <article className="pt-24 sm:pt-0 sm:text-left text-center space-y-6 flex-1">
        <h1 className="text-3xl font-bold">Learn to code by watching others</h1>
        <p>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.{" "}
        </p>
      </article>

      <section className="grid gap-6 flex-1 pb-10">
        {/* form title */}
        <Card className="bg-blue">
          <p className="px-10">
            <b>Try it free 7 days</b> then $20/mo. thereafter
          </p>
        </Card>
        {/* form */}
        <Card className="bg-white text-blue-dark">
          <form className="space-y-4" onSubmit={onSubmit}>
          
            {formState.map(({ id, label, type, error, errorMsg }, i) => {
              return (
                <TextField
                  key={i}
                  id={id}
                  label={label}
                  type={type}
                  errorMsg={error && errorMsg}
                  error={error}
                />
              );
            })}

            {/* submit */}
            <Button>CLAIM YOUR FREE TRIAL</Button>
            {/* terms */}
            <div>
              <p className="text-gray text-sm px-4">
                By clicking the button, you are agreeing to our{" "}
                <a href="#" className="text-red font-bold">
                  Terms and Services
                </a>
              </p>
            </div>
          </form>
        </Card>
      </section>
    </div>
  );
}

export default App;
