// ホームのtemplatesを作成
import React from 'react';
import { PopulationType } from '../../interface/population';
import { PrefectureType } from '../../interface/prefecture';
import ModeButtons from '../organisms/button/ModeButtons';
import PopulationChart from '../organisms/chart/PopulationChart';
import PrefecturesCheckboxGrid from '../organisms/checkboxGrid/PrefecturesCheckboxGrid';
import AppHeader from '../organisms/header/AppHeader';
import ModeSection from '../organisms/titleSection/ModeSection';
import PrefecturePopulationSection from '../organisms/titleSection/PrefecturePopulationSection';
import PrefectureSelectSection from '../organisms/titleSection/PrefectureSelectSection';
import './HomeTemplate.css';

interface HomeTemplateProps {
  selectedPrefectures: PrefectureType[];
  prefectures: PrefectureType[];
  population: PopulationType[];
}

const HomeTemplate: React.FC<HomeTemplateProps> = (props) => {
  return (
    <div className="home-template">
      {/* ヘッダー部分 */}
      <AppHeader img_src="yumemi.png" />

      {/* コンテンツ部分 */}
      <div className="home-template-content">
        {/* 最初のタイトル */}
        <PrefecturePopulationSection />

        {/* グラフチャート */}
        <section className="home-template-chart-section">
          <PopulationChart
            title="都道府県別の総人口"
            label={'年少人口'}
            populationData={props.population ?? []}
          />
        </section>

        {/* 表示モード選択 */}
        <section className="home-template-mode-section">
          <ModeSection />
          <ModeButtons />
        </section>

        {/* 都道府県チェックボックス */}
        <section className="home-template-prefecture-section">
          <PrefectureSelectSection />
          <PrefecturesCheckboxGrid
            columns={6}
            selectedPrefectures={props.selectedPrefectures}
            prefectures={props.prefectures}
            onChange={() => {}}
          />
        </section>
      </div>
    </div>
  );
};

export default HomeTemplate;
