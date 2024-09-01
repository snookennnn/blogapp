/**
 * @typedef {import('mongodb').Document} Post
 * @typedef {import('mongodb').WithId<Post>} PostWithId
 * @typedef {import('next').NextApiRequest} NextApiRequest
 * @typedef {import('next').NextApiResponse} NextApiResponse
 */

/**
 * @type {import('next').NextApiHandler<PostWithId[]>}
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<PostWithId[]>
) {
  const { db } = await connectToDatabase();

  if (req.method === 'GET') {
    const posts = await db.collection<Post>('posts').find().toArray();
    res.status(200).json(posts);
  } else if (req.method === 'POST') {
    const newPost = req.body as Post;
    const result = await db.collection<Post>('posts').insertOne(newPost);
    res.status(201).json(result.ops[0]);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}

