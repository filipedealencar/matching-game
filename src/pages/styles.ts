import styled from "styled-components";

export const MainForms = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const StyledLabel = styled.label`
  font-size: 1rem;
`;

export const FormHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5rem;
  text-align: center;
`;

export const InitGame = styled.div`
  color: #474646;
  width: 20rem;
  text-align: center;
  font-size: 1rem;
  padding: 43px 10px 15px 20px;
`;

export const InputForm = styled.input`
  width: 250px;
  padding: 10px;
  border-radius: 10px;
  border: 2px solid #46adf7;
  &:focus {
    box-shadow: 0 0 0 0;
    border: 2px solid #0576c7;
    outline: 0;
  }
`;

export const ButtonSubmit = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  background-color: #3498db;
  color: #ffffff;
  cursor: pointer;
  border-radius: 10px;
  text-decoration: none;
`;

export default MainForms;
