"use client";

import { useQueries } from "@tanstack/react-query";

function fetchPost(id: number) {
  const posts: String[] = [
    "POST-01 by Ariful Islam Shanto",
    "POST-02 by Ariful Islam Shanto",
    "POST-03 by Ariful Islam Shanto",
    "POST-04 by Ariful Islam Shanto",
    "POST-05 by Ariful Islam Shanto",
    "POST-06 by Ariful Islam Shanto",
    "POST-07 by Ariful Islam Shanto",
  ];
  return posts[id - 1];
}

export function Posts() {
  const ids = [1, 2, 3, 4, 5, 6, 7];
  const results = useQueries({
    queries: ids.map((id) => ({
      queryKey: ["post", id],
      queryFn: () => fetchPost(id),
      staleTime: Infinity,
    })),
    combine: (results) => {
      return {
        data: results.map((result) => result.data),
        pending: results.some((result) => result.isPending),
      };
    },
  });
  const postData = results.data;
  // console.log(postData);

  return (
    <div className="flex flex-col text-center p-10 border-solid border-red-300 border-4">
      {postData.map((pd) => (
        <div
          className="py-5 border-solid border-yellow-300 border-4 px-5"
          key={null}
        >
          <p className="border-solid border-green-300 border-4 py-5 cursor-pointer hover:bg-slate-900">
            {" "}
            {pd}{" "}
          </p>
        </div>
      ))}
    </div>
  );
}
