// const location = useLocation();
// locationSearch --- location.search

export function setSearchParamsToObj(locationSearch) {
  const search = locationSearch.substring(1);
  return JSON.parse(
    '{"' +
      decodeURI(search)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"')
        .replace(/\[.*?\]/g, "") +
      '"}'
  );
}
