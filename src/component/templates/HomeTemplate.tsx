// ホームのpagesを作成
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import React from 'react';
import CheckboxGrid from '../molecules/checkboxGrid/CheckboxGrid';
import AppHeader from '../organisms/header/AppHeader';
import ModeSection from '../organisms/titleSection/ModeSection';
import PrefecturePopulationSection from '../organisms/titleSection/PrefecturePopulationSection';
import PrefectureSelectSection from '../organisms/titleSection/PrefectureSelectSection';

const HomeTemplate: React.FC = () => {
  const options = {
    title: { text: '都道府県別の総人口' },
    series: [
      { name: '東京都', data: [10, 20, 30, 40, 50] },
      { name: '鹿児島', data: [4, 2, 7, 8, 13] },
    ],
  };

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <AppHeader img_src="yumemi.png" />
      <div style={{ width: '60%' }}>
        <PrefecturePopulationSection />
        <section>
          <HighchartsReact highcharts={Highcharts} options={options} />
        </section>
        <ModeSection />
        <PrefectureSelectSection />
        <CheckboxGrid
          onChange={() => {}}
          columns={7}
          options={[
            { label: '東京都', checked: false },
            { label: '東京都', checked: true },
          ]}
        />
      </div>
    </div>
  );
};

export default HomeTemplate;
