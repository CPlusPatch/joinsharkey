<script setup lang="ts">
import VanillaTilt from "vanilla-tilt";

const navigation = [
	{ name: "Gay", href: "#" },
	{ name: "Taxes", href: "#" },
	{ name: "Homosex", href: "#" },
	{ name: "Succubi", href: "#" },
];

onMounted(() => {
	const elements = document.querySelectorAll(".tilt");

	elements.forEach(element => {
		// @ts-ignore
		VanillaTilt.init(element, {
			max: 2,
			speed: 400,
			glare: true,
			"max-glare": 0.4,
		});
	});
});

onUnmounted(() => {
	const elements = document.querySelectorAll(".tilt");

	elements.forEach(element => {
		// @ts-ignore
		element.vanillaTilt.destroy();
	});
});
</script>

<template>
	<div class="bg-white font-inter">
		<header class="absolute inset-x-0 top-0 z-50">
			<nav
				class="flex items-center justify-between p-6 lg:px-8"
				aria-label="Global">
				<div class="flex lg:flex-1">
					<a href="#" class="-m-1.5 p-1.5">
						<span class="sr-only">Sharkey</span>
						<img
							class="h-8 w-auto"
							src="https://avatars.githubusercontent.com/u/138883571?s=200&v=4"
							alt="" />
					</a>
				</div>
				<div class="flex lg:hidden">
					<button
						type="button"
						class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
						<span class="sr-only">Open main menu</span>
						<Bars3Icon class="h-6 w-6" aria-hidden="true" />
					</button>
				</div>
				<div class="hidden lg:flex lg:gap-x-12">
					<a
						v-for="item in navigation"
						:key="item.name"
						:href="item.href"
						class="text-sm font-semibold leading-6 text-gray-900"
						>{{ item.name }}</a
					>
				</div>
				<div class="hidden lg:flex lg:flex-1 lg:justify-end">
					<a
						href="#"
						class="text-sm font-semibold leading-6 text-gray-900"
						>Find Servers</a
					>
				</div>
			</nav>
		</header>

		<div class="relative isolate pt-14">
			<div
				class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
				aria-hidden="true">
				<div
					class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
					style="
						clip-path: polygon(
							74.1% 44.1%,
							100% 61.6%,
							97.5% 26.9%,
							85.5% 0.1%,
							80.7% 2%,
							72.5% 32.5%,
							60.2% 62.4%,
							52.4% 68.1%,
							47.5% 58.3%,
							45.2% 34.5%,
							27.5% 76.7%,
							0.1% 64.9%,
							17.9% 100%,
							27.6% 76.8%,
							76.1% 97.7%,
							74.1% 44.1%
						);
					" />
			</div>
			<div class="py-24 sm:py-32 lg:pb-40">
				<div class="mx-auto max-w-7xl px-6 lg:px-8">
					<div class="mx-auto max-w-2xl text-center">
						<h1
							class="text-4xl font-sharkey pb-4 font-bold tracking-tight text-transparent bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-clip-text sm:text-7xl">
							Sharkey
						</h1>
						<div
							class="px-4 tilt py-3 mt-10 flex flex-col text-base text-gray-800 gap-y-6 max-w-xl mx-auto rounded-md ring-2 ring-gray-700/5 text-left bg-white/40 backdrop-blur-xl">
							<p class="">
								Sharkey is an upstream fork of Misskey that
								promises to deliver an improved feature set and
								UX across the board, with an emphasis on
								providing improved performance over other
								Misskey derivatives.
							</p>
							<p class="">
								Our mission is to cohesive experience taking
								note of our communities feedback to better our
								software.
							</p>
						</div>
						<div
							class="mt-10 flex items-center justify-center gap-x-6">
							<a
								href="#"
								class="rounded-md bg-purple-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
								>Find Servers</a
							>
						</div>
					</div>
					<div class="mt-16 flow-root sm:mt-24">
						<div
							class="-m-2 rounded-xl bg-gray-900/5 tilt p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
							<img
								src="https://joinsharkey.org/assets/hero.png"
								alt="App screenshot"
								width="2432"
								height="1442"
								class="rounded-md shadow-2xl ring-1 ring-gray-900/10" />
						</div>
					</div>
				</div>
			</div>
			<div
				class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
				aria-hidden="true">
				<div
					class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
					style="
						clip-path: polygon(
							74.1% 44.1%,
							100% 61.6%,
							97.5% 26.9%,
							85.5% 0.1%,
							80.7% 2%,
							72.5% 32.5%,
							60.2% 62.4%,
							52.4% 68.1%,
							47.5% 58.3%,
							45.2% 34.5%,
							27.5% 76.7%,
							0.1% 64.9%,
							17.9% 100%,
							27.6% 76.8%,
							76.1% 97.7%,
							74.1% 44.1%
						);
					" />
			</div>
		</div>
	</div>
</template>
