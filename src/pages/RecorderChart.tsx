import RecorderChartTable from '../components/RecorderChartTable';
import { recorderData } from '../data/recorderData';

export default function RecorderChart() {
  return (
    <>
      <p className="chart-source-note">
        German-system soprano recorder. Sounds an octave higher than written.
      </p>
      <RecorderChartTable data={recorderData} />
    </>
  );
}
