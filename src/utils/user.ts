import { User } from "screens/project-list/search-panel";
import { useHttp } from "utils/http";
import { useAsync } from "hooks/useAsync";
import { useEffect } from "react";
import { cleanObject } from "utils/index";

export const useUsers = (param?: Partial<User>) => {
  const client = useHttp();
  const { run, ...rest } = useAsync<User[]>();
  useEffect(() => {
    run(client("users", { data: cleanObject(param || {}) }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [param]);
  return rest;
};
