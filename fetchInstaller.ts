// deno run --allow-net --allow-write fetchInstaller.ts

const url =
  "https://www.st.com/content/ccc/resource/technical/software/sw_development_suite/group1/b7/a2/7e/c7/90/9b/4a/f7/stm32cubeide-deb/files/st-stm32cubeide_1.17.0_23558_20241125_2245_amd64.deb_bundle.sh.zip/jcr:content/translations/en.st-stm32cubeide_1.17.0_23558_20241125_2245_amd64.deb_bundle.sh.zip";
const filename =
  "./en.st-stm32cubeide_1.17.0_23558_20241125_2245_amd64.deb_bundle.sh.zip";

async function download(url: string, filename: string) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
  }

  const file = await Deno.open(filename, { write: true, create: true });

  if (response.body) {
    await response.body.pipeTo(file.writable);
  }

  console.log("Download completed");
}

download(url, filename).catch((error) => {
  console.error("Error downloading file:", error.message);
});
