import React from "react";
import {
  HeaderButton,
  HeaderContainer,
  HeaderForm,
  HeaderTitle,
  SearchInput,
  SelectBox,
} from "./Header.style";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>BOOKS OR MAGAZİNES</HeaderTitle>
      <HeaderForm>
        <SearchInput type="text" placeholder="name" required />
        <SelectBox>
          <option value="">all</option>
        </SelectBox>
        <HeaderButton type="submit">search</HeaderButton>
      </HeaderForm>
    </HeaderContainer>
  );
};

export default Header;
