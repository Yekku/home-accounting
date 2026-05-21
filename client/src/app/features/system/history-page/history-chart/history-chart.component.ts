import { Component, Input } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartData } from 'chart.js';

@Component({
  selector: 'app-history-chart',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './history-chart.component.html',
})
export class HistoryChartComponent {
  @Input() set data(value: { name: string; value: number }[]) {
    this.chartData = {
      labels: value.map((d) => d.name),
      datasets: [{ data: value.map((d) => d.value) }],
    };
  }

  chartData: ChartData<'doughnut'> = { labels: [], datasets: [{ data: [] }] };

  chartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
  };
}
