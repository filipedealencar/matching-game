import { useForm } from "react-hook-form";
import {
  ButtonSubmit,
  FormContainer,
  FormHeader,
  InitGame,
  InputForm,
  MainForms,
  StyledForm,
  StyledLabel,
} from "./styles";
import { Logo } from "@/Icons";
import { useContext } from "react";
import { GlobalContext } from "@/Context/GlobalContext";
import router from "next/router";
import CustomSelect from "@/Components/CustomSelect";

const Home = () => {
  const { register, handleSubmit, setValue } = useForm();
  const { setUserData, userData } = useContext(GlobalContext);

  const onSubmit = (data: any) => {
    router.push("/game");
    setUserData((state) => {
      return { ...state, name: data.name, level: data.level };
    });
  };

  console.log(userData);

  const options = [
    { value: 4, label: "Beginner" },
    { value: 8, label: "Intermediate" },
    { value: 12, label: "Advanced" },
    { value: 20, label: "Expert" },
  ];

  return (
    <MainForms>
      <FormHeader>
        <Logo />
        <p>
          Test your memory as you match pairs of cards in an interactive online
          environment. Challenge yourself, surpass your mental limits, and reach
          new levels of concentration and memorization in this thrilling virtual
          memory game.
        </p>
      </FormHeader>
      <FormContainer>
        <InitGame>
          {`Enter your name, choose your level, and click 'Start Game' to begin the game.`}
        </InitGame>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <InputForm
            {...register("name")}
            placeholder="Enter your name"
            defaultValue=""
          />
          <CustomSelect
            options={options}
            onSelect={(selectedValue) => {
              setValue("level", selectedValue);
            }}
            {...register("level")}
          />
          <ButtonSubmit type="submit">Start Game</ButtonSubmit>
        </StyledForm>
      </FormContainer>
    </MainForms>
  );
};

export default Home;
