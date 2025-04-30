import React from 'react';
import TradeForm from './components/TradeForm';
import TradeTable from './components/TradeTable';
import StatsPanel from './components/StatsPanel';

export default function App() {
  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Дневник трейдера</h1>
      <TradeForm />
      <TradeTable />
      <StatsPanel />
    </div>
  );
}