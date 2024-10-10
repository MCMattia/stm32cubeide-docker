// deno run --allow-net --allow-write fetchInstaller.ts

const url =
  "https://www.st.com/content/ccc/resource/technical/software/sw_development_suite/group1/16/f0/7b/d1/a5/6d/42/66/stm32cubeide-lnx/files/st-stm32cubeide_1.16.1_22882_20240916_0822_amd64.sh.zip/jcr:content/translations/en.st-stm32cubeide_1.16.1_22882_20240916_0822_amd64.sh.zip";
const filename =
  "./en.st-stm32cubeide_1.16.1_22882_20240916_0822_amd64.sh.zip";

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
