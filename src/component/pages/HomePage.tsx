// ホームのpagesを作成
import React from 'react';
import { useGetPrefectures } from '../../services/api/prefecture/useGetPrefecture';
import HomeTemplate from '../templates/HomeTemplate';

const HomePage: React.FC = () => {
  const { data: prefectures } = useGetPrefectures();
  return <HomeTemplate prefectures={prefectures} />;
};

export default HomePage;
