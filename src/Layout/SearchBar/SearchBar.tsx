import { SearchBarItem } from "./SearchBarItems/SearchBarItem";

type SearchProps = {
  onPassSearchHandler: Function;
};

export const SearchBar = (props: SearchProps) => {
  return <SearchBarItem onPassSearchHandler={props.onPassSearchHandler} />;
};
