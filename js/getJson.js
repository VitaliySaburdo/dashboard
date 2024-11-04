export default async function getJson(url) {
  const data = await fetch(url);
  const json = await data.json();
  return json;
}
