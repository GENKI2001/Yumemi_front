// ホームのtemplatesを作成
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import React from 'react';
import CheckboxGrid from '../molecules/checkboxGrid/CheckboxGrid';
import ModeButtons from '../organisms/button/ModeButtons';
import AppHeader from '../organisms/header/AppHeader';
import ModeSection from '../organisms/titleSection/ModeSection';
import PrefecturePopulationSection from '../organisms/titleSection/PrefecturePopulationSection';
import PrefectureSelectSection from '../organisms/titleSection/PrefectureSelectSection';
import './HomeTemplate.css'; // CSSファイルをインポート

const HomeTemplate: React.FC = () => {
  const options = {
    title: { text: '都道府県別の総人口' },
    series: [
      { name: '東京都', data: [10, 20, 30, 40, 50] },
      { name: '鹿児島', data: [4, 2, 7, 8, 13] },
    ],
  };

  return (
    <div className="home-template">
      <AppHeader img_src="yumemi.png" />
      <div className="home-template-content">
        {/* 最初のタイトル部分 */}
        <PrefecturePopulationSection />

        {/* チャート部分 */}
        <section className="home-template-chart-section">
          <HighchartsReact highcharts={Highcharts} options={options} />
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
            options={[
              { label: '東京都', checked: false, onChange: () => {} },
              { label: '東京都', checked: true, onChange: () => {} },
            ]}
          />
        </section>
      </div>
    </div>
  );
};

export default HomeTemplate;
