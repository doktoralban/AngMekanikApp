import { Component, OnInit } from "@angular/core";
import { ChartOptions, ChartType, ChartDataset } from "chart.js";
import { Label } from "ng2-charts";

@Component({
  selector: "app-bar-chart",
  templateUrl: "./bar-chart.component.html",
  styleUrls: ["./bar-chart.component.css"]
})
export class BarChartComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ["2015", "2016", "2017", "2018", "2019", "2020"];
  public barChartType: ChartType = "bar";
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataset[] = [
    { data: [65, 67, 70, 75, 80, 90], label: "PHP" },
    { data: [50, 48, 47, 49, 44, 40], label: ".Net" },
    { data: [40, 30, 28, 25, 22, 20], label: "Java" },
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
