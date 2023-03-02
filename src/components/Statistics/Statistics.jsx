import PropTypes from 'prop-types';
import {
  StatisticCard,
  StatisticTitle,
  StatisticList,
  StatisticItem,
  Percentage, Label,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  console.log(title);
  console.log(' data in Statistic', stats);
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
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};

