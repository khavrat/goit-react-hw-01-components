import styled from '@emotion/styled';
import { randomColor } from '../../utils/randomColor';



export const StatisticCard = styled.section`
  margin: 40px auto;
  padding-top: 20px;
  width: 400px;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: rgba(80, 80, 80, 0.01);
`;

export const StatisticTitle = styled.h2`
margin: 0;
text-align: center;
font-weight: 700;
  font-size: 20px;
  color: rgba(80, 80, 80); ;
`;

export const StatisticList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
  margin: 20px 0 0 0;
`;

export const StatisticItem = styled.li`
  display: inline-block;
  list-style: none;
  margin: 0;
  padding: 5px 0 5px 0;
  width: calc(100% / 5);
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${randomColor};
`;

export const Label = styled.span`
  color: #000000;
  font-size: 12px;
`;
export const Percentage = styled.span`
  color: #000000;
  font-size: 16px;
  font-weight: 700;
`;
