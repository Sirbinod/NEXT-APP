import Head from "next/head";
import Image from "next/image";

export default function Home() {
  const arrimg = [
    {
      id: 1,
      img: "/post.jpeg",
      title: "Post",
    },
    {
      id: 2,
      img: "/user.jpg",
      title: "User",
    },
    {
      id: 3,
      img: "/al.jpg",
      title: "Album",
    },
  ];
  return (
    <>
      <Head>
        <title>App..</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <div className="image">
          <Image
            src="/world.jpg"
            layout="fill"
            objectFit="fill"
            quality="100"
          />
        </div>
      </section>
      <section>
        <div className="container ">
          <div className="item-show">
            {arrimg.map((img) => {
              return (
                <div className="item_card">
                  <div id={img.id} className="item_card-img">
                    <Image
                      src={img.img}
                      layout="fill"
                      objectFit="fill"
                      quality="100"
                    ></Image>
                  </div>
                  <h1 className="item-card-tit">{img.title}</h1>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
