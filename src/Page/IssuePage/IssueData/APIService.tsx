export const FetchIssue = async (
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

export const AddNewIssue = async (
  owner: string,
  repo: string,
  token: string,
  body: {
    title: string;
    labels: string[];
    body: string;
  }
) => {
  const res = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/issues`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    }
  );
  const data = res.json();
  console.log(data);
};

export const EditIssue = async (
  owner: string,
  repo: string,
  token: string,
  issueNumber: string,
  body: {
    title: string;
    labels: string[];
    body: string;
  }
) => {
  const res = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/issues/${issueNumber}`,
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
