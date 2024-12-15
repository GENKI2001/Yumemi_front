// ホームのpagesを作成
import React from 'react';
import { useGetPopulation } from '../../services/api/population/useGetPopulation';
import { useGetPrefectures } from '../../services/api/prefecture/useGetPrefecture';
import HomeTemplate from '../templates/HomeTemplate';

const HomePage: React.FC = () => {
  const { data: prefectures } = useGetPrefectures();
  const { data: population } = useGetPopulation([
    { prefCode: 1, prefName: '北海道' },
    { prefCode: 12, prefName: '千葉県' },
  ]);
  console.log(population);
  return <HomeTemplate prefectures={prefectures} population={population} />;
};

export default HomePage;
