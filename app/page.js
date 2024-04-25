import NextLink from 'next/link';

/* Post情報取得 */
async function getPostsData(){  
  const response = await fetch(`${process.env.NEXT_PUBLIC_JSONPLACEHOLDER_URL}posts/`, { revalidate: 10, cache: 'no-store' })
  return response.json();
}

export default async function Page() {
  const postList = await getPostsData();

  //各ユーザーIDでPost情報を1件ずつに絞っています（id=1~10がuser1のPost、id=11～20がuser2の人のPost...という感じだったので10の倍数でfilterかけています。
  const dispList = postList.filter(element => element.id = element.id % 10 === 0);

  return(
    <>
    <div className="container p-2 bg-success-subtle">
      <p>app/page.js</p>
      <ul className="list-group list-group-flush">
        {dispList.map((element, index) => (
          <li key={index} className="list-group-item">
            <div>{element.title}</div>
            <div><NextLink href={`/users/${element.userId}`}>userId:{element.userId}</NextLink></div>
          </li>
        ))}
      </ul>
      </div>
    </>
  )
}