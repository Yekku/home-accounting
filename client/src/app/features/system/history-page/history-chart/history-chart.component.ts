import { Component, Input } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-history-chart',
  standalone: true,
  imports: [NgxChartsModule],
  templateUrl: './history-chart.component.html',
})
export class HistoryChartComponent {
  @Input() data: { name: string; value: number }[] = [];
}
