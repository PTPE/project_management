export const fetchIssue = async (
  owner: string,
  search: string,
  label: string,
  time: string,
  dataNum: string
) => {
  const res = await fetch(
    `https://api.github.com/search/issues?q=is:issue%20${search}%20in:body+${label}%20user:${owner}&per_page=${dataNum}&page=1&sort=created&direction=${time}`
  );
  const data = await res.json();
  console.log(
    `https://api.github.com/search/issues?q=is:issue%20${search}%20in:body+${label}%20user:${owner}&per_page=${dataNum}&page=1&sort=created&direction=${time}`
  );

  console.log(data);

  return data;
};

export const addNewIssue = async (
  owner: string,
  token: string,
  body: {
    title: string;
    labels: string[];
    body: string;
    repository: string;
  }
) => {
  const res = await fetch(
    `https://api.github.com/repos/${owner}/${body.repository}/issues`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    }
  );
  const data = await res.json();
  console.log(
    `https://api.github.com/repos/${owner}/${body.repository}/issues`
  );
  console.log(body);

  console.log(data);
};

export const editIssue = async (
  owner: string,
  token: string,
  issueNumber: string,
  body: {
    title: string;
    repository: string;
    labels: Array<string>;
    body: string;
  }
) => {
  const res = await fetch(
    `https://api.github.com/repos/${owner}/${body.repository}/issues/${issueNumber}`,
    {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    }
  );
  const data = await res.json();
  console.log(data);
};

export const isPageBottom = (pageRef: React.RefObject<HTMLInputElement>) => {
  const pageHeight = pageRef.current!.scrollHeight;
  const viewportHeight = window.innerHeight;
  const scrollHeight = window.pageYOffset;
  const elementfromTop = pageRef.current!.offsetTop;
  return pageHeight === viewportHeight + scrollHeight - elementfromTop;
};
