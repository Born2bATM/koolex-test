export function getList() {
  return fetch("https://api-global-service.koolexgroup.com/getprovince")
    .then((resp) => resp.json())
    .then((data) => data.result.data);
}
