<script>
import { getTotalIssuance } from '../stores/kusama-api.js';

</script>

<form class="w-full max-w-lg m-8">
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs
      font-bold mb-2" for="grid-yes-now">
        Current Yes Votes
      </label> <input class="appearance-none block w-full bg-gray-200
      text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight
      focus:outline-none focus:bg-white" id="grid-yes-now" type="number">
    </div> <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs
      font-bold mb-2" for="grid-no-now">
        Current No Votes
      </label> <input class="appearance-none block w-full bg-gray-200
      text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight
      focus:outline-none focus:bg-white focus:border-gray-500"
      id="grid-no-now" type="number">
    </div>

  </div> 
</form>

<ul>
  <li>{$getTotalIssuance}</li>
</ul>