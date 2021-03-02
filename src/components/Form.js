import React, { useState } from "react";
import { Button, Container } from '@material-ui/core';
import axios from "axios";
import TextField from '@material-ui/core/TextField';


export default function Form() {
  const [formStatus, setFormStatus] = useState(false);
  const [query, setQuery] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = () => (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(query).forEach(([key, value]) => {
      formData.append(key, value);
    });

    axios
      .post(
        "https://getform.io/f/b22f10be-75a6-40c0-9ec6-3519dc38fe29",
        formData,
        { headers: { Accept: "application/json" } }
      )
      .then(function (response) {
        setFormStatus(true);
        setQuery({
          name: "",
          email: "",
          message: ""
        });
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <Container
      align="center"
      direction="column"
      justify="space-evenly"

    >
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <TextField
            required
            label="Email address"
            variant="outlined"
            type="email"
            className="form-control"
            id="email"
            defaultValue="Default Value"
            name="email"
            value={query.email}
            onChange={handleChange()}
          />
           <TextField
            required
            label="Name"
            variant="outlined"
            type="text"
            className="form-control"
            id="name"
            defaultValue="Default Value"
            name="name"
            value={query.name}
            onChange={handleChange()}
          />
        </div>
        <div className="form-group">
          <TextField
            required
            defaultValue="Message"
            label="Message"
            variant="outlined"
            type="text"
            className="form-control"
            id="message"
            name="message"
            value={query.message}
            onChange={handleChange()}
          />
        </div>
        <div className="form-group mt-3">
          {formStatus ? (
            <div className="alert alert-success">
              Your message has been sent.
            </div>
          ) : (
              ""
            )}
          <Button type="submit">
            Contact Emily 
          </Button>
        </div>
      </form>
    </Container>
  );
}
