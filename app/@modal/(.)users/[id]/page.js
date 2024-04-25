'use client' 
/* document.getElementByIdを使いたいが、document is not definedでエラーになる.
  サーバーコンポーネントなのにクライアントオブジェクトを参照しようとしているため。
  上記を回避するため'use client'を記載 */

import Modal from '@/app/ui/modal'

async function getUserData(userId){
  const response = await fetch(`${process.env.NEXT_PUBLIC_JSONPLACEHOLDER_URL}users/${userId}`, { revalidate: 10, cache: 'no-store' }).then((res) => res.json());
  return response;
}

export default async function Page({ params }) {
      const { id } = params;
      const userData = await getUserData(id)

      //モーダルを起動するために、非表示ボタンを疑似的に押す
      const btn = document.getElementById("open_button");
      btn?.click();
         
    return (
      <>
      <style>{`
        #open_button { display: none ;}
      `}</style> 
      <button type="button" id="open_button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#userModal">Launch demo modal</button>
      <Modal user={userData} />
      </>
    )
  }