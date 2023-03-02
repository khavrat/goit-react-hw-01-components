import { Profile } from '../Profile/Profile';
import { Statistics } from '../Statistics/Statistics';
import user from 'user.json';
import data from 'data.json';

export const App = () => {
  return (
    <>
      <Profile {...user} />
      <Statistics title="Upload stats" stats={data} />
    </>
  );
};
