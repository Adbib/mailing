import { Slot, component$ } from "@builder.io/qwik";

type TableProps = {
  title: string;
  description: string;
  headers: string[];
};

export const Table = component$(
  ({ title, description, headers }: TableProps) => {
    return (
      <div class="mx-auto max-w-screen-xl bg-white p-10 px-4 md:px-8">
        <div class="items-start justify-between md:flex">
          <div class="max-w-lg">
            <h3 class="text-xl font-bold text-gray-800 sm:text-2xl">{title}</h3>
            <p class="mt-2 text-gray-600">{description}</p>
          </div>
          <div class="mt-3 md:mt-0">
            <Slot name="add_new" />
          </div>
        </div>
        <div class="mt-12 overflow-x-auto rounded-lg border shadow-sm">
          <table class="w-full table-auto text-left text-sm">
            <thead class="border-b font-medium text-gray-600">
              <tr>
                {headers.map((item, idx) => (
                  <th key={item + idx} class="px-6 py-3">
                    {item}
                  </th>
                ))}
              </tr>
            </thead>

            <Slot name="content" />
          </table>
        </div>
      </div>
    );
  },
);

//   {
//     tableItems.map((item, idx) => (
//       <tr key={idx} class="odd:bg-gray-50 even:bg-white">
//         <td class="flex items-center gap-x-4 whitespace-nowrap px-6 py-4">
//           <div>
//             <input
//               type="checkbox"
//               id={`checkbox-${idx}`}
//               name={`checkbox-${idx}`}
//               class="checkbox-item peer hidden"
//               checked={checkboxItems[`checkbox${idx}`]}
//               onChange={(e) => handleCheckboxChange(e, idx)}
//             />
//             <label
//               htmlFor={`checkbox-${idx}`}
//               class="relative flex h-5 w-5 cursor-pointer rounded-md border bg-white ring-indigo-600 ring-offset-2 duration-150 after:absolute after:inset-x-0 after:top-[3px] after:m-auto after:h-2.5 after:w-1.5 after:rotate-45 after:border-b-2 after:border-r-2 after:border-white peer-checked:bg-indigo-600 peer-active:ring"
//             ></label>
//           </div>
//           {item.name}
//         </td>
//         <td class="whitespace-nowrap px-6 py-4">{item.email}</td>
//         <td class="whitespace-nowrap px-6 py-4">{item.position}</td>
//         <td class="whitespace-nowrap px-6 py-4">{item.salary}</td>
//         <td class="whitespace-nowrap px-6 text-right">
//           <a
//             href="javascript:void()"
//             class="rounded-lg px-3 py-2 font-medium text-indigo-600 duration-150 hover:bg-gray-50 hover:text-indigo-500"
//           >
//             Edit
//           </a>
//           <button
//             href="javascript:void()"
//             class="rounded-lg px-3 py-2 font-medium leading-none text-red-600 duration-150 hover:bg-gray-50 hover:text-red-500"
//           >
//             Delete
//           </button>
//         </td>
//       </tr>
//     ));
//   }
