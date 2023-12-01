<script lang="ts">
	import { browser } from '$app/environment';

	// 1. use data binding to set class "dark" on the body element when the
	//    checkbox is checked
	// 2. create a "toggle switch" ui something like this:
	//    [()  ]   <=>   [  ()]
	// 3. use interaction with the toggle switch to control the checkbox
	// 4. hide the checkbox

	let darkMode = false;
	let bodyElement: HTMLElement | null;

	if (browser) {
		bodyElement = document.body;
	}
	$: if (darkMode) {
		bodyElement?.classList.add('dark');

	} else {
		bodyElement?.classList.remove('dark');
	}
</script>

<label>
	<input type="checkbox" bind:checked={darkMode} />
	Dark mode
	<div class="w-48 bg-blue-900">
	<div id="circle" class="rounded-full bg-cyan-600 w-10 h-10" />
	</div>
</label>
