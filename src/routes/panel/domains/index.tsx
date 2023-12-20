import { component$, noSerialize } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { type TDomain } from "mailgun.js/Types";
import { InError } from "~/components/InError";
import { Table } from "~/components/panel/Table";
import { getAllDomains } from "~/utils/domains.server";

export const useGetDomains = routeLoader$(async () => {
  console.log("loader");
  const domains = noSerialize(await getAllDomains(""));
  //   console.log("server-domains", domains);
  return domains; //{ error: true, message: "error" }; //
});

export default component$(() => {
  const domains = useGetDomains();
  console.info("domains", domains.value);
  if (domains.value && "error" in domains.value)
    return <InError error={domains.value.message} />;

  const headers = ["Domain", "Status", "Created At", ""];

  return (
    <div>
      <Table headers={headers} title="Domains" description="all domains">
        <AddNewDomain q:slot="add_new" />
        <TbodyDomains q:slot="content" domains={domains.value as TDomain[]} />
      </Table>
    </div>
  );
});

const AddNewDomain = component$(() => {
  return (
    <a
      q:slot="add_new"
      href="#"
      class="inline-block rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white duration-150 hover:bg-indigo-500 active:bg-indigo-700 md:text-sm"
    >
      <h1>Add Domainsss</h1>
    </a>
  );
});

const TbodyDomains = component$(({ domains }: { domains: TDomain[] }) => {
  return (
    <tbody class="divide-y text-gray-600">
      {domains?.map((domain, i) => (
        <tr key={i} class="odd:bg-gray-50 even:bg-white">
          <td class="whitespace-nowrap px-6 py-4">{domain.name}</td>
          <td class="whitespace-nowrap py-4 pr-6">
            <span
              class={`rounded-full px-3 py-2 text-xs font-semibold ${
                domain.state == "active"
                  ? "bg-green-50 text-green-600"
                  : "bg-blue-50 text-blue-600"
              }`}
            >
              {domain.state}
            </span>
          </td>
          <td class="whitespace-nowrap px-6">
            {domain.created_at.substring(0, 17)}
          </td>
          <td class="whitespace-nowrap px-6 text-right">
            <a
              href="#"
              class="rounded-lg px-3 py-2 font-medium text-indigo-600 duration-150 hover:bg-gray-50 hover:text-indigo-500"
            >
              Edit
            </a>
            <button class="rounded-lg px-3 py-2 font-medium leading-none text-red-600 duration-150 hover:bg-gray-50 hover:text-red-500">
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
});
