import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  margin: 20px auto;
  width: 250px;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: rgba(80, 80, 80, 0.01);
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
`;

export const Avatar = styled.img`
  display: block;
  alighn-items: center;
  border-radius: 50%;
  outline: 1px solid rgba(80, 80, 80, 0.3); 
`;

export const Name = styled.p`
margin: 20px 0 0 0;
font-weight: 700;
font-size: 20px;
color: #000000;
`;

export const Tag = styled.p`
  margin: 20px 0 0 0;
  font-size: 16px;
  color: rgba(80, 80, 80);
`;

export const Location = styled.p`
  margin: 20px 0 0 0;
  font-size: 16px;
  color: rgba(80, 80, 80);
`;

export const Stats = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
`;

export const StatsItem = styled.li`
  list-style: none;
  padding: 16px;
  margin: 0;
  width: calc(100% / 3);
  display: flex;
  align-items: center;
  flex-content: center;
  flex-direction: column;
  background-color: rgba(80, 80, 80, 0.1);
  border-top: 1px solid rgba(80, 80, 80, 0.3);
  &:not(:nth-of-type(3n)) {
    border-right: 1px solid rgba(80, 80, 80, 0.3);
  }
`;

export const Label = styled.span`
color: #505050;
font-size: 12px;
`;

export const Quantity = styled.span`
color: #000000;
font-size: 16px;
font-weight: 700;`