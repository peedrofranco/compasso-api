import React, { useState } from "react";
import {
  Container,
  CardList,
  ContainerUser,
  CardUser,
  Picture,
} from "./styles";
import Button from "../../components/Button";
import Input from "../../components/Input";
import axios from "axios";

const Form = () => {
  const [value, setValue] = useState("");
  const [repositories, setRepositories] = useState([]);
  const [user, setUser] = useState(undefined);
  // const [starred, setStarred] = useState([]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleUser = async (value) => {
    setRepositories([]);
    const data = await axios(`https://api.github.com/users/${value}`);

    const {
      id,
      avatar_url,
      name,
      url,
      bio,
      followers,
      public_repos,
    } = data.data;

    setUser({
      id,
      avatar_url,
      name,
      url,
      bio,
      followers,
      public_repos,
    });
  };

  const handleRepos = async (value) => {
    setUser("");
    const data = await axios(`https://api.github.com/users/${value}/repos`);

    setRepositories(data.data);
  };

  const handleStarred = (value) => {
    console.table(value);
  };

  return (
    <Container>
      <Input onChange={handleChange} />

      <Button title="User" onClick={() => handleUser(value)} />
      <Button title="Repos" onClick={() => handleRepos(value)} />
      <Button title="Starred" onClick={() => handleStarred(value)} />

      {user ? (
        <ContainerUser>
          <Picture src={user?.avatar_url} />
          <CardUser>{user.name}</CardUser>
          <CardUser>{user.bio}</CardUser>
          {user.followers > 0 && (
            <CardUser>{user.followers} followers</CardUser>
          )}
          <CardUser>{user.public_repos} Repositórios</CardUser>
        </ContainerUser>
      ) : (
        ""
      )}

      {repositories.map((rep) => (
        <CardList key={rep.id}>{rep.name}</CardList>
      ))}
    </Container>
  );
};

export default Form;
