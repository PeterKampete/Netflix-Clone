import React from "react";
import { Feature, OptForm } from "../components";
import { HeaderContainer } from "../containers/header";
import { FaqsContainer } from "../containers/faqs";
import { FooterContainer } from "../containers/footer";
import { JumbotronContainer } from "../containers/Jumbotron";
import * as ROUTES from "../constants/routes"

const Home = () => {
  return (
    <>
      <HeaderContainer path={ROUTES.SIGN_IN}>
        <Feature>
          <Feature.Title>Unlimited Action, TV shows and more ...</Feature.Title>
          <Feature.SubTitle>Watch anywhere. Cancel at anytime</Feature.SubTitle>
          <OptForm>
            <OptForm.Input placeholder="Email address" />
            <OptForm.Button>Try it now</OptForm.Button>
            <OptForm.Break />
            <OptForm.Text>
              Ready to watch! Enter your email to create or restart your
              membership
            </OptForm.Text>
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
};

export default Home;
