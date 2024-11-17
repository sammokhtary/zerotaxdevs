<template>
	<div id="app" class="min-h-screen flex flex-col bg-white">
		<main class="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
			<h1 class="text-4xl font-bold text-gray-900 mb-6">Zero Tax Devs</h1>

			<h2 class="font-semibold">About Me</h2>
			<p class="text-lg text-gray-700 mb-4">
				Welcome to Zero Tax Devs!
				<a
					class="underline text-indigo-600"
					href="https://www.linkedin.com/in/sam-mokhtary/"
					>Sam Mokhtary</a
				>
				here, I run
				<a class="text-indigo-600 underline" href="https://zerotaxjobs.com"
					>Zero Tax Jobs; a job site for software engineers seeking work in
					Dubai, United Arab Emirates and Saudi Arabia.</a
				>
			</p>
			<h2 class="font-semibold">About This Project</h2>
			<p class="text-lg text-gray-700 mb-4">
				Zero Tax Devs is a project to visualize trends in the software developer
				job data posted on my
				<a href="https://zerotaxjobs.com" class="text-indigo-600 underline"
					>Zero Tax Jobs</a
				>
				site. The data is currently restricted to last month's data and
				currently focuses on the most requested skills on job listings in the
				region, but I'll be adding new analyses in the future.
			</p>
			<h2 class="font-semibold">Support This Project</h2>
			<p class="text-lg text-gray-700 mb-6">
				This is a work in progress, and I'll add more data if I have time. I do
				this for free in my spare time. If you'd like to support my work, feel
				free to
				<a
					href="https://www.buymeacoffee.com/zerotaxjobs"
					class="text-indigo-600 underline"
					>buy me a coffee</a
				>!
			</p>
			<p class="text-lg text-gray-700 mb-4">
				You are also welcome to contribute to my
				<a
					href="https://github.com/sammokhtary/zerotaxdevs"
					class="text-indigo-600 underline"
					>public GitHub repository</a
				>. You can suggest changes, report issues, or leave a 👍 on something
				you support.
			</p>

			<h2 class="font-semibold">Using The Data</h2>
			<p class="text-lg text-gray-700 mb-4">
				You're welcome to use the data as long as you give attribution in the
				form of written credit to Zero Tax Jobs with a do-follow backlink
				pointing to "https://zerotaxjobs.com" alongside the data.
			</p>

			<section class="my-10">
				<h2 class="text-2xl font-semibold text-gray-800 mb-4">
					Skills Demand Over the Last Month
				</h2>
				<div class="bg-white shadow rounded-lg p-6">
					<SkillsChart />
				</div>
			</section>

			<!-- TODO: Add more charts here in the future -->
		</main>

		<footer class="bg-gray-100">
			<div
				class="container mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center text-gray-600"
			>
				<p>
					&copy; {{ new Date().getFullYear() }} Zero Tax Devs. All rights
					reserved.
				</p>
			</div>
		</footer>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from "vue";
	import SkillsChart from "./components/SkillsChart.vue";

	export default defineComponent({
		name: "App",
		components: {
			SkillsChart,
		},
	});
</script>

