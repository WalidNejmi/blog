
import { getSortedPostsData } from "@/lib/posts";
import ListItem from "./ListItem";
import { Autocomplete } from "@mantine/core";

export default function Posts() {
  const posts = getSortedPostsData();

  return (
    <section className="mt-6 mx-auto max-w-2xl">
      <div className="flex justify-between gap-5">
        <h2 className="text-4xl font-bold">Blog</h2>
        <Autocomplete
          data={posts.map((post) => post.title)}
          placeholder="Search posts"
          styles={{
            input: {
              backgroundColor: "#f8f8f8",
            },
          }}
        />
      </div>
      <ul className="w-full">
        {posts.map((post) => (
          <ListItem key={post.id} post={post} />
        ))}
      </ul>
    </section>
  );
}
