import Image from "next/image";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import { motion } from "framer-motion";

type Post = {
  url: string;
  image: string;
  title: string;
  date: string;
  author: string;
};

type PostCardProps = {
  index: number;
  post: Post;
};

const PostCard = ({ index, post }: PostCardProps) => {
  const delay = index * 0.2;
  const { url, image, title, date, author } = post;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { delay, duration: 0.5 },
      }}
      viewport={{ once: true }}
      className="bg-white relative overflow-hidden group"
    >
      <Link href={url} className="relative block overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={1064}
          height={644}
          className="object-cover object-center h-[200px] transition group-hover:scale-[1.05]"
        />
      </Link>

      <div className="p-8">
        <p className="text-gray-500 mb-3 uppercase text-[12px] tracking-[1px]">
          {format(parseISO(date), "LLL d, yyyy")} &bull; {author}
        </p>
        <h3 className="mb-4">
          <Link href={url} className="text-lg leading-none">
            {title}
          </Link>
        </h3>
        <p className="mb-4">
          <Link
            href={url}
            className="text-[12px] tracking-[2px] uppercase border-b-2 pb-2 inline-block border-blue-600  transition group-hover:border-opacity-30 group-hover:text-blue-600"
          >
            Read More
          </Link>
        </p>
      </div>
    </motion.div>
  );
};

export default PostCard;
