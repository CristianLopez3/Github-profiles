import React, { useState } from "react";

const initialForm = {
  name: '',
};

const  GithubForm = ({ searchPerfil }) => {

  const [form, setForm] = useState(initialForm); // valores del formulario

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {

    e.preventDefault();
    if (!form.name) {
      alert("Inputs incomplete, please fill the inputs");
      return;
    }

    searchPerfil(form.name);
    console.log(form.name);
    handleReset();

  };


  const handleReset = (e) => {
    setForm(initialForm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        id="name"
        onChange={handleChange}
        value={form.name} 
        autoFocus 
        autoComplete="off"
      />

      <input type="submit" value="search" />
      <input type="reset" value="clear" onClick={handleReset} />
    </form>
  );
};

export default GithubForm;
