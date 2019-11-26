const data = async url => {
  return (await fetch(url)).headers.get('content-length');
};
export default data;
