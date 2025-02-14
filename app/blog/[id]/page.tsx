interface Blog {
  id: number;
  createdAt: string;
  updatedAt: string;
  title: string;
  content: string;
}

export default async function page({ params }: { params: { id: string } }) {
  const { id } = await params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_BLOG_URL}/${id}`);
  const data: Blog = await res.json();
  try {
    return (
      <div className="min-h-[100dvh]">
        <h1>{data.content}</h1>
      </div>
    );
  } catch {
    return (
      <div className="flex min-h-[100dvh] items-center justify-center gap-4 max-md:flex-col">
        <h1>Article Not Found</h1>
      </div>
    );
  }
}
