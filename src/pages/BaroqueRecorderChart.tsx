import RecorderChartTable from '../components/RecorderChartTable';
import { baroqueRecorderData } from '../data/baroqueRecorderData';

export default function BaroqueRecorderChart() {
  return (
    <>
      <p className="chart-source-note">
        Baroque-system soprano recorder. Sounds an octave higher than written.
      </p>
      <RecorderChartTable data={baroqueRecorderData} />
    </>
  );
}
