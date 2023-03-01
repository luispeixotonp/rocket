import React from "react";
import CurrentDateHeader from "./components/current-date/current-date.header";
import Notification from "./components/notifications/notifications.header";
import ProfileHeader from "./components/profile/profile.header";
import SearchHeader from "./components/search/search.header";
import SellerHeader from "./components/sellers/selllers.header";
import { Container } from "./styles";


const RightHeader = () => {
  return (
    <Container>
      <CurrentDateHeader />
      {/* <SearchHeader /> */}
      {/* <Notification /> */}
      <SellerHeader />
      <ProfileHeader />
    </Container>
  )
}

export default RightHeader