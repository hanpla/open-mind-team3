import * as S from "./HomePage.style";
import HomeHeader from "@/components/containers/Home/HomeHeader/HomeHeader";
import HomeForm from "@/components/containers/Home/HomeForm/HomeForm";

export default function HomePage() {
  return (
    <S.HomeContainer>
      <HomeHeader />

      <HomeForm />
    </S.HomeContainer>
  );
}
