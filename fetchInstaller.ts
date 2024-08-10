// deno run --allow-net --allow-write fetchInstaller.ts

const url =
  "https://www.st.com/content/ccc/resource/technical/software/sw_development_suite/group1/f0/75/4c/32/97/a0/4d/48/stm32cubeide-deb/files/st-stm32cubeide_1.16.0_21983_20240628_1741_amd64.deb_bundle.sh.zip/jcr:content/translations/en.st-stm32cubeide_1.16.0_21983_20240628_1741_amd64.deb_bundle.sh.zip";
const filename =
  "./en.st-stm32cubeide_1.16.0_21983_20240628_1741_amd64.deb_bundle.sh.zip";

async function download(url: string, filename: string) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
  }

  const file = await Deno.open(filename, { write: true, create: true });

  if (response.body) {
    await response.body.pipeTo(file.writable);
  }

  console.log("Download completed!");
}

download(url, filename).catch((error) => {
  console.error("Error downloading file:", error.message);
});
