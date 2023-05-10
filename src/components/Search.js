import { Divider, Input } from 'antd';

// Iteration 5
function Search({onSearch}) {

  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input type="text" onChange={(e) => {onSearch(e)}} />
    </>
  );
}

export default Search;