import { createContext, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom'; // 追加
import HomePage from './component/pages/HomePage';

// 簡易的な状態管理をContext用いて行う
interface ContextType {
  info: string;
}

// Contextの初期値を設定する
export const YumemiContext = createContext<ContextType>({
  info: '',
});

// ルーターによりURLで分岐
function App() {
  return (
    <YumemiContext.Provider value={{ info: '' }}>
      {/* lazyローディングで実装 */}
      <Suspense fallback={<div>Loading...</div>}>
        {/* ルーティング */}
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Suspense>
    </YumemiContext.Provider>
  );
}

export default App;
