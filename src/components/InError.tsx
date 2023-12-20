import { component$ } from "@builder.io/qwik";

export const InError = component$(({ error }: { error: string }) => {
  return (
    <div class="justify-center p-10 text-center align-middle ">
      <h1 class="text-xl font-bold text-red-500">Oops! an error occurred</h1>
      <h1 class="text-xl font-semibold text-black">{error}</h1>
    </div>
  );
});
