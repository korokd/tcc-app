const post = {
  archives: [],
  description:
    "Blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla",
  title: "Xesquedele",
  user: {
    fullName: "Diogo Korok",
    type: "Artist"
  }
};

export const feedItems = Array.apply(null, { length: 18 })
  .map(() => JSON.parse(JSON.stringify(post)))
  .map((p, index) => {
    p.title = p.title + index;
    return p;
  });
