// ホームのtemplatesを作成
import React from 'react';
import { PopulationType } from '../../interface/population';
import { PrefectureType } from '../../interface/prefecture';
import CheckboxGrid from '../molecules/checkboxGrid/CheckboxGrid';
import ModeButtons from '../organisms/button/ModeButtons';
import PopulationChart from '../organisms/chart/PopulationChart';
import AppHeader from '../organisms/header/AppHeader';
import ModeSection from '../organisms/titleSection/ModeSection';
import PrefecturePopulationSection from '../organisms/titleSection/PrefecturePopulationSection';
import PrefectureSelectSection from '../organisms/titleSection/PrefectureSelectSection';
import './HomeTemplate.css'; // CSSファイルをインポート

interface HomeTemplateProps {
  prefectures?: PrefectureType[];
  population?: PopulationType[];
}

const HomeTemplate: React.FC<HomeTemplateProps> = (props) => {
  return (
    <div className="home-template">
      <AppHeader img_src="yumemi.png" />
      <div className="home-template-content">
        {/* 最初のタイトル部分 */}
        <PrefecturePopulationSection />

        {/* チャート部分 */}
        <section className="home-template-chart-section">
          <PopulationChart
            title="都道府県別の総人口"
            label={'年少人口'}
            populationData={props.population ?? []}
          />
        </section>

        {/* 表示モード選択部分 */}
        <section className="home-template-mode-section">
          <ModeSection />
          <ModeButtons />
        </section>

        {/* 都道府県選択部分 */}
        <section className="home-template-prefecture-section">
          <PrefectureSelectSection />
          <CheckboxGrid
            columns={7}
            options={(props.prefectures ?? []).map((prefecture) => ({
              label: prefecture.prefName,
              checked: false,
              onChange: () => {},
            }))}
          />
        </section>
      </div>
    </div>
  );
};

export default HomeTemplate;
