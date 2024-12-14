// 人口データの型を定義
type PopulationData = {
  year: number;
  value: number;
  ratio?: number;
};

type PopulationTitle = {
  label: string;
  data: PopulationData[];
};

export type PopulationType = {
  boundaryYear: number;
  data: PopulationTitle[];
};
