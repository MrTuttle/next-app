// Fetch all posts (in /pages/index.tsx)

import { PrismaClient } from "@prisma/client";

export async function getStaticProps() {
  const prisma = new PrismaClient();
  const posts = await prisma.user.findMany();

  return {
    props: { posts },
  }
  // Display list of posts (in /pages/index.tsx)
export default ({posts}) =>
<>
  <ul>
   {posts.map(post => (
     <li key={post.id}>{post.title}</li>
     ))}
  </ul>
     </>
}

};
