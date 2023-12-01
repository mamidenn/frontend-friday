<script lang="ts">
	// 1. use data binding to set class "dark" on the body element when the
	//    checkbox is checked
	// 2. create a "toggle switch" ui something like this:
	//    [()  ]   <=>   [  ()]
	// 3. use interaction with the toggle switch to control the checkbox
	// 4. hide the checkbox

	let darkMode = false;
</script>

<label>
	<input type="checkbox" bind:checked={darkMode} />
	Dark mode
	{darkMode}
</label>
