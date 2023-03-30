export const fetchIssue = async (
  owner: string,
  search: string,
  label: string,
  time: string,
  page: string
) => {
  const res = await fetch(
    `https://api.github.com/search/issues?q=is:issue%20${search}%20in:body+${label}%20user:${owner}&per_page=10&page=${page}&sort=created&direction=${time}`
  );
  const data = await res.json();

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
  await fetch(
    `https://api.github.com/repos/${owner}/${body.repository}/issues`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    }
  );
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
  await fetch(
    `https://api.github.com/repos/${owner}/${body.repository}/issues/${issueNumber}`,
    {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    }
  );
};

export const isPageBottom = (pageRef: React.RefObject<HTMLDivElement>) => {
  const pageHeight = pageRef.current!.scrollHeight;
  const viewportHeight = window.innerHeight;
  const scrollHeight = window.pageYOffset;
  const elementfromTop = pageRef.current!.offsetTop;
  return pageHeight === viewportHeight + scrollHeight - elementfromTop;
};
