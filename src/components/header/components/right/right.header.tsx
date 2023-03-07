import React from "react";
import CurrentDateHeader from "./components/current-date/current-date.header";
import ProfileHeader from "./components/profile/profile.header";
import SellerSearchSlimHeader from "./components/sellers-search-slim/selllers-search-slim.header";
import { Container } from "./styles";


const RightHeader = () => {
  return (
    <Container>
      <CurrentDateHeader />
      {/* <SearchHeader /> */}
      {/* <Notification /> */}
      <SellerSearchSlimHeader />
      <ProfileHeader />
    </Container>
  )
}

export default RightHeader