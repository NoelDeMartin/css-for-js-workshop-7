import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <DesktopLogoWrapper>
            <Logo />
          </DesktopLogoWrapper>
          <ActionGroup>
            <DesktopAction>
                <SubscribeButton>
                    Subscribe
                </SubscribeButton>
                <SubscriberLink href="/">
                    Already a subscriber?
                </SubscriberLink>
            </DesktopAction>
            <MobileAction>
              <User size={24} />
            </MobileAction>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <MobileLogoWrapper>
          <Logo />
        </MobileLogoWrapper>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media${QUERIES.laptopAndUp} {
    background: revert;
    color: var(--color-gray-900);
    margin-top: 16px;
    margin-bottom: 74px;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const MobileLogoWrapper = styled.div`
  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const DesktopLogoWrapper = styled.div`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    display: revert;
    font-size: 4rem;
  }
`;

const MobileAction = styled.button`
  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const DesktopAction = styled.div`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    gap: 8px;
  }
`;

const SubscribeButton = styled(Button)`
    padding-top: 10px;
    padding-bottom: 6px;
`;

const SubscriberLink = styled.a`
  color: var(--color-gray-900);
  text-decoration: underline;
  font-style: italic;
  font-weight: var(--font-weight-normal);
  font-family: var(--font-family-serif);
  font-size: 0.875rem;
`;

export default Header;
