import { useState } from "react";

export default function BartenderSignUp(props) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    category: "",
    intro: "",
    bio: "",
    skills: "",
    rate: "",
    img_url: "",
  });
  const {
    name,
    email,
    password,
    category,
    intro,
    bio,
    skills,
    rate,
    img_url,
  } = formData;
  const { handleSignUpBartender } = props;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSignUpBartender(formData);
      }}
    >
      <h3>Bartender Sign Up</h3>
      <label>
        Name:
        <input type="text" name="name" value={name} onChange={handleChange} />
      </label>
      <br />
      <label>
        Email:
        <input type="text" name="email" value={email} onChange={handleChange} />
      </label>
      <br />
        <label>
        Password:
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </label>
      <br />
      <select className="categories" name="category" value={category} onChange={handleChange}>
        <option>Casual</option>
        <option>Cocktail</option>
        <option>Flair</option>
      </select>
      <br />
      <label>
        Intro:
        <input
          type="text-area"
          name="intro"
          value={intro}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Bio:
        <input
          type="text-area"
          name="bio"
          value={bio}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Skills:
        <input
          type="text"
          name="skills"
          value={skills}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Rate:
        <input
          type="number"
          name="rate"
          value={rate}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Picture:
        <input
          type="text"
          name="img_url"
          value={img_url}
          onChange={handleChange}
        />
      </label>
      <br />
      <button>Submit</button>
    </form>
  );
}
