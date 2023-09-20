"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

import { chartColors } from "@/components/charts/chartjs-config";

import "@/components/charts/chartjs-config";

import {
  BarController,
  BarElement,
  Chart,
  Legend,
  LinearScale,
  TimeScale,
  Tooltip,
} from "chart.js";
import type { ChartData } from "chart.js";

import "chartjs-adapter-moment";

import { formatValue, tailwindConfig } from "@/components/utils/utils";

Chart.register(
  BarController,
  BarElement,
  LinearScale,
  TimeScale,
  Tooltip,
  Legend
);

export default function Revenue() {
  const chartData = {
    labels: [
      "07-01-2023",
      "08-01-2023",
      "09-01-2023",
      "10-01-2023",
      "11-01-2023",
      "12-01-2023",
    ],
    datasets: [
      {
        label: "Projected",
        data: [220_000, 200_000, 420_000, 350_000, 200_000, 360_000],
        backgroundColor: tailwindConfig.theme.colors.blue[500],
        hoverBackgroundColor: tailwindConfig.theme.colors.blue[600],
        barPercentage: 0.66,
        categoryPercentage: 0.66,
      },
      {
        label: "Collected",
        data: [200_000, 220_000, 150_000, 0, 0, 0],
        backgroundColor: tailwindConfig.theme.colors.slate[300],
        hoverBackgroundColor: tailwindConfig.theme.colors.slate[400],
        barPercentage: 0.66,
        categoryPercentage: 0.66,
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">
          Cash Flow
        </h2>
      </header>
      <Graph data={chartData} width={695} height={298} />
    </div>
  );
}

interface Props {
  data: ChartData;
  width: number;
  height: number;
}

function Graph({ data, width, height }: Props) {
  const [chart, setChart] = useState<Chart | null>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const legend = useRef<HTMLUListElement>(null);
  const { theme } = useTheme();
  const darkMode = theme === "dark";
  const {
    textColor,
    gridColor,
    tooltipBodyColor,
    tooltipBgColor,
    tooltipBorderColor,
  } = chartColors;

  useEffect(() => {
    const ctx = canvas.current;
    if (!ctx) return;

    const newChart = new Chart(ctx, {
      type: "bar",
      data: data,
      options: {
        layout: {
          padding: {
            top: 12,
            bottom: 16,
            left: 20,
            right: 20,
          },
        },
        scales: {
          y: {
            border: {
              display: false,
            },
            ticks: {
              maxTicksLimit: 8,
              callback: (value) => formatValue(+value),
              color: darkMode ? textColor.dark : textColor.light,
            },
            grid: {
              color: darkMode ? gridColor.dark : gridColor.light,
            },
          },
          x: {
            type: "time",
            time: {
              parser: "MM-DD-YYYY",
              unit: "month",
              displayFormats: {
                month: "MMM YY",
              },
            },
            border: {
              display: false,
            },
            grid: {
              display: false,
            },
            ticks: {
              color: darkMode ? textColor.dark : textColor.light,
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              title: () => "", // Disable tooltip title
              label: (context) => formatValue(context.parsed.y),
            },
            bodyColor: darkMode
              ? tooltipBodyColor.dark
              : tooltipBodyColor.light,
            backgroundColor: darkMode
              ? tooltipBgColor.dark
              : tooltipBgColor.light,
            borderColor: darkMode
              ? tooltipBorderColor.dark
              : tooltipBorderColor.light,
          },
        },
        interaction: {
          intersect: false,
          mode: "nearest",
        },
        animation: {
          duration: 500,
        },
        maintainAspectRatio: false,
        resizeDelay: 200,
      },
      plugins: [
        {
          id: "htmlLegend",
          afterUpdate(c, args, options) {
            const ul = legend.current;
            if (!ul) return;
            // Remove old legend items
            while (ul.firstChild) {
              ul.firstChild.remove();
            }
            // Reuse the built-in legendItems generator
            const items =
              c.options.plugins?.legend?.labels?.generateLabels?.(c);
            items?.forEach((item) => {
              const li = document.createElement("li");
              li.style.marginRight = tailwindConfig.theme.margin[4];
              // Button element
              const button = document.createElement("button");
              button.style.display = "inline-flex";
              button.style.alignItems = "center";
              button.style.opacity = item.hidden ? ".3" : "";
              button.onclick = () => {
                c.setDatasetVisibility(
                  item.datasetIndex!,
                  !c.isDatasetVisible(item.datasetIndex!)
                );
                c.update();
              };
              // Color box
              const box = document.createElement("span");
              box.style.display = "block";
              box.style.width = tailwindConfig.theme.width[3];
              box.style.height = tailwindConfig.theme.height[3];
              box.style.borderRadius = tailwindConfig.theme.borderRadius.full;
              box.style.marginRight = tailwindConfig.theme.margin[2];
              box.style.borderWidth = "3px";
              box.style.borderColor = item.fillStyle as string;
              box.style.pointerEvents = "none";
              // Label
              const label = document.createElement("span");
              label.classList.add("text-slate-500", "dark:text-slate-400");
              label.style.fontSize = tailwindConfig.theme.fontSize.sm[1];
              label.style.lineHeight =
                tailwindConfig.theme.fontSize.sm[1].lineHeight;
              const labelText = document.createTextNode(item.text);
              label.appendChild(labelText);
              li.appendChild(button);
              button.appendChild(box);
              button.appendChild(label);
              ul.appendChild(li);
            });
          },
        },
      ],
    });
    setChart(newChart);
    return () => newChart.destroy();
  }, []);

  useEffect(() => {
    if (!chart) return;

    if (darkMode) {
      chart.options.scales!.x!.ticks!.color = textColor.dark;
      chart.options.scales!.y!.ticks!.color = textColor.dark;
      chart.options.scales!.y!.grid!.color = gridColor.dark;
      chart.options.plugins!.tooltip!.bodyColor = tooltipBodyColor.dark;
      chart.options.plugins!.tooltip!.backgroundColor = tooltipBgColor.dark;
      chart.options.plugins!.tooltip!.borderColor = tooltipBorderColor.dark;
    } else {
      chart.options.scales!.x!.ticks!.color = textColor.light;
      chart.options.scales!.y!.ticks!.color = textColor.light;
      chart.options.scales!.y!.grid!.color = gridColor.light;
      chart.options.plugins!.tooltip!.bodyColor = tooltipBodyColor.light;
      chart.options.plugins!.tooltip!.backgroundColor = tooltipBgColor.light;
      chart.options.plugins!.tooltip!.borderColor = tooltipBorderColor.light;
    }
    chart.update("none");
  }, [theme]);

  return (
    <>
      <div className="px-5 py-3">
        <div className="flex flex-wrap justify-between items-center">
          {/*<div className="flex items-center">*/}
          {/*  <div className="text-3xl font-bold text-slate-800 dark:text-slate-100 mr-2">$1,347.09</div>*/}
          {/*  <div className="text-sm text-slate-500 dark:text-slate-400">Net</div>*/}
          {/*</div>*/}
          <div className="grow ml-2">
            <ul ref={legend} className="flex flex-wrap justify-end"></ul>
          </div>
        </div>
      </div>
      <div className="grow">
        <canvas ref={canvas} width={width} height={height}></canvas>
      </div>
    </>
  );
}
