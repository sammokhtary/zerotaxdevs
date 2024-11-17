<template>
	<canvas ref="skillsChart"></canvas>
</template>

<script lang="ts">
	import { defineComponent, onMounted, ref } from "vue";
	import {
		Chart,
		BarController,
		BarElement,
		CategoryScale,
		LinearScale,
	} from "chart.js";
	import ChartDataLabels from "chartjs-plugin-datalabels";
	Chart.register(
		BarController,
		BarElement,
		CategoryScale,
		LinearScale,
		ChartDataLabels
	);

	import { fetchJobData } from "../services/api";

	export default defineComponent({
		name: "SkillsChart",
		setup() {
			const skillsChart = ref<HTMLCanvasElement | null>(null);

			const createChart = (data: any) => {
				if (skillsChart.value) {
					new Chart(skillsChart.value, {
						type: "bar",
						data,
						options: {
							indexAxis: "y",
							responsive: true,
							maintainAspectRatio: false,
							scales: {
								y: {
									beginAtZero: true,
									ticks: {
										autoSkip: false,
										font: {
											size: 10,
										},
									},
								},
								x: {
									beginAtZero: true,
									title: {
										display: true,
										text: "Count",
									},
								},
							},
							plugins: {
								legend: {
									display: false,
								},
								tooltip: {
									enabled: true,
								},
								datalabels: {
									anchor: "end",
									align: "end",
									formatter: (value: number) => value,
								},
							},
						},
					});
				}
			};

			onMounted(async () => {
				const jobData = await fetchJobData();
				const skillsCount: Record<string, number> = {};

				jobData.forEach((job) => {
					if (Array.isArray(job.skills)) {
						job.skills.forEach((skill) => {
							skillsCount[skill] = (skillsCount[skill] || 0) + 1;
						});
					}
				});

				const sortedSkills = Object.entries(skillsCount).sort(
					(a, b) => b[1] - a[1]
				);
				const labels = sortedSkills.map(([skill]) => skill);
				const dataValues = sortedSkills.map(([, count]) => count);

				const chartData = {
					labels: labels,
					datasets: [
						{
							label: "Skills Demand",
							data: dataValues,
							backgroundColor: dataValues.map(
								(_, index) =>
									`rgba(${(index * 30) % 255}, ${(index * 60) % 255}, 235, 0.5)`
							),
						},
					],
				};

				createChart(chartData);
			});

			return {
				skillsChart,
			};
		},
	});
</script>

<style scoped>
	canvas {
		max-width: 100%;
		min-height: 1200px;
	}
</style>
