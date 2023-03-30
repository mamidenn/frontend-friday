<script lang="ts">
	import qrCode from './qr-github-com.svg';
	const link = 'https://github.com/mamidenn/frontend-friday';
</script>

<div class="w-min overflow-hidden rounded-xl border border-black/10 bg-white shadow-lg">
	<div class="bg-bullan bg-cover p-10">
		<div class="w-64 overflow-hidden rounded-xl border border-black/10 shadow-lg">
			<a href={link}>
				<img src={qrCode} alt={link} />
			</a>
		</div>
	</div>
	<div class="p-6 text-center">
		<h2 class="pb-3 text-xl font-bold text-dark-teal">Welcome to Frontend Fridays</h2>
		<p class="pb-3 font-light">
			"I like annoying my peers with stupid frontend topics. That's why I created
			<span class="font-default">Frontend Friday</span>."
		</p>
		<p class="pb-3 font-light">Martin, REL DP INST</p>
		<button
			class="rounded-sm border border-black/10 bg-dark-teal p-3 px-8 font-default text-white shadow-md"
		>
			Learn more
		</button>
	</div>
</div>
