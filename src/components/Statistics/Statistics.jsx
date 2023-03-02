import PropTypes from 'prop-types';
import {
  StatisticCard,
  StatisticTitle,
  StatisticList,
  StatisticItem,
  Percentage, Label,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  // console.log(title);
  return (
    <StatisticCard>
      {title && <StatisticTitle>{title}</StatisticTitle>}

      <StatisticList>
        {stats.map(stat => (
          <StatisticItem key={stat.id}>
            <Label>{stat.label}</Label>
            <Percentage>{stat.percentage}%</Percentage>
          </StatisticItem>
        ))}
      </StatisticList>
    </StatisticCard>
  );
};


Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

