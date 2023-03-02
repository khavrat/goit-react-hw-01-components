import styled from '@emotion/styled';

export const Table = styled.table`
  width: 400px;
  margin: 40px auto;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: rgba(80, 80, 80, 0.01);
`;

export const TableHead = styled.thead`
  text-align: center;
  color: rgba(255, 255, 255, 1);
  background-color: rgba(112, 109, 151, 1);
  height: 40px;
`;

export const TableRow = styled.tr`
  &:nth-of-type(even) {
    background-color: rgba(222, 218, 237, 1);
  }
  &:nth-of-type(odd) {
    background-color: rgba(255, 255, 255, 1);
  }
`;

export const TableCell = styled.td`
  width: calc(100% / 3);
  padding: 10px;
  color: rgba(80, 80, 80, 1);
  font-size: 14px;
`;