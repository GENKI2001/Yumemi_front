// ホームのpagesを作成
import React from 'react';
import { useGetPopulation } from '../../services/api/population/useGetPopulation';
import { useGetPrefectures } from '../../services/api/prefecture/useGetPrefecture';
import HomeTemplate from '../templates/HomeTemplate';

const HomePage: React.FC = () => {
  const { data: prefectures } = useGetPrefectures();
  const { data: population } = useGetPopulation([1, 12]);
  return <HomeTemplate prefectures={prefectures} population={population} />;
};

export default HomePage;
