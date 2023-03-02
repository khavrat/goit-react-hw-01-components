import styled from '@emotion/styled';
import { setColorIsOnline } from 'utils/setColorIsOnline';

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 50px;
  padding: 10px 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: rgba(80, 80, 80, 0.01);
`;

export const Status = styled.span`
width: 15px;
height: 15px;
border-radius: 50%;
background-color: ${setColorIsOnline};`;

export const Name = styled.span`
  font-weight: 700;
  font-size: 20px;
  color: rgba(80, 80, 80); 
`;
