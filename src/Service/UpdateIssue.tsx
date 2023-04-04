export const fetchIssue = async (
  owner: string,
  search: string,
  label: string,
  time: string,
  page: string
) => {
  try {
    const res = await fetch(
      `https://api.github.com/search/issues?q=is:issue%20${search}%20in:body+${label}%20user:${owner}&per_page=10&page=${page}&sort=created&order=${time}`
    );
    const data = await res.json();
    if (!res.ok) throw new Error(`${data.message}`);

    return data;
  } catch (err) {
    alert(err);
  }
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
  try {
    const pageReload = () => {
      return new Promise((resolve, reject) => {
        window.location.reload();
      });
    };
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
    await pageReload();

    if (!res.ok) throw new Error(data.message);
  } catch (err) {
    alert(err);
  }
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
  try {
    const pageReload = () => {
      return new Promise((resolve, reject) => {
        window.location.reload();
      });
    };
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
    await pageReload();

    if (!res.ok) throw new Error(data.message);
  } catch (err) {
    alert(err);
  }
};
